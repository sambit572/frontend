import React, { useState } from 'react';
import { FiFilter, FiStar, FiClock } from 'react-icons/fi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Middle.css';

const servicesData = [
  {
    id: 1,
    title: 'DJ ROYAL KING V4',
    vendor: 'Unknown Vendor',
    rating: 0.0,
    priceMin: 55000,
    priceMax: 80000,
    prepTime: '10h',
    category: 'DJ',
    image: 'https://images.unsplash.com/photo-1571266028243-d220c6a7a3c3?w=600&q=80',
  },
  {
    id: 2,
    title: 'Royal Wedding Decor',
    vendor: 'Decor Dreams',
    rating: 4.5,
    priceMin: 30000,
    priceMax: 90000,
    prepTime: '24h',
    category: 'Decor',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
  },
  {
    id: 3,
    title: 'CaterKing Premium',
    vendor: 'Food Palace',
    rating: 4.8,
    priceMin: 20000,
    priceMax: 60000,
    prepTime: '6h',
    category: 'Catering',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
  },
  {
    id: 4,
    title: 'SnapStudio Pro',
    vendor: 'Lens & Light Co.',
    rating: 4.9,
    priceMin: 15000,
    priceMax: 45000,
    prepTime: '2h',
    category: 'Photography',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
  },
];

const CATEGORIES = ['All', 'DJ', 'Decor', 'Catering', 'Photography'];

const formatK = (n) => {
  if (n >= 100000) return `₹${(n / 100000).toFixed(n % 100000 === 0 ? 0 : 1)}L`;
  return `₹${Math.round(n / 1000)}K`;
};

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80';

const ServiceCard = ({ service }) => {
  const [wished, setWished] = useState(false);
  const isNew = service.rating === 0;

  return (
    <div className="card">

      {/* ── IMAGE 80% ── */}
      <div className="card__image-wrap">
        <img
          src={service.image}
          alt={service.title}
          onError={(e) => { e.target.src = FALLBACK_IMG; }}
        />
        <span className="card__badge">{service.category}</span>
        <button
          className={`card__wishlist ${wished ? 'active' : ''}`}
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
        >
          {wished ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
      </div>

      {/* ── DETAILS 20% ── */}
      <div className="card__body">

        {/* Left: title + vendor */}
        <div className="card__body-left">
          <h3 className="card__title">{service.title}</h3>
          <span className="card__vendor">{service.vendor}</span>
        </div>

        {/* Right: price badge + rating + prep */}
        <div className="card__body-right">
          <span className="card__price-badge">
            {formatK(service.priceMin)}
            <span className="card__price-sep">–</span>
            {formatK(service.priceMax)}
          </span>
          <div className="card__meta-pills">
            <span className={`card__rating ${isNew ? 'card__rating--new' : ''}`}>
              <FiStar size={8} />
              {isNew ? 'New' : service.rating.toFixed(1)}
            </span>
            <span className="card__prep-pill">
              <FiClock size={8} />
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

      <div className="middle__heading">
        <h2 className="middle__heading-title">Top Services</h2>
        <p className="middle__heading-sub">
          Browse from 500+ verified vendors across Odisha
        </p>
      </div>

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

      <div className="middle__grid">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
};

export default Middle;

