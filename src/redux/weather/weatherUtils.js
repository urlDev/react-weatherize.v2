/* eslint-disable no-confusing-arrow */
const prevSearchedCities = (prevSearchedCity, searchedCity) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  prevSearchedCity.includes(searchedCity)
    ? prevSearchedCity
    : [...prevSearchedCity, searchedCity];

export default prevSearchedCities;
