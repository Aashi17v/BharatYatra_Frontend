import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/homepage/footer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="head_container">
        <Container>
          <Row>
            <div className="inner_container">

              <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                <div className="left_area">
                  <ul>
                    <li>
                      <a href="/about_us">About Us</a>
                    </li>
                    <li>
                      <a href="/contact_us">Customer Help</a>
                    </li>
                    <li>
                      <a href="/terms">Terms & Policies</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col xxl={6} xl={6} lg={6} md={6} sm={6} xs={6}>
                <div className="right_area">
                  <ul>
                    <li>
                      <a href="http://facebook.com/" className="txt">
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          className="icon"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="https://x.com/" className="txt">
                        <FontAwesomeIcon
                          icon={faTwitter}
                          className="icon"
                        />
                      </a>
                    </li>

                    <li>
                      <a href="https://www.instagram.com/" className="txt">
                        <FontAwesomeIcon
                          icon={faInstagram}
                          className="icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>

            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}