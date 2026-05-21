import type { Metadata } from 'next';
import { MessageCircle, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact MDRA Wealth',
  description:
    'Contact MDRA Wealth for a free mutual fund and SIP consultation. Chat on WhatsApp with Kushal Pal — AMFI registered distributor ARN-353826 in Khanvel, Dadra & Nagar Haveli.',
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-300 text-lg">
            We&apos;re always happy to help. The fastest way to reach us is WhatsApp.
          </p>
        </div>
      </div>

      <section className="bg-brand-light py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Primary: WhatsApp */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6">
            <div>
              <h2 className="font-heading text-2xl font-bold text-brand-navy mb-2">
                Free Consultation on WhatsApp
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                WhatsApp is our primary consultation channel. Click the button below to start a conversation — we typically respond within a few hours during business hours.
              </p>
            </div>

            <a
              href="https://wa.me/917574812332?text=Hi%2C%20I%20want%20consultation%20regarding%20financial%20planning."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp with MDRA Wealth"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-4 rounded-2xl transition-colors shadow-lg"
            >
              <MessageCircle size={24} aria-hidden="true" />
              Chat on WhatsApp — Get Free Consultation
            </a>

            <div className="flex items-center gap-3 text-brand-navy">
              <MessageCircle size={20} className="text-green-500 shrink-0" aria-hidden="true" />
              <span className="font-semibold">+91 7574812332</span>
            </div>
          </div>

          {/* Secondary info */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-brand-navy mb-1">Support Email</h3>
              <p className="text-xs text-gray-400 mb-3">For non-urgent queries only. Response time: 24–48 hrs.</p>
              <a
                href="mailto:mdraconsultancy@outlook.com,mdraconsultancy@gmail.com"
                aria-label="Email MDRA Wealth"
                className="flex items-center gap-2 text-brand-navy hover:text-brand-gold transition-colors"
              >
                <Mail size={18} className="text-brand-gold shrink-0" aria-hidden="true" />
                mdraconsultancy@outlook.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-brand-navy mb-3">Office Address</h3>
              <div className="flex items-start gap-2 text-gray-600 text-sm">
                <MapPin size={18} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  Ekta Complex, Khanvel,<br />
                  Dadra &amp; Nagar Haveli – 396230
                </address>
              </div>

              {/* Google Maps placeholder */}
              <div className="mt-4 rounded-xl overflow-hidden bg-gray-100 h-40 flex items-center justify-center border border-gray-200">
                {/* Add Google Maps embed URL in the src below */}
                <p className="text-xs text-gray-400 text-center px-4">
                  Google Maps embed — add your embed URL to the iframe here.
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="font-heading font-bold text-brand-navy mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/mdra_wealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MDRA Wealth on Instagram"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-gold transition-colors"
                >
                  <Instagram size={20} aria-hidden="true" /> @mdra_wealth
                </a>
                <a
                  href="https://www.linkedin.com/in/kushal-pal-9417b7286"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kushal Pal on LinkedIn"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-brand-gold transition-colors"
                >
                  <Linkedin size={20} aria-hidden="true" /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
