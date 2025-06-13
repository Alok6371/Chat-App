import React, { useState } from 'react';

const LoginPage = () => {
  const [currState, setCurrState] = useState('Sign Up');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bio, setBio] = useState('');
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // First step: show bio field after basic info is filled
    if (currState === 'Sign Up' && !isDataSubmitted) {
      setIsDataSubmitted(true);
      return;
    }

    // Second step: submit all data (including bio)
    if (currState === 'Sign Up' && isDataSubmitted) {
      // Handle sign up with bio here
      console.log("Sign up successful", fullName, email, password, bio);
      // Reset form or redirect as needed
      return;
    }

    // Handle login
    if (currState === 'Login') {
      // Handle login here
      console.log("Login successful", email, password);
    }
  };

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* Left Side */}
      <img src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470610/logo_big_jnmlaj.png" alt="Logo" className='w-[min(30vw,250px)]' />

      {/* Right Side----------------- */}
      <form onSubmit={onSubmitHandler} className='border-2 bg-white/10 text-white border-gray-500 p-6 flex flex-col gap-3 rounded-lg shadow-lg w-[400px]'>
        {/* Arrow icon------------  */}
        <h2 className='font-medium text-2xl flex justify-between items-center mb-3'>
          {currState}
          {isDataSubmitted && currState === 'Sign Up' && (
            <img
              src="https://res.cloudinary.com/dn3kbrwp9/image/upload/v1749470611/arrow_icon_b9y6rq.png"
              alt="arrow"
              className='w-5 cursor-pointer transition-all duration-200 hover:-translate-x-2 hover:scale-90'
              onClick={() => setIsDataSubmitted(false)}
            />
          )}
        </h2>

        {/* Step 1: Basic Info */}
        {!isDataSubmitted && currState === 'Sign Up' && (
          <input
            type="text"
            className='p-2 border bg-transparent border-gray-500 rounded-md focus:outline-none'
            placeholder='Full Name'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              type="email"
              className='p-2 border border-gray-500 bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className='p-2 border bg-transparent border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </>
        )}

        {/* Step 2: Bio */}
        {isDataSubmitted && currState === 'Sign Up' && (
          <textarea
            rows={4}
            className='p-2 border bg-transparent border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
            placeholder='Provide a short Bio'
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          ></textarea>
        )}

        <button
          type='submit'
          className='py-2 mt-2 bg-gradient-to-r from-purple-400 to-violet-500 text-white font-semibold rounded-md shadow-md hover:opacity-90 transition'
        >
          {currState === 'Sign Up'
            ? isDataSubmitted
              ? "Create Account"
              : "Next"
            : "Login Now"}
        </button>

        <div className='flex items-center gap-2 text-sm text-gray-300 mt-2'>
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={() => setAgreeTerms(!agreeTerms)}
          />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>

        <div className='flex flex-col gap-2'>
          {
            currState === "Sign Up" ? (
              <p className='text-sm text-gray-100'>
                Already Have an Account ?
                <span onClick={() => { setCurrState('Login'); setIsDataSubmitted(false); }} className='font-medium text-violet-600 cursor-pointer'> &nbsp; Login Here</span>
              </p>
            ) : (
              <p className='text-sm text-gray-100'>
                Create an Account ?
                <span onClick={() => { setCurrState("Sign Up"); setIsDataSubmitted(false); }} className='font-medium text-violet-600 cursor-pointer'> &nbsp;Click Here</span>
              </p>
            )
          }
        </div>

      </form>
    </div>
  );
};

export default LoginPage;
