import React, { useEffect, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UseAuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { async } from '@firebase/util';
const SavedShows = () => {
	const [movies, setMovies] = useState([]);
	const { user } = UseAuthContext();
	const slideLef = () => {
		var slider = document.getElementById(`slider`);
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		var slider = document.getElementById(`slider`);
		slider.scrollLeft = slider.scrollLeft + 500;
	};
	const movieRef = doc(db, 'users', `${user?.email}`);
	const deleteShow = async (passedId) => {
		try {
			const result = movies.filter((item) => item.id !== passedId);
			await updateDoc(movieRef, {
				savedShows: result,
			});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedShows);
		});
	}, [user?.email]);
	console.log(movies);
	return (
		<>
			<div className=' flex items-center relative'>
				<MdChevronLeft
					onClick={slideLef}
					size='30px'
					className='cursor-pointer absolute bg-white rounded-full opacity-50 z-10 '
				></MdChevronLeft>
				<div
					id={`slider`}
					className='w-full h-full whitespace-nowrap scroll-smooth overflow-x-scroll scrollbar-hide'
				>
					{movies?.map((item, id) => (
						<div
							key={id}
							className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative'
						>
							<img
								className='w-full h-auto block'
								src={item ? `https://image.tmdb.org/t/p/w500/${item.img}` : ''}
								alt={item.title}
							/>
							<div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white font-bold'>
								<p className='flex items-center justify-center text-xs md:text-sm font-bold h-full'>
									{item.title}
								</p>
							</div>
							<div
								onClick={() => deleteShow(item.id)}
								className='absolute top-2 right-2'
							>
								{' '}
								<AiOutlineClose className='text-white text-2xl hover:font-black'></AiOutlineClose>
							</div>
						</div>
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

export default SavedShows;
