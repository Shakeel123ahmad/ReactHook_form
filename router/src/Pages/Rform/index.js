import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const Rform = () => {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    firstName: Yup.string().matches(/^[a-zA-Z]+$/, "First Name must only contain letters").required("First Name is required"),
    secondName: Yup.string().matches(/^[a-zA-Z]+$/, "Second Name must only contain letters").required("Second Name is required"),
    userName: Yup.string().matches(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/, "Username must contain only letters and special characters").required("Username is required"),
    email: Yup.string().email("Invalid email format").matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, "Invalid email address").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least 8 characters, one letter, one number, and one special character").required("Password is required"),
    phone: Yup.string().matches(/^\+92\d{3}\s\d{4}\s\d{3}$/, "Phone number must be in format +92xxx xxxx xxx").required("Phone number is required")
  });

  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-2xl font-semibold text-center mb-6">User Registration</h2>

        {/* First Name */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            {...register("firstName")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
        </div>

        {/* Second Name */}
        <div className="mb-4">
          <label htmlFor="secondName" className="block text-sm font-medium text-gray-700">Second Name</label>
          <input
            type="text"
            id="secondName"
            {...register("secondName")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.secondName && <p className="text-red-500 text-xs mt-1">{errors.secondName.message}</p>}
        </div>

        {/* UserName */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">UserName</label>
          <input
            type="text"
            id="userName"
            {...register("userName")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.userName && <p className="text-red-500 text-xs mt-1">{errors.userName.message}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            id="phone"
            {...register("phone")}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
        </div>

        {/* Submit Button */}
        <div className="mb-4 text-center">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rform;
