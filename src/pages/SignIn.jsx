import { async } from '@firebase/util';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UseAuthContext } from '../context/AuthContext';
const SignIn = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { signIn } = UseAuthContext();
	const navigate = useNavigate();
	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await signIn(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className='w-full h-screen scroll-smooth overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/8589c3bd-20d3-4674-ab6a-a62804ce8c1e/VN-en-20220509-popsignuptwoweeks-perspective_alpha_website_large.jpg'
					alt=''
				/>
				<div className='fixed w-full h-full top-0 left-0 bg-black/60 z-40'></div>
				<div className='fixed w-full h-full top-0 left-0 px-[1rem] py-[3rem] z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
						<h1 className='font-bold text-[2rem] text-center mb-[0.5rem]'>
							Sign In
						</h1>
						<form onSubmit={submitHandler} className='flex flex-col px-[2rem]'>
							<label>Email:</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								type='email'
								className='text-black p-2 my-4 rounded-md bg-gray-500'
								autoComplete='email'
							/>
							<label>Password:</label>
							<input
								onChange={(e) => setPassword(e.target.value)}
								type='password'
								className='text-black p-2 my-4 rounded-md bg-gray-500	'
								autoComplete='current-password'
							/>
							<button className='bg-red-500 rounded-lg p-2'>Sign in</button>
							<div className='flex justify-between items-center mt-4'>
								<div>
									<input type='checkbox' />
									Remember me?
								</div>
								<p>need help?</p>
							</div>
							<div>
								<span className='mr-4'>new to netflix?</span>
								<Link to='/signup' className='border-b-2'>
									Sign up
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default SignIn;
