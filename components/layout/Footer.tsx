import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, MessageCircle, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Disclaimer */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <p className="text-xs text-brand-gold/70 leading-relaxed">
            Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.
            MDRA Wealth is a registered AMFI Mutual Fund Distributor (ARN-353826). Past performance is not indicative of future results.
            This website does not constitute investment advice.
          </p>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Logo + tagline + ARN */}
          <div>
            <Image
              src="/logo-dark.png"
              alt="MDRA Wealth"
              width={140}
              height={40}
              className="h-10 w-auto mb-4"
            />
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for mutual fund advisory and wealth planning.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-brand-gold/40 bg-brand-gold/5">
              <span className="text-xs font-semibold text-brand-gold">AMFI ARN-353826</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                'Mutual Funds',
                'SIP Planning',
                'Retirement Planning',
                'Insurance Advisory',
                'Tax Saving (ELSS)',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-brand-gold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/917574812332?text=Hi%2C%20I%20want%20consultation%20regarding%20financial%20planning."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={16} className="text-brand-gold shrink-0" aria-hidden="true" />
                  +91 7574812332
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdraconsultancy@outlook.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-gold transition-colors"
                  aria-label="Send email to MDRA Wealth"
                >
                  <Mail size={16} className="text-brand-gold shrink-0" aria-hidden="true" />
                  mdraconsultancy@outlook.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={16} className="text-brand-gold shrink-0 mt-0.5" aria-hidden="true" />
                Ekta Complex, Khanvel, DNH – 396230
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://instagram.com/mdra_wealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="MDRA Wealth on Instagram"
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kushal-pal-9417b7286"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kushal Pal on LinkedIn"
                  className="text-gray-400 hover:text-brand-gold transition-colors"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2025 MDRA Wealth. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-brand-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-brand-gold transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
