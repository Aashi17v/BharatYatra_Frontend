import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faAward, faGlobe, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/homepage/qualities.scss";
export default function Qualities() {
    return (
        <>
            <div className="head_area">
                <h2>Why Choose BharatYatra?</h2>
                <div className="content_area">
                    <Container>
                        <Row>
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12}>
                                <div className="card">
                                    <div className="icon_area">
                                        <FontAwesomeIcon icon={faGlobe} className="icons" />
                                    </div>
                                    <div className="heading">
                                        Diverse Destinations
                                    </div>
                                    <div className="paragraph">
                                        From snow-capped Himalayas to sun-kissed beaches,we cover everything.
                                    </div>
                                </div>

                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12}>
                                <div className="card">
                                    <div className="icon_area">
                                        <FontAwesomeIcon icon={faLeaf} className="icons" />
                                    </div>
                                    <div className="heading">
                                        Sustainable Travel
                                    </div>
                                    <div className="paragraph">
                                        we are committed to eco-friendly practices taht preserve India's natural beauty.
                                    </div>
                                </div>

                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12}>
                                <div className="card">
                                    <div className="icon_area">
                                        <FontAwesomeIcon icon={faHeart} className="icons" />
                                    </div>
                                    <div className="heading">
                                        Personalized  Itineraries
                                    </div>
                                    <div className="paragraph">
                                        Tallor your trip to your preferences with our expert travel planners.
                                    </div>
                                </div>

                            </Col>
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} xs={12}>
                                <div className="card">
                                    <div className="icon_area">
                                        <FontAwesomeIcon icon={faAward} className="icons" />
                                    </div>
                                    <div className="heading">
                                        Award-Winning Service
                                    </div>
                                    <div className="paragraph">
                                        Enjoy Seamless travel with our highly-rated customer support and guides.
                                    </div>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
