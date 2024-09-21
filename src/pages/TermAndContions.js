import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import '../utils/pages-css/TermsAndConditions.css';

const TermAndContions = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container className="policy-wrapper py-5 home-wrapper-2">
      <div className="terms-container">
      <div className="terms-header">
        <h1>Terms and Conditions</h1>
        <p>Welcome to QuickCart. Please read these terms and conditions carefully before using our services.</p>
      </div>
      
      <div className="terms-content">
        {/* Section 1 */}
        <section className="terms-section">
          <h2>1. Introduction</h2>
          <p>
            These Terms and Conditions govern your use of QuickCart and all related services provided by us. By
            accessing or using our website, you agree to be bound by these terms. If you do not agree with any part
            of the terms, you should discontinue using our services immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="terms-section">
          <h2>2. Use of Our Services</h2>
          <p>
            You agree to use QuickCart only for lawful purposes and in a way that does not infringe the rights of, 
            restrict, or inhibit anyone else's use and enjoyment of our services. Prohibited behavior includes 
            harassing, causing distress or inconvenience to any other user, transmitting obscene or offensive 
            content, or disrupting the normal flow of dialogue within our website.
          </p>
        </section>

        {/* Section 3 */}
        <section className="terms-section">
          <h2>3. Account Registration</h2>
          <p>
            When you create an account on QuickCart, you must provide accurate, complete, and current information. 
            Failure to do so constitutes a breach of the Terms, which may result in the immediate termination of 
            your account. You are responsible for safeguarding your account password and for any activities or 
            actions under your password.
          </p>
        </section>

        {/* Section 4 */}
        <section className="terms-section">
          <h2>4. Product Information and Pricing</h2>
          <p>
            We strive to ensure that all product descriptions, images, and prices are accurate. However, errors may 
            occur, and we reserve the right to correct any inaccuracies or omissions and to update information at any 
            time without prior notice. In the event of an error in pricing, we may cancel orders that are affected.
          </p>
        </section>

        {/* Section 5 */}
        <section className="terms-section">
          <h2>5. Payment and Billing</h2>
          <p>
            By providing payment information, you represent and warrant that you have the legal right to use the 
            payment method provided. All payments are subject to verification and approval. We reserve the right to 
            refuse or cancel any order for reasons including but not limited to product availability, errors in the 
            description or price of the product, or suspected fraudulent activity.
          </p>
        </section>

        {/* Section 6 */}
        <section className="terms-section">
          <h2>6. Returns and Refunds</h2>
          <p>
            Please review our Return Policy for information on returns and refunds. QuickCart reserves the right to 
            refuse returns or refunds in accordance with our policy.
          </p>
        </section>

        {/* Section 7 */}
        <section className="terms-section">
          <h2>7. Limitation of Liability</h2>
          <p>
            QuickCart will not be liable for any indirect, incidental, special, consequential, or punitive damages, 
            including but not limited to loss of profits, data, or use, arising out of or in connection with your 
            use of our services.
          </p>
        </section>

        {/* Section 8 */}
        <section className="terms-section">
          <h2>8. Changes to These Terms</h2>
          <p>
            We reserve the right to update or modify these Terms and Conditions at any time without prior notice. 
            Your continued use of QuickCart after any changes indicates your acceptance of the new terms.
          </p>
        </section>

        {/* Section 9 */}
        <section className="terms-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions or concerns about these Terms and Conditions, please contact us at 
            support@quickcart.com.
          </p>
        </section>
      </div>
    </div>
      </Container>
    </>
  );
};

export default TermAndContions;
