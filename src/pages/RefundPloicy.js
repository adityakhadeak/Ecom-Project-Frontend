import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import React from 'react';
import '../utils/pages-css/RefundPolicy.css'; // Import the CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faInfoCircle, faRedoAlt, faMoneyBillWave, faLock, faClock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
      <div className="refund-policy-container">
      <div className="refund-policy-header">
        <h1><FontAwesomeIcon icon={faRedoAlt} /> QuickCart Refund Policy</h1>
        <p>Your satisfaction is our priority. Learn more about our refund policy below.</p>
      </div>

      <div className="policy-section">
        <h2><FontAwesomeIcon icon={faCalendarAlt} /> Refund Window</h2>
        <p>
          You have 30 days from the date of delivery to request a refund. Please make sure the product is in its original condition, unused, and with all packaging and tags intact.
        </p>
      </div>

      <div className="policy-section">
        <h2><FontAwesomeIcon icon={faInfoCircle} /> Eligibility for Refund</h2>
        <p>
          Refunds are applicable under the following circumstances:
        </p>
        <ul>
          <li>The product is defective or damaged upon arrival.</li>
          <li>Incorrect product received (different from what was ordered).</li>
          <li>The product does not match the description provided on QuickCart.</li>
        </ul>
      </div>

      <div className="policy-section">
        <h2><FontAwesomeIcon icon={faMoneyBillWave} /> Refund Process</h2>
        <p>
          <b>Step 1:</b> Contact our customer support within 30 days of receiving your product.<br />
          <b>Step 2:</b> Provide your order number, product details, and reason for the refund request.<br />
          <b>Step 3:</b> Our team will review your request and provide a return shipping label if eligible.<br />
          <b>Step 4:</b> Once we receive the returned product, we’ll process your refund within 7 business days.
        </p>
      </div>

      <div className="policy-section">
        <h2><FontAwesomeIcon icon={faLock} /> Secure Refunds</h2>
        <p>
          Your refund will be processed through the original payment method you used. We ensure that all transactions are secure and your personal information is protected.
        </p>
      </div>

      <div className="policy-section">
        <h2><FontAwesomeIcon icon={faClock} /> Processing Time</h2>
        <p>
          After receiving your returned product, it may take 5-7 business days for the refund to reflect in your account. The exact time depends on your bank or payment provider.
        </p>
      </div>

      <div className="policy-footer">
        <p>
          If you have any questions or need assistance, feel free to <Link to="/contact">contact our support team</Link>. Thank you for choosing QuickCart!
        </p>
      </div>
    </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
