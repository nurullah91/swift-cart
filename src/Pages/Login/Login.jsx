
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center customBg">
      <div className="max-w-md w-full p-6 space-y-8 bg-yellow-300/50  shadow-lg rounded-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Please Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-xl font-semibold text-gray-900">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xl font-semibold text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <input
              type="submit"
              className="w-full myBtn"
              value="Login"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
