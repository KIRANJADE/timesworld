import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Loader from '../components/Loader';
import CustomCarousel from '../components/CustomCarousel';
import CountriesCard from '../components/CountriesCard';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import WelcomeSection from '../components/WelcomeSection';
import HomeImage from '../assets/images/homeImage.png';

const Home = () => {
	const location = useLocation();
	const [visibleCount, setVisibleCount] = useState(10);
	const countrydata = useSelector((state) => state.countrydata);
	const { countries, loading } = countrydata;


	if (loading) {
		return <Loader />;
	}

	const selectedRegion = location.state?.country;
	const filteredData = countries.filter((country) => {
		return selectedRegion ? country.region === selectedRegion : true;
	});

	const handleLoadMore = () => {
		setVisibleCount((prev) => prev + 10);
	};

	return (
		<>
		<div className='Welcome_Section_Container'>
			<WelcomeSection />
		</div>
			<div className='Banner_Section'>
				<div className='Banner_Section_left'><CustomCarousel /></div>
				<div className='Banner_Section_right'>
					<img src={HomeImage} alt='banner' className='bannerImage' />
				</div>
			</div>
			<div className='CountriesCard_Container'>
				{filteredData.slice(0, visibleCount).map((country, index) => (
					<>
					<CountriesCard data={country} id={index} />
					</>
				))}
			</div>
			{visibleCount < filteredData.length && (
				<div className='LoadMore_Container'>
					<Button onClick={handleLoadMore} className='LoadMore_Button'>
						Load More
					</Button>
				</div>
			)}
		</>
	);
};

export default Home;