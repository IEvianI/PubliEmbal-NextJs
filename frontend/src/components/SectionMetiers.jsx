import { useFetch } from '@/hooks/Api';
import { useEffect, useState } from 'react';
import './emblaCarrousel/embla.css';
import EmblaCarousel from './emblaCarrousel/EmblaCarousel';

const SectionMetiers = () => {
    const OPTIONS = { align: 'center' };  // Align center to show central slide prominently
    const { response, error, isLoading } = useFetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/metiers?populate=*');
    const [data, setData] = useState({});
    const [currentMetier, setCurrentMetier] = useState({ title: '', color: '' });

    useEffect(() => {
        fetch('https://upbeat-card-be7fe087f4.strapiapp.com/api/second-section?populate=*')
            .then(response => response.json())
            .then(responseData => {
                console.log('Second Section:', responseData);
                setData(responseData.data.attributes);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, []);

    useEffect(() => {
        if (response) {
            console.log('Metiers Response:', response);
        }
    }, [response]);

    const handleSlideChange = (index) => {
        if (response && response.data && response.data.length > index) {
            const current = response.data[index].attributes;
            setCurrentMetier({ title: current.metier_title, color: current.metier_color });
        }
    };

    if (isLoading) return <div>Chargement...</div>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

    return (
        <>
            <div className="relative bottom-32 w-full">
                <img src="/gobelet.png" alt="Gobelet" className="absolute top-0 right-0 max-[767px]:w-36 max-[767px]:top-10" />
            </div>
            <div className='w-full pt-14 pb-14'>
                <h2 style={{fontWeight: '900'}} className='flex font-secondary max-[767px]:text-4xl text-center text-custom-green uppercase text-6xl mb-16 items-center mx-0 md:mx-24 lg:mx-96 justify-center mx-auto'>
                    {data.title_metiers} <br></br>{data.title_metiers_2}
                </h2>
                <img src="/flèche-2.svg" alt="" className='flex items-center justify-center mx-auto' style={{paddingRight: '25%'}}/>
                {response && response && (
                    <EmblaCarousel slides={response} options={OPTIONS} onSlideChange={handleSlideChange} />
                )}
            </div>
            <div className="relative w-full flex items-center justify-center">
                <span className="background-text">{currentMetier.title}</span>
            </div>
            <div className="text-black -rotate-6 font-third w-32 mx-auto mb-20 arrow-container">
                <img src="/arrow-second.svg" alt="" className='arrow-image' />
                <span className='arrow-text' style={{ opacity: "20%" }}>{data.metier_hook}</span>
            </div>
        </>
    );
};

export default SectionMetiers;
