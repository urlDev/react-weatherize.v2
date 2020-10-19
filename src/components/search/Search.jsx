/* eslint-disable global-require */
import React from 'react';

import './Search.css';

const Search = () => (
  <div className="search">
    <form>
      <input type="text" className="input" placeholder="Another location" />
      <button type="submit">
        <img src={require('../../assets/search.svg')} alt="search magnifier" />
      </button>
    </form>
  </div>
);

export default Search;
