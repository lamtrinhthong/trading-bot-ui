import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Charts() {
  const [candlesticks, setCandlesticks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.14.130:8000/api/candlesticks/')
      .then(response => {
        console.log('Data received:', response.json); // In dữ liệu nhận được ra console
        setCandlesticks(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the candlestick data!", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Candlestick Data</h1>
      <ul>
        {candlesticks.map((candlestick, index) => (
          <li key={index}>
            Date: {candlestick.date}, Open: {candlestick.open_price}, High: {candlestick.high_price}, Low: {candlestick.low_price}, Close: {candlestick.close_price}, Time Frame: {candlestick.time_frame}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Charts;
