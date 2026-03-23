import React, { useState } from 'react';
import { FiFilter, FiStar, FiClock, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
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
    images: [
      'https://images.unsplash.com/photo-1571266028243-d220c6a7a3c3?w=600&q=80',
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80',
      'https://images.unsplash.com/photo-1598387993441-a364f854cfba?w=600&q=80',
      'https://images.unsplash.com/photo-1504704911898-68304a7d2807?w=600&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80',
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80',
      'https://images.unsplash.com/photo-1478146059778-26b09b47c4c1?w=600&q=80',
      'https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=600&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80',
      'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
    ],
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
    images: [
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
      'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&q=80',
    ],
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
  const [currentImg, setCurrentImg] = useState(0);
  const isNew = service.rating === 0;
  const images = service.images || [service.image];

  const prev = (e) => {
    e.stopPropagation();
    setCurrentImg((i) => (i - 1 + images.length) % images.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setCurrentImg((i) => (i + 1) % images.length);
  };

  return (
    <div className="card">

      {/* ── IMAGE 80% ── */}
      <div className="card__image-wrap">
        {/* Scrollable image strip */}
        <div className="card__img-strip" style={{ transform: `translateX(-${currentImg * 100}%)` }}>
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`${service.title} ${idx + 1}`}
              onError={(e) => { e.target.src = FALLBACK_IMG; }}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        {images.length > 1 && (
          <>
            <button className="card__nav card__nav--prev" onClick={prev} aria-label="Previous image">
              <FiChevronLeft size={14} />
            </button>
            <button className="card__nav card__nav--next" onClick={next} aria-label="Next image">
              <FiChevronRight size={14} />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="card__dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`card__dot ${idx === currentImg ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setCurrentImg(idx); }}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}

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