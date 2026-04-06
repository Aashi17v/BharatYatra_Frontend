"use client";
import { Container, Row, Col } from "react-bootstrap";
import "../../../public/sass/homepage/header.scss";
import Link from "next/link";

export default function Header({ onLogout }) {

  const handleLogout = () => {
    localStorage.removeItem("userId");
    window.location.href = "/auth";
  };

  return (
    <header className="main_container">
      <Container>
        <Row className="align-items-center">
          <Col xs={12}>
            <div className="inner_area">

              {/* 💎 LOGO */}
              <div className="logo-container">
                <svg className="logo-icon" viewBox="0 0 100 100">
                  <path d="M20,90 H80 V35 L50,15 L20,35 Z" fill="#d4af37" />
                  <path d="M42,90 V60 H58 V90" fill="#5a0f2e" />
                  <circle cx="50" cy="25" r="3" fill="#fff" opacity="0.8" />
                </svg>

                <div className="logo-text">
                  <h1>
                    <span className="brand-b">BHARAT</span>
                    <span className="brand-y">YATRA</span>
                  </h1>
                  <p>DISCOVER INDIA'S SOUL</p>
                </div>
              </div>

              {/* 🧭 NAVBAR */}
              <nav className="listing">
                <ul>
                  <li><Link href="/homepage">Home</Link></li>
                  <li><Link href="/about_us">About Us</Link></li>
                  <li><Link href="/destinations">Destinations</Link></li>
                  <li><Link href="/cultural">Culture & Heritage</Link></li>
                  <li><Link href="/ticket_booking">Ticket Booking</Link></li>
                  <li><Link href="/contact_us">Contact Us</Link></li>
                </ul>
              </nav>

              {/* 🔥 LOGOUT */}
              <button 
                className="logout-btn" 
                onClick={onLogout ? onLogout : handleLogout}
              >
                Logout
              </button>

            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}