"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSearchParams } from "next/navigation";
import destinations from "../data/destinations";
import { handlePayment } from "@/utils/payment";
import "../../../public/sass/pages/ticket_booking.scss";

export default function BookingForm() {
  const params = useSearchParams();

  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const [formData, setFormData] = useState({
    destination: "",
    fromDate: "",
    toDate: "",
    fullName: "",
    email: "",
    phone: "",
    requests: "",
    payment: "",
  });

  useEffect(() => {
    const selectedDestination = params.get("destination");
    if (selectedDestination) {
      setFormData((prev) => ({
        ...prev,
        destination: selectedDestination,
      }));
    }
  }, [params]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, fullName, email, phone, payment } = formData;

    if (!destination || !fullName || !email || !phone) {
      alert("Please fill all fields!");
      return;
    }

    if (!payment) {
      alert("Select payment method!");
      return;
    }

    const selectedPlace = destinations.find(
      (item) => item.name === destination
    );

    if (!selectedPlace) {
      alert("Invalid destination selected ❌");
      return;
    }

    const price = Number(selectedPlace.price);
    const totalPeople = Number(adults) + Number(children);
    const totalAmount = price * totalPeople;

    console.log("Destination:", destination);
    console.log("Price:", price);
    console.log("Total People:", totalPeople);
    console.log("Total Amount:", totalAmount);

    if (!totalAmount || isNaN(totalAmount)) {
      alert("Invalid amount ❌");
      return;
    }

    handlePayment({
      amount: totalAmount,
      name: fullName,
      email,
      destination,
      persons: totalPeople, // ✅ THIS LINE FIXES EVERYTHING
    });
  };

  // ✅ Live calculation
  const selectedPlace = destinations.find(
    (item) => item.name === formData.destination
  );

  // ✅ SAFE FIX
  const price =
    selectedPlace && !isNaN(selectedPlace.price)
      ? Number(selectedPlace.price)
      : 0;

  const totalPeople = Number(adults) + Number(children);
  const estimatedTotal = price * totalPeople;

  return (
    <div className="payment-container">
      <Container>
        <Row>
          <Col>
            <h1>Book Your Tour</h1>

            <Form onSubmit={handleSubmit}>

              {/* DESTINATION */}
              <Form.Select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
              >
                <option value="">Choose Destination</option>
                {destinations.map((item, i) => (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </Form.Select>

              {/* DATES */}
              <div className="travel-dates">
                <Form.Control type="date" name="fromDate" onChange={handleChange} />
                <Form.Control type="date" name="toDate" onChange={handleChange} />
              </div>

              {/* 👨‍👩‍👧 TRAVELLERS */}
              <h3>Travellers</h3>

              <div className="travellers">
                <div>
                  <label>Adults</label>
                  <Form.Control
                    type="number"
                    min="1"
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                  />
                </div>

                <div>
                  <label>Children</label>
                  <Form.Control
                    type="number"
                    min="0"
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                  />
                </div>
              </div>

              <p className="total-people">
                Total Travellers: <strong>{totalPeople}</strong>
              </p>

              {/* 💰 PRICE PREVIEW */}
              <p className="price-preview">
                Estimated Total: <strong>₹{estimatedTotal}</strong>
              </p>

              {/* CONTACT */}
              <h3>Contact</h3>
              <div className="contact-details">
                <Form.Control name="fullName" placeholder="Name" onChange={handleChange} />
                <Form.Control name="email" placeholder="Email" onChange={handleChange} />
                <Form.Control name="phone" placeholder="Phone" onChange={handleChange} />
              </div>

              <Form.Control
                as="textarea"
                name="requests"
                value={formData.requests || ""}
                onChange={handleChange}
              />

              {/* PAYMENT */}
              <h3>Payment</h3>
              <div className="payment-options">
                <label className={`payment-card ${formData.payment === "card" ? "active" : ""}`}>
                  <input type="radio" name="payment" value="card" onChange={handleChange} />
                  Card
                </label>

                <label className={`payment-card ${formData.payment === "upi" ? "active" : ""}`}>
                  <input type="radio" name="payment" value="upi" onChange={handleChange} />
                  UPI
                </label>
              </div>

              <Button type="submit">💳 Pay & Book</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}