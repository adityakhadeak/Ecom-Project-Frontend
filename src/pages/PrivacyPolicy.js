import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import '../utils/pages-css/PrivacyPolicy.css'
const PrivacyPolicy = () => {
  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="privacy-policy-container">
          <div className="privacy-policy-header">
            <h1>Privacy Policy</h1>
            <p>At QuickCart, we value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.</p>
          </div>

          <div className="privacy-policy-content">
            {/* Section 1 */}
            <section className="privacy-section">
              <h2>1. Information We Collect</h2>
              <p>
                We collect various types of information to provide and improve our services. This includes personal information such as your name, email address, phone number, and payment details when you create an account or make a purchase on QuickCart. We may also collect non-personal data such as browsing behavior, IP address, and device information.
              </p>
            </section>

            {/* Section 2 */}
            <section className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>
                The information we collect is used to process your orders, manage your account, provide customer service, and improve our website's functionality. We may also use your data to send promotional emails, updates, and notifications about our services, which you can opt out of at any time.
              </p>
            </section>

            {/* Section 3 */}
            <section className="privacy-section">
              <h2>3. Sharing Your Information</h2>
              <p>
                QuickCart does not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, as long as they agree to keep your information confidential.
              </p>
            </section>

            {/* Section 4 */}
            <section className="privacy-section">
              <h2>4. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can choose to disable cookies through your browser settings, but doing so may affect the functionality of certain features on our website.
              </p>
            </section>

            {/* Section 5 */}
            <section className="privacy-section">
              <h2>5. Data Security</h2>
              <p>
                We implement a variety of security measures to protect your personal information from unauthorized access, alteration, or disclosure. Our website uses SSL encryption to ensure that your data is transmitted securely over the internet.
              </p>
            </section>

            {/* Section 6 */}
            <section className="privacy-section">
              <h2>6. Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights or have any concerns about your data, please contact us at support@quickcart.com.
              </p>
            </section>

            {/* Section 7 */}
            <section className="privacy-section">
              <h2>7. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any changes will be posted on this page, and we encourage you to review it periodically.
              </p>
            </section>

            {/* Section 8 */}
            <section className="privacy-section">
              <h2>8. Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy, please feel free to contact us at support@quickcart.com.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
