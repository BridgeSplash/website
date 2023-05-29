
FROM node:18-alpine as deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --forzen-lockfile
RUN npx next telemetry disable

FROM node:18-alpine as builder

WORKDIR /app

COPY next.config.js tailwind.config.js tsconfig.json postcss.config.js ./
COPY package.json package-lock.json ./
COPY --from=deps /app/node_modules ./node_modules

COPY public ./public
COPY app ./app

RUN npm run build

FROM node:18-alpine as runner
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
