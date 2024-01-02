import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';
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
        <div className ='flex flex-col min-h-screen'>
          <NavBar/>
          <main className='flex-grow p-6'>         
          {children}
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  )
}
