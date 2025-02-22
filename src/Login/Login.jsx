import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitterX } from 'react-icons/bs';
import { SiApple } from 'react-icons/si';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';
const Login = () => {
  const { createNewUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const { email, password } = data;
    email, password;
    try {
      const result = await createNewUser(email, password);
      console.log(result.user);
      Swal.fire({
        title: 'Log in successfully!',
        icon: 'success',
        draggable: true,
      });
      //  navigate('/');
    } catch (error) {
      console.error('Google login error:', error.message);
      Swal.fire({
        icon: 'error',
        title: `${error.message}`,
        text: 'Something went wrong!',
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[16px] font-semibold">
                Email
              </span>
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your personal or work Email..."
              className="input input-bordered"
            />
            {errors.email && (
              <span className=" text-red-600">Email Address is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[16px] font-semibold">
                Password
              </span>
            </label>
            <input
              {...register('password', {
                pattern: /^(?=.*[!@#$%^&*(),.?":{}|<>])/,
              })}
              type="password"
              placeholder="Password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className=" text-red-600">Password is required</span>
            )}
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
