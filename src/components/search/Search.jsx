import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../redux/weather/weatherActions';

import './Search.css';

const Search = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(fetchWeather(input));

    setInput('');
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          placeholder="Previous cities"
          value={input}
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img
            // eslint-disable-next-line global-require
            src={require('../../assets/search.svg')}
            alt="search magnifier"
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
