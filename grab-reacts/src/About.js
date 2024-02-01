import React from "react";
import Information from './Information'

const About = () => {
  return (
    <div className="about_container">
    {informationData.map(information => (
        <Information
            informationObj={information} />
    ))}
</div>
  );
};

export default About;

const informationData = [
  {
    traits: "Quickest",
    description: "GrabFood provides the fastest food delivery in the market.",
  },
  {
    traits: "Easiet",
    description:
      "Now grabbing your food is just a few clicks or taps away. Order online or download our Grab super app for a faster and more rewarding experience.",
  },
  {
    traits: "Food for all cravings",
    description: "From local fare to restaurant favourites, our wide selection of food will definitely satisfy all your cravings.",
  },
  {
    traits: "Pay with ease",
    description: "It’s easy to get your meals delivered to you. It’s even easier to pay for it with GrabPay",
  },
  {
    traits: "More Rewarding",
    description: "earn GrabRewards points for every order you make and use them to redeem more goodies.",
  },
];
