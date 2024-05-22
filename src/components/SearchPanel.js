import React, { useState, useEffect } from 'react';

const SearchPanel = ({ onSearch }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchCities = async () => {
      const projectID = '5nlw5q95o7md'; // Replace with your actual project ID
      const response = await fetch('https://academics.newtonschool.co/api/v1/bookingportals/city?limit=40', {
        headers: {
          'projectID': projectID
        }
      });
      const data = await response.json();
      if (data.status === 'success') {
        const cityNames = data.data.cities.map(city => city.cityState.split(',')[0]);
        setCities(cityNames);
      }
    };

    fetchCities();
  }, []);

  const handleSearch = () => {
    onSearch(selectedCity);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
        Destination
      </label>
      <input
        type="text"
        id="city"
        list="city-list"
        value={selectedCity}
        onChange={e => setSelectedCity(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Where are you going?"
      />
      <datalist id="city-list">
        {cities.map((city, index) => (
          <option key={index} value={city} />
        ))}
      </datalist>
      <button
        onClick={handleSearch}
        className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchPanel;
