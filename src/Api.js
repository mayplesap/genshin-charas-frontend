/** API calls genshin-chara-backend */

import axios from 'axios';

const BASE_API_URL = "https://genshin-chara-server.herokuapp.com";

/** Fetch list of characters */

export async function getChara(){
  let res = await axios.get(`${BASE_API_URL}/characters`);
  console.log(res.data);
  return res.data;
}