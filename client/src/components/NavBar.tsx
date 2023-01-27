import Image from 'next/image'
import React, { useState, useContext, SetStateAction } from 'react';
import { useRouter } from 'next/router'
import navStyles from '@/styles/NavBar.module.scss';

import { SearchData } from '@/store/store';

interface DataContext {
  data: Array<Object>,
  setData: React.Dispatch<SetStateAction<Object[]>>;
}

const NavBar = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const { setData } = useContext(SearchData) as DataContext;

  const handleSearch = async (e: any) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8000/api/items?q=:${search}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8", 
        "Authorization": `Bearer ${process.env.AUTH_TOKEN}`,
      },
    });
    const data = await res.json();
    setData(data);
    router.push('/items');
  };

  return (
    <header className={navStyles.navbar__layout}>
      <div className={navStyles.navbar__container}>
        <Image
          src="/logo.png"
          alt="MeLi Logo"
          width={60}
          height={60}
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
      </div>
    </header>
  );
};

export default NavBar;