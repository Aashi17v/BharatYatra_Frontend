import { Col, Container, Row } from "react-bootstrap";
import "../../../public/sass/pages/culture.scss";
import Image from "next/image";
import tajmahal from "../../../public/images/tajmahal.jpg";
import hawamahal from "../../../public/images/hawamahal.jpg";
import redfort from "../../../public/images/redfort.jpg";
import diwali from "../../../public/images/diwali.jpg";
import holi from "../../../public/images/holi.jpg";
import navratri from "../../../public/images/navratri.jpg";
import textile from "../../../public/images/textile.jpg";
import pottery from "../../../public/images/pottery.jpg";
import miniature from "../../../public/images/miniature.jpg";
import kathak from "../../../public/images/kathak.jpg";
import bollwood from "../../../public/images/bollwood.png";
import classical from "../../../public/images/classical.jpg";

export default function Cultural() {
    return (
        <>
            <div className="cultural_outer">
                <div className="banner_area">
                    <div className="banner_content">
                        <h2>Immerse Yourself in India's Rich Culture & Heritage</h2>
                        <p>Ancient traditions to vibrant modern expressions, discover the soul of India through its arts, festivals story, and culinary delights.</p>
                    </div>
                </div>
                <div className="content_area">
                    <Container>
                        <Row>
                            <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                <div className="head_area">
                                    <h3> Architectural Marvels</h3>
                                    <p> Explore India's breathtaking monuments and historical sites that tells tales of empires and artistry.</p>
                                </div>
                                <div className="card_area">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={tajmahal} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>An iconic ivory-white marble mausoleum, a UNESCO World Heritage site and a symbol of eternal love. Its intricate design features Persian,islamic,and indian.</p>
                                                        <h3> Taj Mahal</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={hawamahal} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>The "Palace of Winds' in jaipur for its unique five-story with 953 small windows designed to allow royal ladies to observe street festivals unseen.</p>
                                                        <h3> Hawa Mahal</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={redfort} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>A historic fort in Delhi,serving as the main residence of the Mughal emperors for nearly 200 years.It is a UNESCO World Heritage Site reflecting Mughal architecture.</p>
                                                        <h3>Red Fort</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                 <div className="head_area">
                                    <h3> Vibrant Festivals & Celebrations</h3>
                                    <p> Experience the joyous spirit of India through its diverse and colorful calender of festivals.</p>
                                </div>
                                <div className="card_area">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={diwali} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>The "Festival of Lights' is one of India's biggest and most important holidays.It's a five-day celebration symbolizing the victory of light over darkness and good over evil.</p>
                                                        <h3> Diwali</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={holi} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>The 'Festivals of Colors' Celebrates the arrival of spring,love,and the triumph of good over evil.Participants joyfully throw colored powders and water.</p>
                                                        <h3> Holi</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={navratri} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>A nine-night Hindu festival Celebrated in the autumn,dedicated to the divine feminine Devi(Durga).It culminates in Dusshera or vijaydashmi.</p>
                                                        <h3>Navratri</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                  <div className="head_area">
                                    <h3>Traditional Arts & Crafts</h3>
                                    <p> Witness the intricate craftsmanship and timeless artistic expressions passed down through generations.</p>
                                </div>
                                <div className="card_area">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={textile} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>India is reowned for its diverse textile traditions,including intricate handloom weaving,embroidering,and block printing techniques,reflecting regional artisery.</p>
                                                        <h3> Textile Weaving</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={pottery} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>Ancient craft of shapig clay into functional and decorative items.Indian pottery traditions are diverse,from terracotta to glazed ceramics.
                                                        </p>
                                                        <h3> Pottery</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={miniature} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>A delicate art form,often characterizedby intricate brushwork and vibrant colors,depicting themes from mythology,royal life,and nature.</p>
                                                        <h3>Miniature Painting</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </div>
                                   <div className="head_area">
                                    <h3>Performing Arts & Music</h3>
                                    <p> Be captivated by the rhythmic dances and soulful melodies that form the heart of Indian culture.</p>
                                </div>
                                <div className="card_area">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={kathak} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>A classical Indian dance form originating from north India.characterized by intricate footwork,graceful hand gestures,and expresive facial movements.</p>
                                                        <h3> Kathak Dance</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={bollwood} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>
                                                            The vibrant and diverse soundtrack of the Indian film industry,combining traditional indian melodies with western influences for its catchy tunes.
                                                        </p>
                                                        <h3> Bollywood Music</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                           <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12}>
                                            <div className="card">
                                                <div className="image_area">
                                                    <Image src={classical} alt="image" fetchPriority="low"></Image>
                                                    <div className="content_area">
                                                        <p>Encompassing Hindustani and carnatic traditions,characterized by melodic improvisation,intricate rhythm,and rich theoretical foundations,often played on.</p>
                                                        <h3>Clasical Indian Music</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}