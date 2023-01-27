import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import navStyles from '@/styles/NavBar.module.scss';
import { SearchData } from '@/store/store';
import { DataContext } from '@/types/itemTypes';

const NavBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { setData } = useContext(SearchData) as DataContext;

  const handleFetch = async () => {
    const res = await fetch(`http://localhost:8000/api/items?q=:${search}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8", 
        "Authorization": `Bearer ${process.env.AUTH_TOKEN}`,
      },
    });
    const data = await res.json();
    setData(data);
  }

  const handleSearch = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    await handleFetch();

    router.push('/items');
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)

  return (
    <header className={navStyles.navbar__layout}>
      <div className={navStyles.navbar__container}>
        <Link href='/'>
          <Image
            src="/logo.png"
            alt="MeLi Logo"
            width={60}
            height={60}
          />
        </Link>
        <form className={navStyles.navbar__bar__container}>
          <input 
            className={navStyles.navbar__bar}
            type='text'
            value={search}
            name='search'
            onChange={handleUserInput}
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
      </div>
    </header>
  );
};

export default NavBar;