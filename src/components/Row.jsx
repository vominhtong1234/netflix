import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
const Row = ({ title, fetchURL, rowId }) => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios.get(fetchURL).then((response) => setMovies(response.data.results));
	}, [fetchURL]);

	const slideLef = () => {
		var slider = document.getElementById(`slider ${rowId}`);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById(`slider ${rowId}`);
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
			<div className=' flex items-center relative'>
				<MdChevronLeft
					onClick={slideLef}
					size='30px'
					className='cursor-pointer absolute bg-white rounded-full opacity-50 z-10 '
				></MdChevronLeft>
				<div
					id={`slider ${rowId}`}
					className='w-full h-full whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-hide'
				>
					{movies?.map((item, id) => (
						<Movie item={item} key={id}></Movie>
					))}
				</div>
				<MdChevronRight
					onClick={slideRight}
					size='30px'
					className='cursor-pointer absolute bg-white rounded-full z-10 opacity-50 right-0'
				></MdChevronRight>
			</div>
		</>
	);
};

export default Row;
