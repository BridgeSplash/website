import './globals.css'
import { Inter } from 'next/font/google'
import ComingSoon from './ComingSoon'
import SupportModal from './SupportModal'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BridgeSplash - Minecraft Network',
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
        {children}
        <ComingSoon />
      </body>
    </html>
  )
}
