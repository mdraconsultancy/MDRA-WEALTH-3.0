import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using MDRA Wealth services and website.',
};

export default function TermsPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Terms &amp; Conditions</h1>
          <p className="text-gray-400 text-sm">Last updated: 1 January 2025</p>
        </div>
      </div>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm prose-headings:font-heading prose-headings:text-brand-navy prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the website <strong>mdrawealth.in</strong> (&ldquo;Website&rdquo;) or any services provided by MDRA Wealth
            (operated by Kushal Pal, AMFI ARN-353826), you agree to be bound by these Terms &amp; Conditions.
            If you do not agree to these terms, please do not use this website.
          </p>

          <h2>2. Nature of Services</h2>
          <p>
            MDRA Wealth is an <strong>AMFI Registered Mutual Fund Distributor</strong> (ARN-353826). Our services include:
          </p>
          <ul>
            <li>Distribution of mutual fund products on behalf of Asset Management Companies (AMCs).</li>
            <li>Assistance with SIP setup, fund selection, and portfolio review.</li>
            <li>Financial education through calculators, blog articles, and the Smart Planner tool.</li>
          </ul>
          <p>
            <strong>Important:</strong> MDRA Wealth is a mutual fund distributor, <strong>not a SEBI Registered Investment Adviser (RIA)</strong>.
            The guidance provided is informational and educational in nature. We help clients access and understand
            mutual fund products; we do not provide regulated investment advice as defined under the SEBI
            (Investment Advisers) Regulations, 2013.
          </p>

          <h2>3. No Guarantee of Returns</h2>
          <p>
            Mutual fund investments are subject to market risks. All projected returns shown on this website —
            including in the SIP Calculator, Retirement Calculator, and Smart Planner — are <strong>estimates based
            on historical category averages</strong> and are <strong>not guaranteed</strong>.
          </p>
          <p>
            Past performance of any fund or category is not indicative of future results. Actual returns may be
            higher or lower than projections depending on market conditions, fund performance, and other factors
            beyond our control.
          </p>

          <h2>4. Client Responsibility</h2>
          <p>Before investing in any mutual fund scheme, you are responsible for:</p>
          <ul>
            <li>Reading all scheme-related documents (SID, SAI, KIM) carefully.</li>
            <li>Understanding the risks associated with the fund category.</li>
            <li>Ensuring the investment aligns with your financial goals and risk appetite.</li>
            <li>Completing KYC (Know Your Customer) as required by SEBI/AMFI regulations.</li>
          </ul>

          <h2>5. Smart Planner &amp; Calculators</h2>
          <p>
            The Smart Planner and financial calculators on this website are provided for <strong>illustrative and
            educational purposes only</strong>. The projections generated are based on user inputs and assumed
            return rates — they do not account for fund expenses, exit loads, taxes, or individual fund performance.
          </p>
          <p>
            Use of these tools does not create a client-advisor relationship with MDRA Wealth. A formal advisory
            relationship is established only upon explicit agreement through WhatsApp or in-person consultation.
          </p>

          <h2>6. Information Accuracy</h2>
          <p>
            We strive to keep all information on this website accurate and up to date. However, we make no
            warranties regarding the completeness, accuracy, or timeliness of any content, including fund return
            data, tax rules, or regulatory information, which may change without notice.
          </p>

          <h2>7. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites (e.g., NJ Wealth, AMFI). These links are
            provided for convenience only. MDRA Wealth has no control over the content or practices of
            third-party websites and accepts no responsibility for them.
          </p>

          <h2>8. Intellectual Property</h2>
          <p>
            All content on this website — including text, calculations, branding, and the Smart Planner tool —
            is the intellectual property of MDRA Wealth. Reproduction, distribution, or modification of any
            content without prior written permission is prohibited.
          </p>

          <h2>9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, MDRA Wealth shall not be liable for any direct, indirect,
            incidental, or consequential loss arising from your use of this website or reliance on any information
            contained herein.
          </p>

          <h2>10. Governing Law and Jurisdiction</h2>
          <p>
            These Terms &amp; Conditions are governed by the laws of India. Any disputes arising from the use of
            this website or our services shall be subject to the exclusive jurisdiction of the courts of
            <strong> Dadra &amp; Nagar Haveli</strong>.
          </p>

          <h2>11. Regulatory Compliance</h2>
          <p>
            MDRA Wealth operates under the regulatory framework of AMFI (Association of Mutual Funds in India)
            and SEBI (Securities and Exchange Board of India). ARN: <strong>353826</strong>. We comply with all
            applicable regulations governing mutual fund distribution in India.
          </p>

          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms &amp; Conditions at any time. Changes will be posted on
            this page with an updated date. Continued use of the website after changes constitutes acceptance.
          </p>

          <h2>13. Contact</h2>
          <p>
            For any queries regarding these Terms:<br />
            <strong>MDRA Wealth</strong> (ARN-353826)<br />
            Ekta Complex, Khanvel, Dadra &amp; Nagar Haveli – 396230<br />
            Email: mdraconsultancy@outlook.com<br />
            WhatsApp: +91 7574812332
          </p>
        </div>
      </section>
    </>
  );
}
