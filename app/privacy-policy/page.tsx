import { Metadata } from "next";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | S.A.S Transition",
  description:
    "Learn about how S.A.S Transition collects, uses, and protects your personal information and data privacy rights.",
  keywords: "privacy policy, data protection, GDPR, personal data, information security",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <HeaderNavigation />
      <main
        className="min-h-screen px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 py-20"
        style={{ backgroundColor: "#c4c4c4" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-xl p-8 sm:p-10 md:p-12 lg:p-16">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Privacy Policy
            </h1>
              <p className="text-sm text-gray-500 mb-4">
                  Last updated: {new Date().toLocaleDateString("en-GB")}
                </p>

            <div
              className="space-y-6 text-gray-700"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
           

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                 1. Introduction
                </h2>
                <p className="leading-relaxed mb-4">
                   Welcome to S.A.S Transition (“we”, “our”, “us”). We operate the website https://sastransition.com
 (the “Website”). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our Website, and your rights under the General Data Protection Regulation (GDPR).
                </p>
             
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Data Controller
                </h2>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Name:</strong> S.A.S Transition
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Registered Address:</strong> Tuleviku Tee 10, Peetri, 75312 Harju Maakond, Estonia
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Additional Offices:</strong> 1 Marischal Square, Aberdeen, AB10 1BL, United Kingdom; Rhijnspoorplein 10-38, Amsterdam, 1018 TX, Netherlands
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Email:</strong> <a href="mailto:info@sastransition.com" className="text-[#D0B970] hover:underline">info@sastransition.com</a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Phone:</strong> +372 5886 4233 (Estonia) / +44 1224 034200 (UK) / +31 20 299 1400 (Netherlands)
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. What Personal Data We Collect
                </h2>
                <p className="leading-relaxed">
                  We may collect and process the following categories of personal data:
                </p>
                <ul className="space-y-3 ml-6 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Data you provide directly: when you fill out contact forms, book consultations, subscribe to newsletters, apply for careers, or send enquiries. This may include your name, email address, phone number, company name, job title, and any message you send.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Data collected automatically: when you access and use our Website, we may collect your IP address, browser type & version, device information, operating system, referral URL, pages visited, time of visit, click-path, and cookies/tracking technologies.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Data from third parties: we may receive data from service providers (analytics providers, advertising networks) or publicly available sources to support our services.
                    </span>
                  </li>
               
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="leading-relaxed mb-4">
                  We rely on the following legal bases for processing your personal data under GDPR:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                     Consent: where you have expressly consented (for example, subscribing to our newsletter).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                     Contractual necessity: when processing is necessary for entering into or performing a contract (e.g., providing consultation services).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                     Legitimate interests: when the processing is necessary for our legitimate interests (e.g., improving our Website, marketing our services) and your interests or fundamental rights do not override those interests.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Legal obligation: when we must process data to comply with a legal obligation.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                 5. How We Use Your Personal Data
                </h2>
                <p className="leading-relaxed">
                  We use your personal data for the following purposes:
                </p>
                      <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                    To respond to your inquiries and provide the services you request (e.g., consultation bookings).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                   To manage our relationship with you and your organisation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
To send you marketing communications (if you consent) about our services, events, news and updates.                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                     To administer and improve our Website: analysing use, diagnosing technical issues, enhancing user experience.
                    </span>
                  </li>
                   <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                     To comply with legal or regulatory obligations
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Sharing and Disclosure of Personal Data
                </h2>
                <p className="leading-relaxed mb-4">
                  We may share your personal data with:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Service providers (analytics, email platforms, hosting providers) who assist us in operating our Website and services, under appropriate confidentiality and data-protection obligations.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Our affiliates or associated companies within the S.A.S Transition group, for administrative and technical support.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      If required by law or to protect our rights, property or safety, or that of others.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. International Transfers
                </h2>
                <p className="leading-relaxed">
                  Your data may be transferred to and stored at a destination outside the European Economic Area (&quot;EEA&quot;). Where this occurs, we will ensure an adequate level of protection (e.g., standard contractual clauses, EU-approved transfer mechanisms) in accordance with GDPR.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Data Retention
                </h2>
                <p className="leading-relaxed">
                  We will retain your personal data only as long as necessary to fulfil the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. After that, we will securely delete or anonymise your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  Under GDPR you have certain rights in relation to your personal data:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to access</strong> – you may request a copy of your personal data.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to rectification</strong> – you may request corrections to inaccurate or incomplete data.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to erasure (&quot;right to be forgotten&quot;)</strong> – in certain circumstances you may request deletion of your personal data.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to restrict processing</strong> – you may request limitation of processing in certain circumstances.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to data portability</strong> – you may request that we provide your personal data in a structured, commonly used, machine-readable format.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to object</strong> – you may object to processing based on legitimate interests or direct marketing.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to withdraw consent</strong> – where processing is based on consent, you may withdraw at any time (this does not affect processing before withdrawal).
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Right to lodge a complaint</strong> – you have the right to lodge a complaint with your local supervisory authority.
                    </span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise any of these rights, please contact us at <a href="mailto:info@sastransition.com" className="text-[#D0B970] hover:underline">info@sastransition.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  10. Cookies &amp; Tracking Technologies
                </h2>
                <p className="leading-relaxed">
                  We use cookies and similar technologies on our Website to recognise you when you visit, personalise content, analyse usage and enhance performance. For more detail, please refer to our Cookie Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  11. Security of Your Personal Data
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organisational measures to protect your personal data from loss, misuse, alteration or unauthorised disclosure. However, no method of transmission over the internet or storage method is completely secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  12. Links to Other Websites
                </h2>
                <p className="leading-relaxed">
                  Our Website may contain links to third-party websites that are not operated by us. If you click on a link to a third-party site, you should review its privacy policy because we have no control over their practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  13. Changes to This Privacy Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Policy from time to time. When we do, we will revise the &quot;Last updated&quot; date and, where appropriate, notify you of major changes. We encourage you to review this page periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  14. Contact Us
                </h2>
                <p className="leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data-protection practices, please contact:
                </p>
                <p className="leading-relaxed">
                  <strong>Email:</strong> <a href="mailto:info@sastransition.com" className="text-[#D0B970] hover:underline">info@sastransition.com</a><br />
                  <strong>Address:</strong> Tuleviku Tee 10, Peetri, 75312 Harju Maakond, Estonia
                </p>
                <p className="leading-relaxed mt-2 text-sm text-gray-600">
                  Additional Offices: 1 Marischal Square, Aberdeen, AB10 1BL, United Kingdom; Rhijnspoorplein 10-38, Amsterdam, 1018 TX, Netherlands
                </p>
              </section>


            </div>
          </div>
        </div>
      </main>
      <div className="h-3 bg-[#D0B970]"></div>
      <Footer />
    </>
  );
}
