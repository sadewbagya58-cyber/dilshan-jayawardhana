import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="pt-40 pb-32 px-6 boxy-container">
        <header className="mb-24 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl heading-bold mb-8">
            Inquiries
          </h1>
          <p className="text-white/60 tracking-[0.2em] uppercase text-xs leading-relaxed max-w-2xl mx-auto">
            We are Capturing the moments of today that will wow your hearts tomorrow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 text-center uppercase tracking-[0.3em]">
            <div className="space-y-4">
              <h3 className="text-[10px] text-white/30">Call Us</h3>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="tel:0762697606" className="hover:text-white transition-colors">076 269 7606</a>
                <a href="tel:0764620385" className="hover:text-white transition-colors">076 462 0385</a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] text-white/30">Email</h3>
              <a href="mailto:dilshanjayawardhanaphotography@gmail.com" className="text-sm hover:text-white transition-colors block break-all px-4">
                dilshanjayawardhanaphotography@gmail.com
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-[10px] text-white/30">Location</h3>
              <p className="text-sm">Dambulla, Sri Lanka</p>
            </div>
          </div>
        </header>

        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
