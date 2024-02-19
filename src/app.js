const {default: axios} = require('axios');


const Message = 'Babi lu, kontol, ASU!!!!!';
const img = "https://www.klinikindonesia.com/image/t/tinja.jpg";
const endpoint =
  "https://api.telegram.org/bot6457148300:AAHd3_gH8SW4VH9kUt3aavIRFVFt8gMrjPs/sendMessage?parse_mode=markdown&chat_id=6618165018&text=" +
  Message;
const endpoint2 =
  "https://api.telegram.org/bot6457148300:AAHd3_gH8SW4VH9kUt3aavIRFVFt8gMrjPs/sendPhoto?chat_id=6618165018&photo=" +
  img +
  "&caption=" +
  Message;

async function sendMessage(){
    try {
        while (true) {
            await axios.get(endpoint2)
            .then((res) => {
                res.status===200 ;
                    console.log(res.data);
            })
        }
    }catch (error) {
        console.log("API-key Down",error);
    }
}

setInterval(sendMessage, 5000);