
const dataAPI = async ( NextApiRequest,  NextApiResponse) => {
  const data = "Hello client side rendering"
  return NextApiResponse.json(data);
};

export default dataAPI;