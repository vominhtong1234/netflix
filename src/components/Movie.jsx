import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UseAuthContext } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
const Movie = ({ item }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UseAuthContext();
	const moveId = doc(db, 'users', `${user?.email}`);
	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(moveId, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert('User must log in to save a movie');
		}
	};
	return (
		<div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer p-2 relative'>
			<img
				className='w-full h-auto block'
				src={
					item ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` : ''
				}
				alt={item.title}
			/>
			<div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white font-bold'>
				<p className='flex items-center justify-center text-xs md:text-sm font-bold h-full'>
					{item.title}
				</p>
				<p>
					{like ? (
						<FaHeart
							onClick={saveShow}
							className='absolute top-4 left-4 text-gray-300'
						></FaHeart>
					) : (
						<FaRegHeart
							onClick={saveShow}
							className='absolute top-4 left-4 text-gray-300'
						></FaRegHeart>
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
