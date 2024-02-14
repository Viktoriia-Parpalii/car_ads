import React from "react";
import { StyledHomePage } from "./HomePage.styled";

const HomePage = () => {
  return (
    <StyledHomePage>
      <h1> Welcome to "JourneyWheels"</h1>
      <div className="wrapper">
        <p className="description">
          Your premier destination for hassle-free and reliable car rentals.
          Whether you're embarking on a business trip, family vacation, or a
          weekend getaway, we provide a diverse fleet of meticulously maintained
          vehicles to meet your every need.
        </p>
        {/* <p className="description">Choose your car</p> */}
        <div className="services">
          <h2>Car Rental Services</h2>
          <h3 className="services-title">Explore Our Fleet:</h3>
          <ul>
            <li>
              Discover a diverse range of vehicles, from compact cars to
              spacious SUVs and luxurious sedans.
            </li>
            <li>
              Equipped with the latest features and safety technologies for a
              comfortable and enjoyable ride.
            </li>
          </ul>

          <h3 className="services-title">Flexible Rental Options:</h3>
          <ul>
            <li>
              Daily, weekly, and monthly packages to suit your varying travel
              plans.
            </li>
            <li>
              Enjoy the freedom of the open road with customizable durations.
            </li>
          </ul>

          <h3 className="services-title">Competitive Pricing:</h3>
          <ul>
            <li>
              Transparent and competitive rates designed to fit your budget
              without compromising quality.
            </li>
            <li>
              Special offers and discounts available to make your journey more
              affordable.
            </li>
          </ul>

          <h3 className="services-title">Convenient Booking Process:</h3>
          <ul>
            <li>
              User-friendly online platform for easy browsing and reservation.
            </li>
            <li>
              Assistance available over the phone or in person for any
              inquiries.
            </li>
          </ul>

          <h3 className="services-title">Top-Notch Customer Service:</h3>
          <ul>
            <li>
              Dedicated team prioritizing your satisfaction from inquiry to
              rental completion.
            </li>
            <li>
              Striving to exceed expectations for a seamless car rental
              experience.
            </li>
          </ul>

          <h3 className="services-title">Additional Services:</h3>
          <ul>
            <li>
              Enhance your journey with GPS navigation, child safety seats, and
              comprehensive insurance coverage.
            </li>
            <li>
              Catering to every aspect of your travel needs for a stress-free
              and enjoyable adventure.
            </li>
          </ul>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
