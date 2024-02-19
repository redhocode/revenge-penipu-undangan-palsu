const {default: axios} = require('axios');

//api key dari aplikasi penipu
const endpoint1 =
  "https://api.telegram.org/bot6457148300:AAHd3_gH8SW4VH9kUt3aavIRFVFt8gMrjPs/sendMessage?parse_mode=markdown&chat_id=6618165018&text=";
const endpoint2 = "https://api.telegram.org/bot6457148300:AAHd3_gH8SW4VH9kUt3aavIRFVFt8gMrjPs/sendPhoto?chat_id=6618165018&photo=";

const Message = 'asu!!';
const img = "https://www.klinikindonesia.com/image/t/tinja.jpg";

const query =
  endpoint2 +
  img +
  "&caption=" +
  Message;

async function sendMessage(){
    try {
            await axios.get(query).then((res) => {
              if (res.status === 200) {
                console.log("Success", res.data);
              } else {
                console.log("Failed with status:", res.status);
              }
            });
        
    }catch (error) {
        console.log(error);
    }
}

setInterval(sendMessage, 5000);