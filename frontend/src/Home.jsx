import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

const Home = () => {
  // Function to handle smooth scroll
  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };

  // Add smooth scroll event listener
  React.useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll);
      });
    };
  }, []);

  return (
    <div>
      <main>
        <About />
        <Menu />
        <center>
          <Gallery />
        </center>
        <Delivery />
        <Reservation />
        <Contact />
      </main>
    </div>
  );
};

// Header Component

// About Component
const About = () => (
  <section id="about" className="container mt-5 fade-in">
    <div className="card p-4 slide-in">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-3xl font-semibold text-indigo-700">About Us</h2>
          <p className="mt-3">
            We are a family-run restaurant specializing in gourmet dishes with a
            touch of creativity. Our chefs are passionate about creating
            memorable dining experiences.
          </p>
          <p>
            We prioritize local and fresh ingredients to ensure that every dish
            is of the highest quality.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://source.unsplash.com/random/600x400"
            alt="Chef at work"
            className="img-fluid rounded shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

// Menu Component
const Menu = () => (
  <section id="menu" className="container mt-5 fade-in">
    <h2 className="text-3xl font-semibold text-center text-teal-700">
      Our Menu
    </h2>
    <div className="row mt-4">
      <div className="col-md-4 slide-in">
        <div className="card p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
          <img
            src="https://source.unsplash.com/random/300x200?bruschetta"
            alt="Bruschetta"
            className="img-fluid rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-xl text-teal-600">Appetizers</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Bruschetta</li>
              <li>Stuffed Mushrooms</li>
              <li>Garlic Bread</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 slide-in">
        <div className="card p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
          <img
            src="https://source.unsplash.com/random/300x200?steak"
            alt="Steak Frites"
            className="img-fluid rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-xl text-teal-600">Main Courses</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Grilled Salmon</li>
              <li>Steak Frites</li>
              <li>Spaghetti Carbonara</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-4 slide-in">
        <div className="card p-4 rounded-lg shadow-lg hover:shadow-2xl transition">
          <img
            src="https://source.unsplash.com/random/300x200?dessert"
            alt="Tiramisu"
            className="img-fluid rounded-t-lg"
          />
          <div className="card-body">
            <h3 className="text-xl text-teal-600">Desserts</h3>
            <ul className="mt-2 list-disc list-inside">
              <li>Tiramisu</li>
              <li>Cheesecake</li>
              <li>Chocolate Lava Cake</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Gallery Component
const Gallery = () => (
  <>
    <br />
    <h2
      id="gallery"
      className="text-3xl font-semibold text-center text-amber-700"
    >
      Gallery
    </h2>
    <br />
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://source.unsplash.com/random/1400x600"></img>
      </SwiperSlide>
    </Swiper>
  </>
);

// Delivery Component
// import deliveryImage from './deliveryImage.jpg'; // Import your delivery image

const Delivery = () => {
  const [pincode, setPincode] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState(null);

  // Function to handle pincode submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your logic to check delivery status based on the pincode
    // For demonstration purposes, let's assume delivery is available for pincode 123456
    if (pincode === "123456") {
      setDeliveryStatus("Delivery available for your area!");
    } else {
      setDeliveryStatus("Sorry, delivery is not available for your area.");
    }
  };

  return (
    <section id="delivery" className="container mt-5 fade-in text-center">
      <div className="card p-4 slide-in">
        <h2 className="mb-4 text-3xl font-semibold text-center text-blue-700">
          Delivery
        </h2>
        <div className="row">
          {/* Left side: Delivery Image */}
          <div className="col-md-6">
            <p className="mt-3">
              <br />
              <br />
              We offer fast and reliable delivery services right to your
              doorstep. Order your favorite dishes and enjoy them in the comfort
              of your home.
            </p>
            <form onSubmit={handleSubmit} className="mt-3">
              <div className="form-group">
                <br />
                <label htmlFor="pincode">Enter your pincode:</label>
                <center>
                  <input
                    type="text"
                    className="form-control w-auto"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    required
                  />
                </center>
                <br />
                <br />
              </div>
              <button type="submit" className="btn btn-success mt-3">
                Check Delivery
              </button>
            </form>
            {deliveryStatus && <p className="mt-3">{deliveryStatus}</p>}
          </div>
          {/* Right side: Delivery Checking System */}
          <div className="col-md-6"><img
              src="./images/delivery.jpg"
              alt="Delivery"
              className="img-fluid rounded shadow-lg"
            /></div>
        </div>
      </div>
    </section>
  );
};

// Reservation Component
const Reservation = () => (
  <section id="reservation" className="container mt-5 fade-in text-center">
    <div className="card p-4 slide-in">
      <h2 className="text-3xl font-semibold text-center text-green-700">
        Reservation
      </h2>

      <div className="row mt-4">
        <div className="col-md-6">
          <img
            src="./images/reserv.jpg"
            alt="Restaurant Reservation"
            className="img-fluid rounded shadow-lg"
          />
        </div>
        <div className="col-md-6">
          <p className="mt-3">
            Reserve your table in advance to ensure you have a spot at our
            restaurant. We look forward to serving you.
          </p>
          <form className="mt-4 text-left">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input type="date" className="form-control" required />
            </div>
            <div className="form-group mt-3">
              <input type="time" className="form-control" required />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Contact Component
const Contact = () => (
  <section id="contact" className="container mt-5 fade-in">
    <div className="card p-4 slide-in">
      <h2 className="text-3xl font-semibold text-center text-red-700">
        Contact Us
      </h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <p>
            If you have any questions or feedback, feel free to reach out to us.
            We are always here to help you.
          </p>
          <p>
            <strong>Phone:</strong> +123-456-7890
          </p>
          <p>
            <strong>Email:</strong> info@ourrestaurant.com
          </p>

          <iframe
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Khan's%20Food%20Court%20Halima%20Manzil,%20NRI%20Medical%20College%20Rd,%20Sangivallasa,%20Bheemunipatnam,%20Visakhapatnam,%20Andhra%20Pradesh%20531162,%20India+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="80%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
        <div className="col-md-6">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                className="form-control"
                placeholder="Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);



// Footer Compone

export default Home;
