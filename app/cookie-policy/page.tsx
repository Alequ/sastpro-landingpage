import { Metadata } from "next";
import HeaderNavigation from "@/components/shared/header-navigation";
import Footer from "@/components/shared/footer";

export const metadata: Metadata = {
  title: "Cookie Policy | S.A.S Transition",
  description:
    "Learn about how S.A.S Transition uses cookies to improve your browsing experience and analyze website traffic.",
  keywords: "cookie policy, privacy, data protection, GDPR",
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>

            <div
              className="space-y-6 text-gray-700"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              <section>
                <p className="text-sm text-gray-500 mb-4">
                  Last updated: {new Date().toLocaleDateString("en-GB")}
                </p>
                <p className="leading-relaxed">
                  This Cookie Policy explains how S.A.S Transition ("we", "us",
                  or "our") uses cookies and similar technologies when you visit
                  our website. It explains what these technologies are and why
                  we use them, as well as your rights to control our use of
                  them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  What are cookies?
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files that are placed on your device
                  (computer, smartphone, or tablet) when you visit a website.
                  They are widely used to make websites work more efficiently
                  and provide information to website owners.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  How we use cookies
                </h2>
                <p className="leading-relaxed mb-4">
                  We use cookies for the following purposes:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Essential cookies:</strong> These cookies are
                      necessary for the website to function properly. They
                      enable basic functions like page navigation and access to
                      secure areas of the website.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Performance cookies:</strong> These cookies help
                      us understand how visitors interact with our website by
                      collecting and reporting information anonymously.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Functional cookies:</strong> These cookies enable
                      the website to provide enhanced functionality and
                      personalization based on your preferences.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      <strong>Analytics cookies:</strong> We use analytics
                      services to understand how our website is being used and
                      to improve user experience.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Third-party cookies
                </h2>
                <p className="leading-relaxed">
                  In addition to our own cookies, we may also use various
                  third-party cookies to report usage statistics of the website
                  and deliver relevant content and advertisements. These
                  third-party services may include analytics providers and
                  social media platforms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Managing cookies
                </h2>
                <p className="leading-relaxed mb-4">
                  You have the right to decide whether to accept or reject
                  cookies. You can exercise your cookie preferences by:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Using the cookie consent banner that appears when you
                      first visit our website
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-2 h-2 bg-[#D0B970] rounded-full mt-2"></span>
                    <span>
                      Adjusting your browser settings to refuse or delete
                      cookies. Each browser is different, so please consult your
                      browser's help section for instructions
                    </span>
                  </li>
                </ul>
                <p className="leading-relaxed mt-4">
                  Please note that if you choose to block or delete cookies,
                  some parts of our website may not function properly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to this Cookie Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We encourage you to review this policy
                  periodically to stay informed about how we use cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about our use of cookies or this
                  Cookie Policy, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 border-l-4 border-[#D0B970]">
                  <p className="font-medium">S.A.S Transition</p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      href="mailto:enquiries@sastransition.com"
                      className="text-[#D0B970] hover:underline"
                    >
                      enquiries@sastransition.com
                    </a>
                  </p>
                  <p className="mt-1">
                    Phone:{" "}
                    <a
                      href="tel:+37258864233"
                      className="text-[#D0B970] hover:underline"
                    >
                      +372 5886 4233
                    </a>
                  </p>
                </div>
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
