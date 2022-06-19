import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';
const Main = () => {
	const [movies, setMovies] = useState([]);
	const movie = movies[Math.floor(Math.random() * movies.length)];
	useEffect(() => {
		axios
			.get(requests.requestPopular)
			.then((response) => setMovies(response.data.results));
	}, []);
	// console.log(movie);
	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + '....';
		}
		return str;
	};
	return (
		<div className='w-full h-[550px] text-white'>
			<div className='absolute w-full h-[550px] bg-gradient-to-r from-black	'></div>
			<div className='w-full h-full'>
				<img
					className='w-full h-full object-cover'
					src={
						movie
							? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
							: ''
					}
					alt={movie?.title}
				/>
			</div>
			<div className='absolute w-full top-[20%] p-[0.5rem] md:p-8'>
				<h1 className='text-[20px] md:text-[30px] font-bold'>{movie?.title}</h1>
				<div className='my-[5px]'>
					<button className='border border-gray-300 bg-gray-300 text-black px-[10px] py-[5px] rounded-lg mr-[5px]'>
						Play
					</button>
					<button className='border border-gray-300  text-white px-[10px] py-[5px] rounded-lg'>
						Watch Later
					</button>
				</div>
				<p>Released : {movie?.release_date}</p>
				<p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%]'>
					{truncateString(movie?.overview, 150)}
				</p>
			</div>
		</div>
	);
};

export default Main;
