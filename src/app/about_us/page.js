import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/about_us.scss";
import about1 from "../../../public/images/about1.jpeg";
import about2 from "../../../public/images/about2.jpeg";
import about3 from "../../../public/images/about3.jpeg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faCrown,
  faGlobe,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faHeart } from "@fortawesome/free-regular-svg-icons";

export default function AboutUs() {

  // ✅ UPDATED STORY DATA (TRAVEL-FOCUSED)
  const storyData = [
    {
      img: about1,
      title: "Explore India",
      text: "From the majestic mountains of the north to the serene beaches of the south, BharatYatra brings together the most beautiful and popular destinations across India in one place.",
      reverse: false,
    },
    {
      img: about2,
      title: "Experience the Journey",
      text: "Travel is not just about places, but about experiences. BharatYatra highlights cultural richness, traditions, and unforgettable journeys to inspire every traveler.",
      reverse: true,
    },
    {
      img: about3,
      title: "Plan Your Next Trip",
      text: "With a simple and user-friendly interface, BharatYatra helps users discover destinations and plan their trips easily, making travel exploration smooth and enjoyable.",
      reverse: false,
    },
  ];

  // ✅ UPDATED FEATURE DATA
  const featureData = [
    {
      icon: faGlobe,
      title: "Explore Destinations",
      text: "Discover a variety of travel destinations across India in one place.",
    },
    {
      icon: faHeart,
      title: "Travel Inspiration",
      text: "Get inspired with beautiful locations and unique travel experiences.",
    },
    {
      icon: faUserGroup,
      title: "User Friendly",
      text: "Simple and easy-to-use interface for a smooth browsing experience.",
    },
    {
      icon: faBookOpenReader,
      title: "Well Organized",
      text: "Structured layout for better navigation and destination discovery.",
    },
    {
      icon: faCrown,
      title: "Clean Design",
      text: "Modern and minimal UI focused on readability and usability.",
    },
    {
      icon: faGem,
      title: "Responsive Layout",
      text: "Optimized for mobile, tablet, and desktop devices.",
    },
  ];

  return (
    <>
      <div className="outer_area">

        {/* --- Mission Section --- */}
        <div className="first_area">
          <Container>
            <Row>
              <Col xs={12}>
                <div className="content_area text-center">
                  <h2>Our Mission & Values</h2>
                  <p>
                    BharatYatra is designed to provide users with an intuitive platform to explore the diverse and beautiful destinations across India.
                  </p>
                  <p>
                    Our goal is to make travel discovery simple, engaging, and accessible, helping users find inspiration for their next journey with ease.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* --- Story Section --- */}
        <div className="second_area">
          <Container>
            <div className="section_area">
              <h2 className="text-center mb-5">Discover With Us</h2>

              {storyData.map((item, index) => (
                <div className="story_section" key={index}>
                  <Row
                    className={`align-items-center ${
                      item.reverse ? "flex-md-row-reverse" : ""
                    }`}
                  >
                    <Col md={6} xs={12}>
                      <div className="image_area">
                        <Image src={item.img} alt={item.title} />
                      </div>
                    </Col>

                    <Col md={6} xs={12}>
                      <div className="description">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* --- Features Section --- */}
        <div className="third_area">
          <Container>
            <div className="head_area text-center">
              <h2>Why Choose BharatYatra</h2>

              <div className="content_area mt-5">
                <Row className="g-4">
                  {featureData.map((item, index) => (
                    <FeatureCard key={index} {...item} />
                  ))}
                </Row>
              </div>
            </div>
          </Container>
        </div>

      </div>
    </>
  );
}


// ✅ Feature Card Component
const FeatureCard = ({ icon, title, text }) => (
  <Col lg={4} md={6} xs={12}>
    <div className="custom_card">
      <div className="icon_area">
        <FontAwesomeIcon icon={icon} className="icons" />
      </div>
      <div className="heading">{title}</div>
      <div className="paragraph">{text}</div>
    </div>
  </Col>
);