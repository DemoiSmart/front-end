import React, { useState, useEffect } from 'react';

const VenueTable = () => {
  const [venues, setVenues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const authToken = localStorage.getItem('authToken');

        const response = await fetch('http://localhost:8080/api/venues', {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch venues');
        }

        const data = await response.json();
        setVenues(data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching venues.');
      }
    };

    fetchVenues();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Venues</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Room No</th>
            <th>Unit</th>
            <th>Block</th>
            <th>Floor</th>
            <th>Street</th>
            <th>Building</th>
            <th>Postal Code</th>
            <th>Wheelchair</th>
          </tr>
        </thead>
        <tbody>
          {venues.map((venue) => (
            <tr key={venue.id}>
              <td>{venue.id}</td>
              <td>{venue.roomno}</td>
              <td>{venue.unit}</td>
              <td>{venue.block}</td>
              <td>{venue.floor}</td>
              <td>{venue.street}</td>
              <td>{venue.building}</td>
              <td>{venue.postalcode}</td>
              <td>{venue.wheelchair}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VenueTable;
