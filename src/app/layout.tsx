import "./globals.css";

export const metadata = {
  title: 'App Charge',
  description: 'A small app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
