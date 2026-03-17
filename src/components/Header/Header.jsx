import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2, BsThreeDotsVertical } from 'react-icons/bs';
import { MdOutlineStore } from 'react-icons/md';
import './Header.css';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <header className="header">

      {/* Logo */}
      <div className="header__logo">EventsBridge</div>

      {/* Search Bar */}
      <form className="header__search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="e.g, Beauty Makeover"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <FiSearch />
        </button>
      </form>

      {/* Action Buttons */}
      <nav className="header__actions">
        <button className="header__action-btn">
          <AiOutlineUser size={20} />
          Login
        </button>

        <button className="header__action-btn">
          <MdOutlineStore size={20} />
          Be a Vendor
        </button>

        <button className="header__action-btn">
          <BsCart2 size={20} />
          Cart
        </button>

        <button className="header__menu-btn">
          <BsThreeDotsVertical />
        </button>
      </nav>

    </header>
  );
};

export default Header;