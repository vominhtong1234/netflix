import React from 'react';
import { Link } from 'react-router-dom';
import { UseAuthContext } from '../context/AuthContext';
const NavBar = () => {
	const { user, logOut } = UseAuthContext();
	console.log(user);
	return (
		<div className='m-[0.5rem] flex items-center justify-between z-[100] absolute w-full'>
			<Link to='/'>
				<h1 className='text-red-500 text-[2rem] font-bold cursor-pointer'>
					Netflix
				</h1>
			</Link>
			<div>
				{user ? (
					<>
						<Link to='/account'>
							<button className=' px-[1rem] text-white rounded-lg cursor-pointer p-[0.5rem] mr-[1rem] '>
								Account
							</button>
						</Link>
						<Link to='/signup'>
							<button
								onClick={logOut}
								className='bg-red-600 px-[1rem] text-white rounded-lg cursor-pointer p-[0.5rem] mr-[1rem]'
							>
								Log out
							</button>
						</Link>
					</>
				) : (
					<>
						<Link to='/signin'>
							<button className=' px-[1rem] text-white rounded-lg cursor-pointer p-[0.5rem] mr-[1rem] '>
								Sign In
							</button>
						</Link>
						<Link to='/signup'>
							<button className='bg-red-600 px-[1rem] text-white rounded-lg cursor-pointer p-[0.5rem] mr-[1rem]'>
								Sign up
							</button>
						</Link>
					</>
				)}
			</div>
		</div>
	);
};

export default NavBar;
