import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true'); // Browser memory ma save garne
      alert('Login Successful!');
      navigate('/'); // Home page ma pathaidine
      window.location.reload(); // Navbar update garna reload
    } else {
      alert('Invalid Credentials! (Hint: admin@gmail.com / admin123)');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black text-white page-transition">
      <form onSubmit={handleLogin} className="bg-gray-900 p-10 rounded-xl border border-gray-800 w-96">
        <h2 className="text-3xl font-bold mb-6 text-gold">Login</h2>
        <input 
          type="email" placeholder="Email" required 
          className="w-full p-3 mb-4 bg-black border border-gray-700 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Password" required 
          className="w-full p-3 mb-6 bg-black border border-gray-700 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-gold text-black font-bold py-3 rounded hover:bg-white transition">
          LOG IN
        </button>
      </form>
    </div>
  );
};

export default Login;