import Header from "@/components/Header";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-24">
        <main className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-xl shadow-sm p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Your privacy is important to Tbash Global Ventures. We are
              committed to protecting your personal information and ensuring
              that it is collected, processed, stored, and used responsibly in
              accordance with applicable data protection laws.
            </p>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Data Sharing & Privacy Notice
            </h2>
            <p>
              Tbash Global Ventures is committed to safeguarding your personal
              data in compliance with the Nigeria Data Protection Act (NDPA)
              2023, the General Data Protection Regulation (GDPR) where
              applicable, and other relevant data privacy laws in jurisdictions
              where we operate.
            </p>
            <p>
              By using our website, making inquiries, or engaging with our
              services, you acknowledge and consent that Tbash Global Ventures
              may collect, process, and share your personal information with its
              affiliated companies, business partners, service providers, and
              authorized representatives where necessary for legitimate business
              purposes.
            </p>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Legitimate Business Purposes
            </h2>
            <p>Your information may be used to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Provide, manage, and improve our real estate products and
                services.
              </li>
              <li>
                Respond to inquiries and process property requests or
                transactions.
              </li>
              <li>
                Facilitate communication regarding properties, investments,
                promotions, and customer support.
              </li>
              <li>
                Conduct internal administration, reporting, and business
                operations.
              </li>
              <li>Meet legal, regulatory, and contractual obligations.</li>
              <li>
                Prevent fraud, enhance security, and protect our business
                interests.
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Our Commitment to You
            </h2>
            <p>
              We are committed to maintaining the confidentiality and security
              of your personal information. Appropriate technical,
              administrative, and organizational safeguards are implemented to
              protect your data against unauthorized access, disclosure,
              alteration, or destruction.
            </p>
            <p>
              Tbash Global Ventures will never sell or rent your personal
              information to third parties. Any information shared with trusted
              partners or service providers will be limited to what is necessary
              for the delivery of our services and subject to appropriate
              confidentiality and data protection obligations.
            </p>
            <p>
              You may request access to, correction of, or deletion of your
              personal information where permitted by applicable law.
            </p>
            <p>
              For questions regarding this Privacy Policy or the processing of
              your personal data, please contact us through our official
              customer service channels or designated Data Protection Officer.
            </p>

            <h2 className="text-xl font-semibold text-primary mt-8">
              Disclaimer
            </h2>
            <p>
              While Tbash Global Ventures employs industry-standard security
              measures to protect personal information, no method of electronic
              transmission or data storage can be guaranteed to be completely
              secure. By submitting your information through our website or
              digital platforms, you acknowledge and accept this inherent risk.
            </p>
            <p>
              To the fullest extent permitted by law, Tbash Global Ventures
              shall not be liable for any unauthorized access, disclosure, loss,
              or misuse of personal information resulting from circumstances
              beyond our reasonable control, including but not limited to
              cyberattacks, system failures, internet service disruptions, or
              force majeure events.
            </p>
            <p>
              By accessing or using our website and services, you acknowledge
              that you have read, understood, and agreed to this Privacy Policy.
            </p>
          </div>
        </main>

        {/* Footer (compact version to avoid full footer duplication) */}
        <footer className="bg-gray-800 text-gray-300 py-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tbash Global Ventures. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}