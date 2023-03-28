import './globals.css'

export const metadata = {
  title: 'CoffeeDelivery',
  description: 'Encontre o café perfeito para qualquer hora do dia.',
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
