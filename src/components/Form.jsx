import React, { useState } from 'react';

const Form = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className='container mx-auto text-center pt-12'>
			<form className='container flex flex-col gap-8 justify-center content-center'>
				<h1 className='font-black self-start'>React Form</h1>
				{/* Form Input divs */}
				<div className='self-start gap'>
					<label className='font-bold'>First Name: </label>
					{/* Form Input */}
					<input
						type='text'
						className='border rounded'
						onChange={(e) => setFirstName(e.target.value)}
					/>
					{/* Form Error/Validation Message */}
					{firstName.length < 2 ? (
						<p className='inline text-red-600 w-84'>
							Name must be at least 2 characters
						</p>
					) : (
						''
					)}
				</div>

				<div className='self-start'>
					<label className='font-bold'>Last Name: </label>

					<input
						type='text'
						className='border rounded'
						onChange={(e) => setLastName(e.target.value)}
					/>
					{<p classname='inline text-red-600 w-84'></p>}
				</div>

				<div className='self-start'>
					<label>Email Address: </label>
					<input
						type='email'
						className='border rounded'
						onChange={(e) => setEmail(e.target.value)}
					/>
					{email.length < 5 ? (
						<p className='inline text-red-600 w-84'>
							Email must be at least 5 characters
						</p>
					) : (
						''
					)}
				</div>

				<div className='self-start'>
					<label>Password: </label>
					<input
						type='password'
						className='border rounded'
						onChange={(e) => setPassword(e.target.value)}
					/>
					{password.length < 8 ? (
						<p className='inline text-red-600'>
							Passwords must be at least 8 characters
						</p>
					) : (
						''
					)}
				</div>

				<div className='self-start'>
					<label>Confirm Password: </label>
					<input
						type='password'
						className='border rounded'
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{confirmPassword !== password ? (
						<p className='inline text-red-600'>
							Passwords must match!
						</p>
					) : (
						''
					)}
				</div>
			</form>
		</div>
	);
};

export default Form;
