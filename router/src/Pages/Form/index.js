import React, { useState } from "react";

const Form = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAuth((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!auth.email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(auth.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!auth.password) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(auth.password)) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("The value submitted:");
      console.log(auth);
    }
  };

  return (
    <div className="my-10 mx-20">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <div className="mr-2 mb-1">Email</div>
          <input
            className="border-2 border-black"
            placeholder="Enter your Email"
            type="email"
            value={auth.email}
            name="email"
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-1">
          <div className="mr-2 mb-1">Password</div>
          <input
            className="border-2 border-black"
            placeholder="Enter your Valid Password"
            type="password"
            value={auth.password}
            name="password"
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <br />
        <button className="border-2 border-black px-2" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Form;
