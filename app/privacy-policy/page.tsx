import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for MDRA Wealth — how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: 1 January 2025</p>
        </div>
      </div>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto prose prose-sm prose-headings:font-heading prose-headings:text-brand-navy prose-p:text-gray-600 prose-li:text-gray-600 max-w-none">

          <h2>1. Introduction</h2>
          <p>
            MDRA Wealth (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operated by Kushal Pal (AMFI ARN-353826), is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website <strong>mdrawealth.in</strong> or use our Smart Planner tool.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We collect the following categories of personal information when you use our Smart Planner or contact us:</p>
          <ul>
            <li><strong>Name:</strong> To personalise your financial plan and communications.</li>
            <li><strong>Age:</strong> To tailor investment recommendations to your life stage.</li>
            <li><strong>Mobile / WhatsApp number:</strong> Primary contact for advisory consultation (mandatory).</li>
            <li><strong>Email address:</strong> For follow-up communications (optional).</li>
            <li><strong>Financial preferences:</strong> Your investment goal, monthly investment amount, risk profile, fund category preference, and investment duration — used solely to generate your financial plan.</li>
          </ul>
          <p>
            We do not collect sensitive financial data such as bank account numbers, PAN, Aadhaar, or credit card information through this website.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>The information collected is used exclusively for:</p>
          <ul>
            <li>Providing personalised mutual fund advisory and financial planning consultation via WhatsApp.</li>
            <li>Following up on your Smart Planner submission to offer tailored investment recommendations.</li>
            <li>Sending occasional educational content about investing (you may opt out at any time).</li>
            <li>Improving our website and Smart Planner tool.</li>
          </ul>
          <p>
            We will <strong>never</strong> use your information for unsolicited marketing, spam, or any purpose unrelated to financial advisory.
          </p>

          <h2>4. Data Sharing and Third Parties</h2>
          <p>
            We do <strong>not</strong> sell, rent, lease, or otherwise transfer your personal information to any third party for marketing or commercial purposes.
          </p>
          <p>
            Your data is stored securely in our database (hosted via Neon PostgreSQL on Vercel&apos;s infrastructure) and is accessible only to authorised personnel at MDRA Wealth.
          </p>
          <p>
            In the course of providing mutual fund advisory services, we may share information with NJ Wealth (our distribution platform) as required for account setup and transaction execution, but only with your explicit consent at that stage.
          </p>

          <h2>5. WhatsApp Communication Consent</h2>
          <p>
            By providing your WhatsApp number through our Smart Planner or contact form, you consent to receive WhatsApp messages from MDRA Wealth related to your financial plan and advisory services. You may withdraw this consent at any time by messaging &ldquo;STOP&rdquo; to +91 7574812332.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal information for as long as necessary to provide advisory services. If you request deletion of your data, we will remove it from our systems within 30 days, except where retention is required by applicable law or regulatory requirements (SEBI/AMFI records).
          </p>

          <h2>7. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our database uses encrypted connections and access is restricted by strong authentication.
          </p>

          <h2>8. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data (subject to regulatory retention requirements).</li>
            <li>Withdraw consent for WhatsApp communications at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at: <strong>mdraconsultancy@outlook.com</strong>
          </p>

          <h2>9. Cookies</h2>
          <p>
            Our website uses minimal cookies necessary for basic functionality (e.g., language preference stored in localStorage). We do not use advertising cookies or third-party tracking cookies.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of our website after changes constitutes acceptance of the updated policy.
          </p>

          <h2>11. Contact</h2>
          <p>
            For privacy-related queries, contact:<br />
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
