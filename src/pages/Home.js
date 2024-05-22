import React, { useState } from 'react';
import SearchPanel from '../components/SearchPanel';
import HotelList from '../components/HotelList';

const Home = () => {
  const [hotels, setHotels] = useState([]);

  const handleSearch = async (city) => {
    const projectID = '5nlw5q95o7md'; // Replace with your actual project ID
    const response = await fetch(`https://academics.newtonschool.co/api/v1/bookingportals/hotel?search={"location":"${city}"}`, {
      headers: {
        'projectID': projectID,
        'accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
    if (data.message === 'success') {
      setHotels(data.data.hotels);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <SearchPanel onSearch={handleSearch} />
      <HotelList hotels={hotels} />
    </div>
  );
};

export default Home;
