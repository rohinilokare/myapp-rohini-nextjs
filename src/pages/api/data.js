
const handler = async ( NextApiRequest,  NextApiResponse) => {
  const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ];
  return NextApiResponse.json(data);
};

export default handler;