const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchDeliveryTeamRequest = () => ({ type: 'FETCH_DELIVERY_REQUEST' });
const fetchDeliveryTeamSuccess = (payload) => ({
  type: 'FETCH_DELIVERY_SUCCESS',
  payload,
});
const fetchDeliveryTeamFailure = (payload) => ({
  type: 'FETCH_DELIVERY_FAILURE',
  payload,
});

export const fetchDeliveryTeam = () => async (dispatch, getState) => {
  dispatch(fetchDeliveryTeamRequest());

  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    const data = await response.json();
    dispatch(fetchDeliveryTeamSuccess(data));
  } catch (error) {
    dispatch(fetchDeliveryTeamFailure(error));
  }
};
