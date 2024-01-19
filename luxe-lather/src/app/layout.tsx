
import CartProvider from '@/providers/CartProvider';
import Footer from './components/footer/Footer';
import NavBar from './components/nav/NavBar';
import './globals.css'
import { Toaster } from 'react-hot-toast';

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
        <Toaster 
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className ='flex flex-col min-h-screen'>
            <NavBar/>
            <main className='flex-grow p-6'>         
            {children}
            </main>
            <Footer/>
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
