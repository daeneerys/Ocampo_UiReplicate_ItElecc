import React from "react";
import FaqMenu from "./FaqMenu";
import { useState } from "react";

export const Faq = () => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <div className="faq_container">
      <h1>Frequently Asked Questions</h1>
      <h4>What is GrabFood?</h4>
      <p>
        GrabFood is the fastest Food Delivery service in the Philippines. We
        have curated all your favorite dishes, restaurants, and cuisines to help
        you grab your food in the easiest & quickest way possible. Find and
        order your favorite cuisines across the Philippines - order food online
        in just a few taps, from pandesal with kape for Breakfast, to sinigang
        na baboy for Lunch, from tapsilog for brunch to sisig with egg for
        Dinner! We are here to satisfy your hunger with a wide selection of
        merchant partners.
      </p>
      {isShowMore && (
        <>
          <h4>How to order Grabfood online?</h4>
          <p className="faq_num">
            Here is the easiest way to order food from GrabFood in Singapore:
          </p>
          <p className="faq_num">
            <strong>1. Search your favorite restaurant or the dish</strong> -
            Enter your address on the home page. Look at the GrabFood Listed
            Restaurants and Food spots near you. Pick your favorite restaurant
            and browse through the menu and select the dish you want to order.
          </p>
          <p className="faq_num">
            <strong>2. Checkout & Payment</strong> - Once sure that you are
            ordering enough, click on the "ORDER NOW" tab and enter your final
            food delivery address. Choose the payment method that best suits
            you, and checkout.
          </p>
          <p className="faq_num3">
            <strong>3. Delivery</strong> - GrabFood has designed a seamless
            customer journey for you, so you can enjoy your food hassle-free. We
            will send you an instant email and SMS confirming your order and
            expected delivery time. Your food is then on its way.
          </p>
          {faqData.map((faqMenu) => (
            <FaqMenu faqObj={faqMenu} />
          ))}
        </>
      )}
      <button onClick={toggleReadMoreLess}>
        {isShowMore ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default Faq;

const faqData = [
  {
    question: "Does GrabFood provide food delivery 24x7?",
    answer:
      "We understand only one language - food, so yes, we do.. Please note, though we are here as your 24x7 food partners, few of our listed restaurants may have late-night food delivery restrictions or may be unavailable for orders. But we have listed the ones that love your late-night binging in our Late Night Delivery Section.",
  },
  {
    question: "Does GrabFood accept Cash?",
    answer:
      "Sure, we do! GrabFood accepts all forms of payments for food delivery services, including cash on delivery.",
  },
  {
    question: "Can I pay online on GrabFood for my food orders?",
    answer:
      "GrabFood accepts multiple forms of payments for online food orders, including online payments using a credit or debit card, PayPal or cash on delivery. We recommend using GrabPay so you can earn more rewards points, which you can use for discounts on your next order and on other Grab services.",
  },
  {
    question: "How much does GrabFood charge for delivery?",
    answer:
      "Our delivery fee depends on a lot of operational factors like distance from your location to the restaurant. You can check the exact amount you are paying as delivery charges before checking out on the Grab app. There is also a “Free Delivery” section that lists restaurants near you that don’t charge for delivery.    ",
  },
  {
    question: "Which restaurants are listed in GrabFood?",
    answer:
      "What don’t we have on GrabFood? We boast the widest variety of restaurants and cuisines of any food delivery app in the Philippines. You can choose from thousands of restaurants on GrabFood Philippines. You can order food online from all your favorite food spots from Mcdonalds, Jollibee, Chowking, KFC, Shakeys, Yellowcab, Mang Inasal, Tokyo Tokyo, Starbucks, Pizza Hut, and many many more!",
  },
  {
    question: "Does GrabFood have a minimum order?",
    answer:
      "Yes! But you can pay the difference if your order is less than the minimum order amount.",
  },
];
