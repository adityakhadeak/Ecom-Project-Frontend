import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { base_url, config } from "../utils/axiosConfig";
import {
  createAnOrder,
  deleteUserCart,
  getUserCart,
  resetState,
} from "../features/user/userSlice";
import { BeatLoader } from "react-spinners";

// Validation schema using Yup
let shippingSchema = yup.object({
  firstname: yup.string().required("First Name is Required"),
  lastname: yup.string().required("Last Name is Required"),
  address: yup.string().required("Address Details are Required"),
  state: yup.string().required("State is Required"),
  city: yup.string().required("City is Required"),
  country: yup.string().required("Country is Required"),
  pincode: yup
    .number("Pincode No is Required")
    .required("Pincode is Required")
    .positive()
    .integer(),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const authState = useSelector((state) => state?.auth);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("razorpay"); // Default to Razorpay
  const [paymentInfo, setPaymentInfo] = useState({
    razorpayPaymentId: "",
    razorpayOrderId: "",
  });
  const navigate = useNavigate();

  // Calculate total amount based on cart items
  useEffect(() => {
    let sum = 0;
    cartState?.forEach((item) => {
      sum += Number(item.quantity) * item.price;
    });
    setTotalAmount(sum);
  }, [cartState]);

  const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("customer"))
    : null;

  const config2 = {
    headers: {
      Authorization: `Bearer ${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
        }`,
      Accept: "application/json",
    },
  };

  // Fetch user's cart items
  useEffect(() => {
    dispatch(getUserCart(config2));
  }, []);

  // Redirect to orders page after successful order placement
  useEffect(() => {
    if (
      authState?.orderedProduct?.order !== null &&
      authState?.orderedProduct?.success === true
    ) {
      navigate("/my-orders");
    }
  }, [authState]);

  const [cartProductState, setCartProductState] = useState([]);

  // Formik for form handling and validation
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      setShippingInfo(values);
      localStorage.setItem("address", JSON.stringify(values));

      setTimeout(() => {
        checkOutHandler();
      }, 300);
    },
  });

  // Load Razorpay script dynamically
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Prepare cart product state for order creation
  useEffect(() => {
    let items = [];
    cartState?.forEach((item) => {
      items.push({
        product: item.productId._id,
        quantity: item.quantity,
        color: item.color._id,
        price: item.price,
      });
    });
    setCartProductState(items);
  }, [cartState]);

  // Handle Razorpay checkout
  const checkOutHandler = async () => {
    if (paymentMethod === "razorpay") {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load");
        return;
      }

      const result = await axios.post(
        `${base_url}user/order/checkout`,
        { amount: totalAmount + 100 },
        config
      );

      if (!result) {
        alert("Something went wrong");
        return;
      }

      const { amount, id: order_id, currency } = result.data.order;

      const options = {
        key: "rzp_test_HSSeDI22muUrLR", // Replace with your actual Razorpay key
        amount: amount,
        currency: currency,
        name: "QuickCart",
        description: "Test Transaction",
        order_id: order_id,
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
          };

          const result = await axios.post(
            `${base_url}user/order/paymentVerification`,
            data,
            config
          );

          dispatch(
            createAnOrder({
              totalPrice: totalAmount,
              totalPriceAfterDiscount: totalAmount,
              orderItems: cartProductState,
              ordertype:"Online Payment",
              paymentInfo: result.data,
              shippingInfo: JSON.parse(localStorage.getItem("address")),
            })
          );
          dispatch(deleteUserCart(config2));
          localStorage.removeItem("address");
          dispatch(resetState());
        },
        prefill: {
          name: "Aditya",
          email: "aditya@example.com",
          contact: "9455226688",
        },
        notes: {
          address: "developer's corner office",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } else {
      // COD Payment Handling
      dispatch(
        createAnOrder({
          totalPrice: totalAmount,
          totalPriceAfterDiscount: totalAmount,
          orderItems: cartProductState,
          ordertype:"Cash on Delivery",
          paymentInfo:{
            razorpayOrderId: 'order_00',
            razorpayPaymentId: 'pay_00'
          },
          shippingInfo: JSON.parse(localStorage.getItem("address")),
        })
      );
      dispatch(deleteUserCart(config2));
      localStorage.removeItem("address");
      dispatch(resetState());
    }
  };

  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Cart Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Cart
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; /&nbsp;
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Aditya (aditya@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                onSubmit={formik.handleSubmit}
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    className="form-control form-select"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange("country")}
                    onBlur={formik.handleBlur("country")}
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    <option value="India">India</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.country && formik.errors.country}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="firstname"
                    value={formik.values.firstname}
                    onChange={formik.handleChange("firstname")}
                    onBlur={formik.handleBlur("firstname")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                    name="lastname"
                    value={formik.values.lastname}
                    onChange={formik.handleChange("lastname")}
                    onBlur={formik.handleBlur("lastname")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="State"
                    className="form-control"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange("state")}
                    onBlur={formik.handleBlur("state")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.state && formik.errors.state}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="number"
                    placeholder="Pin Code"
                    className="form-control"
                    name="pincode"
                    value={formik.values.pincode}
                    onChange={formik.handleChange("pincode")}
                    onBlur={formik.handleBlur("pincode")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.pincode && formik.errors.pincode}
                  </div>
                </div>
                <div className="w-100">
                  <h4>Payment Method</h4>
                  <div>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={paymentMethod === "razorpay"}
                      onChange={() => setPaymentMethod("razorpay")}
                    />
                    <label className="ms-2">Razorpay</label>
                    <br />
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                    />
                    <label className="ms-2">Cash on Delivery</label>
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Return to Cart
                    </Link>
                    <button type="submit" className="button">
                      Continue to Shipping
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          
          {!cartState ? <div className="col-5" style={{ textAlign: 'center', display:'flex', justifyContent:'center',alignItems:'center' }}><BeatLoader size={10} /></div> :
          <div className="col-5">
            {
              cartState?.map((item, index) => (
                <div
                  key={index}
                  className="border-bottom py-4 d-flex gap-10 mb-2 align-items-center"
                >
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                      >
                        {item?.quantity}
                      </span>
                      <img
                        src={
                          item?.productId?.images[0]?.url ||
                          "/path/to/fallback-image.jpg"
                        }
                        width={100}
                        height={100}
                        alt="product"
                      />
                    </div>
                    <div>
                      <h5 className="total-price">{item?.productId?.title}</h5>
                      <p className="total-price">{item?.color?.title}</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">
                      ₹ {item?.price * item?.quantity}
                    </h5>
                  </div>
                </div>
              ))}
          </div>
          }
        </div>
      </Container>
    </>
  );
};

export default Checkout;
