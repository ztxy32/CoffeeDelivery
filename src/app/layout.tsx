import './globals.css'

export const metadata = {
  title: 'CoffeeDelivery',
  description: 'ifood de café apenas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className='bg-background'>{children}</body>
    </html>
  )
}
