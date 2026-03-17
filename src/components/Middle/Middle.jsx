import React, { useState } from 'react';
import { FiFilter, FiStar, FiCalendar, FiMapPin } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Middle.css';

const servicesData = [
  {
    id: 1,
    title: 'DJ ROYAL KING V4',
    vendor: 'Unknown Vendor',
    eventsHosted: 0,
    location: 'Angul, Ganjam, Khordha, Balasore, Sambalpur',
    state: 'ODISHA',
    rating: 0.0,
    reviews: 0,
    priceMin: 55000,
    priceMax: 80000,
    prepTime: '10h',
    category: 'DJ',
    image: 'https://images.unsplash.com/photo-1571266028243-d220c6a7a3c3?w=400&q=80',
  },
  {
    id: 2,
    title: 'Royal Wedding Decor',
    vendor: 'Decor Dreams',
    eventsHosted: 12,
    location: 'bhubaneswar, Puri, Cuttack, Rourkela',
    state: 'ODISHA',
    rating: 4.5,
    reviews: 28,
    priceMin: 30000,
    priceMax: 90000,
    prepTime: '24h',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&q=80',
  },
  {
    id: 3,
    title: 'CaterKing Premium',
    vendor: 'Food Palace',
    eventsHosted: 45,
    location: 'Bhadrak, Baripada, Jeypore, Balangir',
    state: 'ODISHA',
    rating: 4.8,
    reviews: 103,
    priceMin: 20000,
    priceMax: 60000,
    prepTime: '6h',
    category: 'Catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80',
  },
  {
    id: 4,
    title: 'SnapStudio Pro',
    vendor: 'Lens & Light Co.',
    eventsHosted: 87,
    location: 'Jajpur, Keonjhar, Koraput, Malkangiri',
    state: 'ODISHA',
    rating: 4.9,
    reviews: 214,
    priceMin: 15000,
    priceMax: 45000,
    prepTime: '2h',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&q=80',
  },
];

const formatPrice = (n) =>
  '₹' + n.toLocaleString('en-IN');

const ServiceCard = ({ service }) => {
  const [wished, setWished] = useState(false);

  return (
    <div className="card">
      {/* Image */}
      <div className="card__image-wrap">
        <img src={service.image} alt={service.title} />
        <span className="card__badge">{service.category}</span>
        <button
          className={`card__wishlist ${wished ? 'active' : ''}`}
          onClick={() => setWished(!wished)}
        >
          {wished ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>

      {/* Body */}
      <div className="card__body">
        <h3 className="card__title">{service.title}</h3>

        <div className="card__meta">
          <span className="card__vendor">{service.vendor}</span>
          <span className="card__event-badge">
            <FiCalendar size={11} />
            Event Hosted: {service.eventsHosted}
          </span>
        </div>

        <p className="card__location">
          <FiMapPin size={11} /> {service.location}... {service.state}
        </p>

        <div className="card__rating">
          {service.rating.toFixed(1)} <FiStar size={11} />
          <span style={{ fontWeight: 400, fontSize: '11px', marginLeft: 2 }}>
            ({service.reviews} reviews)
          </span>
        </div>

        <p className="card__price">
          {formatPrice(service.priceMin)} – {formatPrice(service.priceMax)}
        </p>

        {/* <p className="card__prep">
          <span>Prep Time:</span> {service.prepTime}
        </p> */}

        {/* <div className="card__actions">
          <button className="btn-book">BOOK NOW</button>
          <button className="btn-cart">ADD TO CART</button>
        </div> */}
      </div>
    </div>
  );
};

const Middle = () => {
  return (
    <section className="middle">
      {/* Top Filter Bar */}
      <div className="middle__topbar">
        <button className="middle__filter-btn">
          <FiFilter size={15} />
          Filter
        </button>
      </div>

      {/* Cards Grid */}
      <div className="middle__grid">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Middle;