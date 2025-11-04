import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/v1/hackrx/run';

export const getAnswers = (documents, questions) => {
  return axios.post(API_URL, { documents, questions });
};