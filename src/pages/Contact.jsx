import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 md:px-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4  tracking-tighter">
            GET IN <span className="text-yellow-500 text-shadow-glow">TOUCH</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-widest text-xs">
            Any questions about our limited edition timepieces? Our experts are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-yellow-500 font-bold mb-2">Visit Our Boutique</h3>
              <p className="text-gray-400 text-sm">Kathmandu, Nepal<br/>New Road, Luxury Hub</p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 backdrop-blur-sm">
              <h3 className="text-yellow-500 font-bold mb-2">Direct Support</h3>
              <p className="text-gray-400 text-sm">support@timefusion.com.np<br/>+977 9812345678</p>
            </div>
          </div>

          {/* Right Side: FormSubmit Form */}
          <div className="bg-gray-900/40 p-8 rounded-3xl border border-gray-800 shadow-2xl">
            {/* FormSubmit API Endpoint */}
            <form 
              action="https://formsubmit.co/yushmaskey54@gmail.com" 
              method="POST" 
              className="space-y-5"
            >
              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  placeholder="Charles Darwin"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-yellow-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  placeholder="project@example.com"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-yellow-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Watch Model of Interest</label>
                <input 
                  type="text" 
                  name="interest"
                  placeholder="e.g. Rolex Submariner"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-yellow-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-500 mb-2 uppercase">Message</label>
                <textarea 
                  name="message"
                  rows="4"
                  required
                  placeholder="How can we assist you today?"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-sm focus:border-yellow-500 focus:outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] uppercase tracking-widest text-sm"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;