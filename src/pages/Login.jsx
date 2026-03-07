import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Static Credentials check
    if (email === 'admin@gmail.com' && password === 'admin123') {
      localStorage.setItem('isLoggedIn', 'true'); // Save session in memory
      alert('Login Successful!');
      navigate('/'); // Redirect to Home
      window.location.reload(); // Refresh state for Navbar
    } else {
      alert('Invalid Credentials!');
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1974')" }}
      >
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 border-4 border-gold rounded-full opacity-20">
          <div className="absolute top-1/2 left-1/2 w-1 h-35 bg-gold -translate-x-1/2 -translate-y-full origin-bottom rotate-0 animate-spin-slow"></div>
        </div>
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      
      <div className="relative z-20 flex justify-center items-center h-screen px-6 page-transition">
        <form onSubmit={handleLogin} className="bg-white/5 backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-white/10 w-full max-w-md shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold text-gold tracking-tighter mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-sm">Sign in to access your luxury timepieces.</p>
          </div>

          <div className="space-y-6">
            <div>
              <input 
                type="email" placeholder="Email Address" required 
                className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition outline-none"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input 
                type="password" placeholder="Password" required 
                className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder:text-gray-500 focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <Link to="/forgot-password" className="hover:text-gold transition">Forgot Password?</Link>
          </div>

          <button type="submit" className="w-full bg-gold text-black font-bold py-4 rounded-xl mt-10 hover:bg-white transition duration-300 shadow-lg">
            LOG IN
          </button>

          <div className="text-center mt-8 text-sm text-gray-400">
            <span>New user? </span>
            <Link to="/register" className="text-gold font-medium hover:text-white transition">Create an Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;