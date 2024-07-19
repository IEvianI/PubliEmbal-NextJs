import { useFetch } from '@/hooks/Api';
import MetiersList from './metiers/MetiersList';
import { useEffect, useState } from 'react';

const SectionMetiers = () => {
  const { response, error, isLoading } = useFetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/metiers?populate=*');
  
  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/second-section?populate=*')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        setData(responseData.data.attributes);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  if (isLoading) return <div>Chargement...</div>;

  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  return (
    <>
      <div className="relative bottom-32 w-full">
        <img src="/gobelet.png" alt="Gobelet" className="absolute top-0 right-0" />
      </div>
      <div className='w-full pt-14 pb-14'>
        <h2 className='flex font-secondary font-light text-center text-custom-green uppercase text-6xl mb-16 items-center justify-center mx-auto' style={{marginLeft: '28%', marginRight: '28%'}}>
          {data.title_metiers}
        </h2>
        <img src="/flèche-2.svg" alt="" className='flex items-center justify-center mx-auto' style={{paddingRight: '25%'}}/>
        <MetiersList metiers={response} />
      </div>
      <div className="text-black -rotate-6 font-third w-32 items-center justify-center mx-auto">
      <img src="/arrow-second.svg" alt="" />
        <span style={{ opacity: "20%" }}>{data.metier_hook}</span>
        </div>
    </>
  );
};

export default SectionMetiers;
