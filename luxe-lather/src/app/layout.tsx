import './globals.css'

export const metadata = {
  title: "LuxLather",
  description: "Freshness"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='p-6'>
         {children}
        </main>
      </body>
    </html>
  )
}
