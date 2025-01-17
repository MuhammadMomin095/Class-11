import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'API Explorer',
  description: 'Explore external APIs with ease',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
          <nav className="bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto px-6 py-3">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">API Explorer</h1>
            </div>
          </nav>
          <main className="container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
            <div className="container mx-auto px-6 py-3 text-center text-gray-600 dark:text-gray-400">
              © 2023 API Explorer. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}

