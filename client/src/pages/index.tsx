
export default function Home() { 
  return (
    <div>Here results</div>
  )
};

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8000/api/items?q=:televisor');

  const data = await res.json();

  return {
    props: {
      data
    }
  }
}