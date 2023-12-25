import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tim - Personal Website',
  description: 'Hello My name is Tim , iam a Front-end devoloper and more , i have experience in Nextjs , ReactJs , Tailwind , TS/JS , Python , Php and more',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-L6EP2SWHRL"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-L6EP2SWHRL');
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
