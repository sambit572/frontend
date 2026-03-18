import React, { useState } from 'react';
import { FiFilter, FiStar, FiClock } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Middle.css';

const servicesData = [
  {
    id: 1,
    title: 'DJ ROYAL KING V4',
    vendor: 'Unknown Vendor',
    eventsHosted: 0,
    location: 'Angul, Ganjam, Khordha, Balasore',
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
    location: 'Bhubaneswar, Puri, Cuttack, Rourkela',
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

const CATEGORIES = ['All', 'DJ', 'Decor', 'Catering', 'Photography'];

const formatPrice = (n) => '₹' + n.toLocaleString('en-IN');

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80';

const ServiceCard = ({ service }) => {
  const [wished, setWished] = useState(false);

  return (
    <div className="card">

      {/* ── IMAGE SECTION (80%) ── */}
      <div className="card__image-wrap">
        <img
          src={service.image}
          alt={service.title}
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />

        {/* category badge — top left */}
        <span className="card__badge">{service.category}</span>

        {/* wishlist — top right */}
        <button
          className={`card__wishlist ${wished ? 'active' : ''}`}
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
        >
          {wished ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>

        {/* price — overlaid on image bottom right */}
        <span className="card__price-overlay">
          {formatPrice(service.priceMin)} – {formatPrice(service.priceMax)}
        </span>
      </div>

      {/* ── DETAILS SECTION (20%) ── */}
      <div className="card__body">

        {/* Row 1: title */}
        <h3 className="card__title">{service.title}</h3>

        {/* Row 2: vendor on left · rating + prep on right */}
        <div className="card__info-row">
          <span className="card__vendor">{service.vendor}</span>
          <div className="card__meta-right">
            <span className="card__rating">
              <FiStar size={9} />
              {service.rating.toFixed(1)}
            </span>
            <span className="card__prep-pill">
              <FiClock size={9} />
              {service.prepTime}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

const Middle = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? servicesData
      : servicesData.filter((s) => s.category === activeCategory);

  return (
    <section className="middle">

      {/* Section heading */}
      <div className="middle__heading">
        <h2 className="middle__heading-title">Top Services</h2>
        <p className="middle__heading-sub">
          Browse from 500+ verified vendors across Odisha
        </p>
      </div>

      {/* Top bar */}
      <div className="middle__topbar">
        <div className="middle__tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`middle__tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className="middle__filter-btn">
          <FiFilter size={14} />
          Filter
        </button>
      </div>

      {/* Cards */}
      <div className="middle__grid">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

export default Middle;
