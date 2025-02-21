import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitterX } from 'react-icons/bs';
import { SiApple } from 'react-icons/si';
const Login = () => {
  return (
    <div className="w-8/12 mx-auto mt-10">
      <h1 className="text-3xl font-semibold ">TaskManager</h1>

      <div className="  mt-12 w-full max-w-sm shrink-0 ">
        <h2 className="text-3xl font-semibold">Sign up</h2>
        <div className="mt-6">
          <button className="flex items-center justify-center gap-3 border py-3 w-full text-xl font-bold rounded-lg">
            <FcGoogle />
            Continue with Google
          </button>
          <button className="flex mt-3 items-center justify-center gap-3 border py-3 w-full text-xl font-bold rounded-lg">
            <BsTwitterX />
            Continue with Twitter
          </button>
          <button className="flex mt-3 items-center justify-center gap-3 border py-3 w-full text-xl font-bold rounded-lg">
            <SiApple />
            Continue with Apple
          </button>
        </div>
        
        <form className="">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[16px] font-semibold">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your personal or work Email..."
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[16px] font-semibold">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign up with Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
