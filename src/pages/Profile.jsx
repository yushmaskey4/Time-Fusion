const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto py-20 px-6 text-white page-transition">
      <h1 className="text-3xl font-bold mb-8 text-gold">My Profile</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Profile Update Form */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-xl mb-6">Update Information</h2>
          <div className="space-y-4">
            <div><label className="text-xs text-gray-500">Username</label>
            <input type="text" defaultValue="Yush Maskey" className="w-full bg-black p-3 rounded border border-gray-800" /></div>
            <div><label className="text-xs text-gray-500">Contact Number</label>
            <input type="text" defaultValue="+977-98XXXXXXXX" className="w-full bg-black p-3 rounded border border-gray-800" /></div>
            <div><label className="text-xs text-gray-500">Address</label>
            <input type="text" defaultValue="Kathmandu, Nepal" className="w-full bg-black p-3 rounded border border-gray-800" /></div>
            <button className="w-full bg-gold text-black font-bold py-3 rounded mt-4">UPDATE PROFILE</button>
          </div>
        </div>

        {/* Previous Orders Logic */}
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
          <h2 className="text-xl mb-6">Order History</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gold">#ORD-99281</p>
              <p className="text-sm">Rolex Submariner - Rs. 1,20,000</p>
              <span className="text-[10px] bg-green-900 text-green-300 px-2 rounded">Completed</span>
            </div>
            <div className="border-b border-gray-800 pb-2">
              <p className="text-gold">#ORD-88210</p>
              <p className="text-sm">Casio G-Shock - Rs. 15,000</p>
              <span className="text-[10px] bg-yellow-900 text-yellow-300 px-2 rounded">Pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;