"use client";

import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import destinations from "../data/destinations";
import "../../../public/sass/pages/destinations.scss";

export default function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setVisibleCount(6);
  }, [search, category]);

  // ✅ SAFE FILTER
  const filteredTours = destinations.filter((tour) => {
    const hasName = tour.name
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const hasCategory = category
      ? tour.tags?.includes(category) // ✅ FIXED
      : true;

    return hasName && hasCategory;
  });

  return (
    <div className="main_area">
      
      {/* ================= HEADER ================= */}
      <div className="head_area">
        <Container>
          <div className="content_area">
            <div className="search_filter_area">

              <input
                type="text"
                placeholder="Search destination..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <div className="filter_buttons">
                <button onClick={() => setCategory("Beach")}>Beach</button>
                <button onClick={() => setCategory("Adventure")}>Adventure</button>
                <button onClick={() => setCategory("Spiritual")}>Spiritual</button>
                <button onClick={() => setCategory("")}>All</button>
              </div>

            </div>
          </div>
        </Container>
      </div>

      {/* ================= CARDS ================= */}
      <div className="card_area">
        <Container>
          <Row>
            {filteredTours.slice(0, visibleCount).map((tour, index) => (
              <Col key={index} lg={4} md={6} sm={12}>
                
                <div className="card">

                  <div className="image_area">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      width={400}
                      height={250}
                    />
                  </div>

                  <div className="content_area">
                    <h2>{tour.name}</h2>

                    <div className="tags">
                      {/* ✅ SAFE TAGS */}
                      {tour.tags?.length > 0 ? (
                        tour.tags.map((tag, i) => (
                          <span key={i} className="tag">
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="tag">No tags</span>
                      )}
                    </div>

                    <div className="button_area">
                      <Link href={`/destinations/${tour.slug}`}>
                        <button>View Details</button>
                      </Link>
                    </div>
                  </div>

                </div>

              </Col>
            ))}
          </Row>

          {/* VIEW MORE BUTTON */}
          {visibleCount < filteredTours.length && (
            <div style={{ textAlign: "center" }}>
              <button
                className="view_more_btn"
                onClick={() => setVisibleCount((prev) => prev + 3)}
              >
                View More
              </button>
            </div>
          )}

        </Container>
      </div>

    </div>
  );
}