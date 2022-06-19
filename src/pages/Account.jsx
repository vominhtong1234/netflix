import React from 'react';
import SavedShows from '../components/SavedShows';
const Account = () => {
	return (
		<div>
			<img
				className='w-screen h-screen object-cover'
				src='https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/8589c3bd-20d3-4674-ab6a-a62804ce8c1e/VN-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg'
				alt=''
			/>
			<div className='fixed w-screen h-screen top-0 left-0 bg-black/60'></div>
			<div className='absolute w-screen top-[20vh] left-0 m-4'>
				<h1 className='text-white font-bold text-2xl'>My Shows</h1>
			</div>
			<SavedShows></SavedShows>
		</div>
	);
};

export default Account;
