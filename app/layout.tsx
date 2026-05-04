import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TypingCode — Generate typing practice from your own codebase',
  description: 'Convert your GitHub repos into typing practice exercises to improve coding muscle memory. Authenticate with GitHub, select repos, and practice typing real code with live feedback.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="eed6231b-91c8-4bbc-853a-a884f49a10f0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
