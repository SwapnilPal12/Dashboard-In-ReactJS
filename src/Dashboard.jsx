import { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('About Me');
  const [images, setImages] = useState([]);

  const tabs = ['About Me', 'Experiences', 'Recommended'];
  
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <div className="bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto shadow-lg">
        <div className="flex space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${
                activeTab === tab ? 'bg-gray-700' : 'bg-gray-800'
              } px-6 py-2 rounded-full text-sm transition-colors duration-300`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'About Me' && (
          <div className="mt-6 text-sm leading-relaxed">
            <p>
              Hello! I am Dave, your sales rep here from Salesforce. I’ve been
              working at this awesome company for 3 years now.
            </p>
            <p className="mt-2">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old twin
              daughters—Emma and Ella. Both of them are just starting school, so my calendar is usually
              blocked between 9–10 AM.
            </p>
          </div>
        )}

        <div className="mt-8 bg-gray-700 p-4 rounded-lg shadow-inner">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Gallery</h2>
            <label className="bg-gray-600 hover:bg-gray-500 transition-colors duration-300 px-4 py-2 rounded-full cursor-pointer">
              + ADD IMAGE
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="flex space-x-4 overflow-x-auto">
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`gallery-${index}`}
                  className="w-32 h-32 object-cover rounded-md border-2 border-gray-600"
                />
              ))
            ) : (
              <div className="text-gray-400">No images uploaded yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
