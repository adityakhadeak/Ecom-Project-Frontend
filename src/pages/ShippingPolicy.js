import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import Meta from "../components/Meta";
import '../utils/pages-css/ShippingPolicy.css';

const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shippingg Policy"} />
      <BreadCrumb title="Shippingg P0licy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
      <div className="shipping-policy-container">
      <div className="shipping-policy-header">
        <h1>Shipping Policy</h1>
        <p>At QuickCart, we strive to provide you with the best possible shopping experience. Below are our shipping policies to help you understand how we handle shipping and delivery.</p>
      </div>
      
      <div className="shipping-policy-content">
        {/* Section 1 */}
        <section className="shipping-section">
          <h2>1. Shipping Rates and Delivery Times</h2>
          <p>
            We offer several shipping options to suit your needs. Shipping costs and estimated delivery times will be calculated and displayed at checkout. Please note that delivery times are estimates and may vary due to unforeseen circumstances.
          </p>
          <ul>
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>Overnight Shipping: 1 business day</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="shipping-section">
          <h2>2. Processing Time</h2>
          <p>
            Orders are typically processed within 1-2 business days. Processing times may vary during peak seasons, holidays, or due to unforeseen events. Orders placed after 3 PM will be processed on the next business day.
          </p>
        </section>

        {/* Section 3 */}
        <section className="shipping-section">
          <h2>3. Shipping Locations</h2>
          <p>
            We currently ship to addresses within [Country/Region]. Unfortunately, we do not offer international shipping at this time. Please ensure that you provide a valid and accurate shipping address to avoid any delays or issues with your order.
          </p>
        </section>

        {/* Section 4 */}
        <section className="shipping-section">
          <h2>4. Tracking Your Order</h2>
          <p>
            Once your order has been shipped, you will receive a confirmation email containing tracking information. You can track your order using the link provided in the email or by visiting the "Order Tracking" section on our website.
          </p>
        </section>

        {/* Section 5 */}
        <section className="shipping-section">
          <h2>5. Shipping Delays</h2>
          <p>
            While we strive to ensure timely delivery, there may be occasions when shipping delays occur due to factors beyond our control, such as weather conditions, natural disasters, or courier service disruptions. We appreciate your patience in such situations.
          </p>
        </section>

        {/* Section 6 */}
        <section className="shipping-section">
          <h2>6. Missing or Damaged Items</h2>
          <p>
            If your order arrives with missing or damaged items, please contact our customer support team within 7 days of receiving your order. We will work with you to resolve the issue as quickly as possible.
          </p>
        </section>

        {/* Section 7 */}
        <section className="shipping-section">
          <h2>7. Changes to Shipping Policy</h2>
          <p>
            QuickCart reserves the right to modify or update this Shipping Policy at any time. Any changes will be posted on this page, and we encourage you to review it periodically.
          </p>
        </section>

        {/* Section 8 */}
        <section className="shipping-section">
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Shipping Policy, please feel free to contact us at support@quickcart.com.
          </p>
        </section>
      </div>
    </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
