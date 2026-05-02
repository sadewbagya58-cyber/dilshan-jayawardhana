import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 container mx-auto">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light uppercase tracking-[0.3em] mb-6">
            Inquiries
          </h1>
          <p className="text-white/60 tracking-widest uppercase text-sm leading-relaxed max-w-2xl mx-auto">
            Let's discuss capturing your timeless elegance. Fill out the form below to start our journey together.
          </p>
          <div className="w-24 h-[1px] bg-white/20 mx-auto mt-12" />
        </header>

        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
