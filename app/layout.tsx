import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AuthProvider } from './Providers'
import { Toaster } from 'react-hot-toast'
import { LanguageProvider } from '@/app/LanguageContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'impermanence films',
  description:
    'Basée à Paris depuis 2011, Impermanence Films est une structure œuvrant pour la production, la diffusion et la programmation du cinéma documentaire, privilégiant les regards à hauteur humaine et les films produits dans un contexte de liberté formelle. En soutien aux œuvres indépendantes, Impermanence Films mutualise et met à disposition des outils de production et de diffusion.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body suppressHydrationWarning={true}>
        <AuthProvider>
          <LanguageProvider>
            <div>{children}</div>
          </LanguageProvider>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
