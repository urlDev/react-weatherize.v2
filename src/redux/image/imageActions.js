import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_API });

export const fetchImageBegin = () => ({
  type: 'FETCH_IMAGE_BEGIN',
});

export const fetchImageSuccess = (image) => ({
  type: 'FETCH_IMAGE_SUCCESS',
  payload: { image },
});

export const fetchImageError = (error) => ({
  type: 'FETCH_IMAGE_ERROR',
  payload: { error },
});

// export const fetchImage = (keyword = 'hd clouds') => async (dispatch) => {
//   dispatch(fetchImageBegin());
//   try {
//     const response = await fetch();
//     const data = await response.json();
//     dispatch(fetchImageSuccess(data));
//     return data;
//   } catch (error) {
//     return fetchImageError(error);
//   }
// };

export const fetchImage = (keyword = 'hd clouds') => (dispatch) => {
  dispatch(fetchImageBegin());
  unsplash.search
    .photos(keyword, 1, 10, { orientation: 'landscape' })
    .then(toJson)
    .then((json) => dispatch(fetchImageSuccess(json)))
    .catch((error) => dispatch(fetchImageError(error)));
};
