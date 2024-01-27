import React, { useEffect, useState } from 'react';

const VenuesComponent = () => {
  const [venues, setVenues] = useState([]);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/venues', {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, Access-Control-Allow-Headers',

            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setVenues(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div>
      <h1>Venues</h1>
      <ul>
        {venues.map((venue) => (
          <li key={venue.id}>{venue.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default VenuesComponent;
