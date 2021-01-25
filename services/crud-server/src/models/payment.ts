import dotenv from 'dotenv';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: 'admin',
    password: process.env.MYSQL_PASSWORD,
    database: 'mydb'
})
//Remember to parse out the spaces in a card number before sending it.
export interface IPaymentInfo {
    user_id:number,
    first_name:string,
    last_name:string,
    cardNo:number,
    expiry_date:string,
    cvv:number
}

export const PaymentModel = {

    create: async(paymentInfo:IPaymentInfo) => {
        connection.query(`INSERT INTO payment_info (user_id, cardholder_firstname, cardholder_lastname, card_no, expiry_date, cvv) VALUES (${paymentInfo.user_id}, '${paymentInfo.first_name}', '${paymentInfo.last_name}', ${paymentInfo.cardNo}, '${paymentInfo.expiry_date}', ${paymentInfo.cvv})`,
        function(err:any, result:any){
            if(err)
            {
                throw err;
            } else {
                result;
            }
        });
    }
}