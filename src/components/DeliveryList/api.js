const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchDeliveryTeam = async () => {
  const response = await fetch(API_URL);

  return response.json(); // Promise (<pending>)
};
