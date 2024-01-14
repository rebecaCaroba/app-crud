import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import '../styles/global.scss'
import { Provider } from '@/Providers/providers'

export const metadata: Metadata = {
  title: 'App CRUD',
  description: 'Next + mySQL',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}  
        </Provider>
      </body>
    </html>
  )
}
