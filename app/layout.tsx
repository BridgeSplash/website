import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './navbar/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BridgeSplash',
  description: 'Minecraft server for the Bridge community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
