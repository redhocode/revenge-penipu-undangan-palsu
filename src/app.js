const {default: axios} = require('axios');

//masukan api key dari aplikasi penipu
const endpoint1 =
  "";
const endpoint2 = "";

const Message = 'asu!!';
const img = "https://www.klinikindonesia.com/image/t/tinja.jpg";

// const query =
//   endpoint2 +
//   img +
//   "&caption=" +
//   Message;

const sendMassage = endpoint1 + Message;

async function attack(){
    try {
          const response =  await axios.get(sendMassage)
             
                console.log("Success", response.data);
           
            
        
    }catch (error) {
        console.log(error);
        
    }
}

setInterval(attack, 5000);