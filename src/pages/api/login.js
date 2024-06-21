
const login = async ( NextApiRequest,  NextApiResponse) => {
  const data = [{
    username: "rohini.lokare@powerweave.com",
    password: "Power@123",
    firstNAme: "Rohini",
    lastName: "Lokare",
    age: 30
  },
  {
    username: "rohini.patil@powerweave.com",
    password: "Power@123",
    firstNAme: "Rohini",
    lastName: "Patil",
    age: 31
  }]

  console.log("NExtApiRe", NextApiRequest)
   const  reqBody = NextApiRequest.body
  data.map(item => {
    if(reqBody?.username == item.username && reqBody.password == item.password){
        console.log("user matched", NextApiRequest)
        return NextApiResponse.json({...item, success: true, message: "User found"});
    }
  })

  return NextApiResponse.json({success: false, messgae: "user not found"});
  
};

export default login;