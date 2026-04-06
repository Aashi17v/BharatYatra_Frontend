
import Link from "next/link";
import "../../../public/sass/homepage/banner.scss";
export default function Banner() {
    return (
        <>
            <div className="banner_area">
                <div className="inner_area">
                    <h2>Discover the Soul of India</h2>
                    <p>Embark on an unforgettable journey through ancient traditions,vibrant cultures,and breathtaking landscapes that define India.</p>
                    <Link href="/destinations">
                        <button>Explore Destinations</button>
                    </Link>
                </div>
            </div>
        </>
    )
}