import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': '9bbb604f6fmsh2e668933ded04d2p1dda3ejsnb8e28e1ab995'
  },
  });

  return data;
}
