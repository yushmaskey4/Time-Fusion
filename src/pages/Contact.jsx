const Contact = () => {
  return (
    <div className="min-h-[80vh] py-20 px-6 page-transition">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Get In <span className="text-gold">Touch</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Visit our showroom or reach out to us via email for any inquiries.
          </p>

          <div className="space-y-4">
            <p>
              📍 <span className="ml-2 text-gray-200">Itahari, Nepal</span>
            </p>
            <p>
              📧{" "}
              <span className="ml-2 text-gray-200">support@timefusion.com</span>
            </p>
            <p>
              📞 <span className="ml-2 text-gray-200">+977 9812345678</span>
            </p>
          </div>
        </div>

        <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
          <h3 className="text-xl font-bold mb-4 italic">Send a Message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black border border-gray-700 rounded focus:border-gold outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 bg-black border border-gray-700 rounded focus:border-gold outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 bg-black border border-gray-700 rounded h-32 outline-none focus:border-gold"
            ></textarea>
            <button className="w-full bg-gold text-black font-bold py-3 hover:bg-yellow-600 transition">
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
