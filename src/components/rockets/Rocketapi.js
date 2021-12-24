const Url = 'https://api.spacexdata.com/v3/rockets';

export const fetchRocketsApi = async () => {
  const req = await fetch(Url);
  const data = await req.json();
  return data;
};
export default fetchRocketsApi;
