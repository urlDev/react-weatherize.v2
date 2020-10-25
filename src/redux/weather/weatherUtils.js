/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */

const prevSearchedCities = (prevSearchedCity, searchedCity) =>
  prevSearchedCity.includes(searchedCity)
    ? prevSearchedCity
    : [...prevSearchedCity, searchedCity];

export default prevSearchedCities;
