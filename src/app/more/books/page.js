import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import BooksClient from '../../../components/BooksClient';

// Make this page dynamic to prevent SSR issues
export const dynamic = 'force-dynamic';

export default function Books() {
  return (
    <>
      <Navbar />
      <BooksClient />
      <Footer />
    </>
  );
}
