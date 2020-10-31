export default {
  name: 'Athens',
  cod: 200,
  main: {
    temp: 20.5,
    humidity: 35,
  },
  weather: [{ description: 'few clouds', icon: '02d', main: 'Clouds' }],
  visibility: 10000,
  wind: {
    speed: 4.1,
  },
};

export const weatherError = {
  name: 'Lost Angeles',
  cod: '404',
};

export const weatherDefault = {
  name: 'Helsinki',
  cod: 200,
  main: {
    temp: 20.5,
    humidity: 35,
  },
  weather: [{ description: 'few clouds', icon: '02d', main: 'Clouds' }],
  visibility: 10000,
  wind: {
    speed: 4.1,
  },
};
