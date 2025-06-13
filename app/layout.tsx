import 'styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Artistic Heights Academy',
  description: 'Level Up to New Artistic Heights',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-black text-white font-sans">
        <Navbar />
        <main className="flex flex-col min-h-screen justify-between">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}