'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLanguage, Language } from '@/lib/i18n';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import { cn } from '@/lib/utils';

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'hi', label: 'हि' },
  { code: 'gu', label: 'ગુ' },
  { code: 'kn', label: 'ಕ' },
  { code: 'te', label: 'తె' },
  { code: 'ta', label: 'த' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/services', label: t('nav.services') },
    { href: '/smart-planner', label: t('nav.smartPlanner') },
    { href: '/blog', label: t('nav.blog') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        )}
      >
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex items-center justify-between h-16 lg:h-20">
    {/* Logo */}
    <Link href="/" className="flex-shrink-0 -ml-2 sm:-ml-4">
      <Image
        src={scrolled ? '/logo-light.png' : '/logo-dark.png'}
        alt="MDRA Wealth Logo"
        width={80}
        height={80}
        className="h-14 w-14 lg:h-16 lg:w-16 object-contain"
        priority
      />
    </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                    scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold',
                    isActive(link.href) && 'border-b-2 border-brand-gold'
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Calculators Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCalcOpen((v) => !v)}
                  aria-label="Open calculators menu"
                  aria-expanded={calcOpen}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
                    scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white hover:text-brand-gold',
                    (pathname === '/sip-calculator' || pathname === '/retirement-calculator') && 'border-b-2 border-brand-gold'
                  )}
                >
                  {t('nav.calculators')} <ChevronDown size={14} aria-hidden="true" />
                </button>
                {calcOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    <Link
                      href="/sip-calculator"
                      onClick={() => setCalcOpen(false)}
                      className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors"
                    >
                      {t('nav.sipCalculator')}
                    </Link>
                    <Link
                      href="/retirement-calculator"
                      onClick={() => setCalcOpen(false)}
                      className="block px-4 py-2 text-sm text-brand-navy hover:bg-brand-light hover:text-brand-gold transition-colors"
                    >
                      {t('nav.retirementCalculator')}
                    </Link>
                  </div>
                )}
              </div>
            </nav>

            {/* Right side */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen((v) => !v)}
                  aria-label="Select language"
                  aria-expanded={langOpen}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-full border transition-colors',
                    scrolled
                      ? 'border-gray-200 text-brand-navy hover:border-brand-gold'
                      : 'border-white/30 text-white hover:border-brand-gold'
                  )}
                >
                  {LANGUAGES.find((l) => l.code === language)?.label}
                  <ChevronDown size={12} aria-hidden="true" />
                </button>
                {langOpen && (
                  <div className="absolute right-0 top-full mt-1 w-32 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => { setLanguage(lang.code); setLangOpen(false); }}
                        className={cn(
                          'w-full text-left px-4 py-2 text-sm hover:bg-brand-light transition-colors',
                          language === lang.code ? 'text-brand-gold font-semibold' : 'text-brand-navy'
                        )}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <WhatsAppButton label={t('nav.freeConsultation')} size="sm" />
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-md"
              onClick={() => setMobileOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu
                size={24}
                className={scrolled ? 'text-brand-navy' : 'text-white'}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-brand-dark flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <Image
              src="/logo-dark.png"
              alt="MDRA Wealth"
              width={130}
              height={38}
              className="h-9 w-auto"
            />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close mobile menu"
              className="text-white p-2"
            >
              <X size={26} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex-1 flex flex-col gap-1 px-6 pt-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'py-3 text-lg font-medium border-b border-white/10 transition-colors',
                  isActive(link.href) ? 'text-brand-gold' : 'text-white hover:text-brand-gold'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/sip-calculator"
              className="py-3 text-lg font-medium border-b border-white/10 text-white hover:text-brand-gold transition-colors"
            >
              {t('nav.sipCalculator')}
            </Link>
            <Link
              href="/retirement-calculator"
              className="py-3 text-lg font-medium border-b border-white/10 text-white hover:text-brand-gold transition-colors"
            >
              {t('nav.retirementCalculator')}
            </Link>
          </nav>

          <div className="px-6 pb-10 flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                    language === lang.code
                      ? 'bg-brand-gold text-white border-brand-gold'
                      : 'border-white/30 text-white hover:border-brand-gold'
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <WhatsAppButton label={t('nav.freeConsultation')} size="lg" className="w-full justify-center" />
          </div>
        </div>
      )}
    </>
  );
}
