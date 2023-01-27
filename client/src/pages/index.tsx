import SearchMessage from '@/components/SearchMessage';

export default function Home() { 
  return <SearchMessage />
};

/** Alterntive with SSR to show default search */
/* export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/api/items?q=:query', {
    headers: {
      "Content-type": "application/json; charset=UTF-8", 
      "Authorization": `Bearer ${process.env.AUTH_TOKEN}`,
    },
  });

  const data = await res.json();

  return {
    props: {
      data
    },
  };
};

*/
