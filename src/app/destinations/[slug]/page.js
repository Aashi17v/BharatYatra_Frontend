"use client";

import destinations from "../../data/destinations";
import Image from "next/image";
import Link from "next/link";
import "../../../../public/sass/pages/detailpage.scss";
import React from "react";

export default function DetailPage({ params }) {
  // ✅ Unwrap the params promise
  const unwrappedParams = React.use(params);
  const slug = unwrappedParams?.slug;

  const place = destinations.find((item) => item.slug === slug);

  if (!place) return <h1>Not Found</h1>;

  return (
    <div className="detail_page">
      <div className="detail_card">
        {/* IMAGE */}
        <div className="image_box">
          <Image
            src={place.image}
            alt={place.name}
            width={1000}
            height={400}
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="content">
          <h1>{place.name}</h1>

          {/* TAGS */}
          <div className="tags">
            {place.tags?.map((tag, i) => (
              <span key={i}>{tag}</span>
            ))}
          </div>

          <p className="short">{place.shortDesc}</p>
          <p className="long">{place.longDesc}</p>

          {/* INFO */}
          <div className="info">
            <div>
              <h4>📍 Best Places</h4>
              <ul>
                {place.bestPlaces?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4>🌤 Best Time</h4>
              <p>{place.bestTime}</p>
            </div>

            <div>
              <h4>💰 Price</h4>
              <p className="price">₹{place.price}</p>
            </div>

            <div>
              <h4>⭐ Rating</h4>
              <p>{place.rating} / 5</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="buttons">
            {/* 🎟 BOOK NOW */}
            <Link href={`/ticket_booking?destination=${place.name}`}>
              <button className="btn btn-primary">Book Now</button>
            </Link>

            {/* 🔙 BACK */}
            <Link href="/destinations" className="back">
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}