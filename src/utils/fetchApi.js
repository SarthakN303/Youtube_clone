import axios from 'axios'

export const BASE_URL = 'https://youtube138.p.rapidapi.com'

const options = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
  },
}

export const fetchDataFromAPi = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options)

  return data
}
