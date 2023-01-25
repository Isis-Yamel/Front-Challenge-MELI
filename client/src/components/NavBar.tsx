import Image from 'next/image'
import React, { useState } from 'react';
import { useRouter } from 'next/router'

import navStyles from '@/styles/NavBar.module.scss';

const NavBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [data, setData] = useState('');

  const handleSearch = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8000/api/items?q=:${search}`);
    const data = await res.json();
    setData(data);
    router.push('/items');
  };

  return (
    <header className={navStyles.navbar__container}>
      <Image
        className={navStyles.navbar__logo}
        src="/logo.svg"
        alt="MeLi Logo"
        width={180}
        height={80}
      />
      <form className={navStyles.navbar__bar__container}>
        <input 
          className={navStyles.navbar__bar}
          type='text'
          value={search}
          name='search'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search here your favorite products'
        />
        <button 
          disabled={search === ''} 
          onClick={handleSearch} 
          className={navStyles.navbar__button}
        >
          <Image
            src="/search.png"
            alt="Search"
            width={30}
            height={30}
          />
        </button>
      </form>
    </header>
  );
};

export default NavBar;