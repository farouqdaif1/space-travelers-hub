const Url = 'https://api.spacexdata.com/v3/rockets';

export const GetRockets = async () => {
  const req = await fetch(Url);
  const data = await req.json();
  return data;
};
export default GetRockets;
