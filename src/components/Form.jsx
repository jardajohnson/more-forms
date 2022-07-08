import React, { useState } from 'react';

const Form = (props) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<div className=''>
			<form className='flex'>
				<div>
					<label>First Name: </label>

					<input
						type='text'
						onChange={(e) => setFirstName(e.target.value)}
					/>
				</div>
				{firstName.length < 2 ? (
					<p>Name must be at least 2 characters</p>
				) : (
					''
				)}
				<div>
					<label>Last Name: </label>

					<input
						type='text'
						onChange={(e) => setLastName(e.target.value)}
					/>
				</div>

				<div>
					<label>Email Address: </label>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
					/>
					{email.length < 5 ? (
						<p>Email must be at least 5 characters</p>
					) : (
						''
					)}
				</div>

				<div>
					<label>Password: </label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
					/>
					{password.length < 8 ? (
						<p>Passwords must be at least 8 characters</p>
					) : (
						''
					)}
				</div>

				<div>
					<label>Confirm Password: </label>
					<input
						type='password'
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					{confirmPassword !== password ? (
						<p>Passwords must match!</p>
					) : (
						''
					)}
				</div>
			</form>
		</div>
	);
};

export default Form;
