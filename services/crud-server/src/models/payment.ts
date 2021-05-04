import dotenv from 'dotenv';
dotenv.config();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_CONNECTION_STRING,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
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

export interface IPaymentChangeRequest {
        user_id:number,
        first_name?:string,
        last_name?:string,
        cardNo?:number,
        expiry_date?:string,
        cvv?:number
}

export const PaymentModel = {

    create: async(paymentInfo:IPaymentInfo) => {
        
        connection.query(`INSERT INTO payment_info (user_id, cardholder_firstname, cardholder_lastname, card_no, expiry_date, cvv) VALUES (?, ?, ?, ?, ?, ?)`, [paymentInfo.user_id,paymentInfo.first_name, paymentInfo.last_name, paymentInfo.cardNo, paymentInfo.expiry_date, paymentInfo.cvv],
        function(err:any, result:any){
            if(err)
            {
                throw err;
            } else {
                result;
            }
        });

    },

    retrieve: async(userId:number):Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            connection.query(`SELECT * FROM payment_info WHERE user_id = ${userId}`, function(err:any, result:any){
                if(err){
                    throw err
                } else {
                    resolve(result)
                }
            })
        })
    },

    modify: async(paymentChangeRequest:IPaymentChangeRequest):Promise<any> => {
        let queryParams = "";
        let queryValues = [];
        //Double check that a user id has come in with the user info.
        if(!paymentChangeRequest.user_id){
            console.log("No user id")
            return
        }
        //Need to figure out which items, and therefore how to structure the query.
        if(paymentChangeRequest.first_name){
            queryParams += `cardholder_firstname = ?, `
            queryValues.push(paymentChangeRequest.first_name);
        }
        if(paymentChangeRequest.last_name){
            queryParams += `cardholder_lastname = ?, `
            queryValues.push(paymentChangeRequest.last_name) 
        }
        if(paymentChangeRequest.cardNo){
            queryParams += `card_no = ?, `
            queryValues.push(paymentChangeRequest.cardNo);
        }
        if(paymentChangeRequest.expiry_date){
            queryParams += `expiry_date = ?, `
            queryValues.push(paymentChangeRequest.expiry_date)
        }
        if(paymentChangeRequest.cvv){
            queryParams += `cvv = ?, `
            queryValues.push(paymentChangeRequest.cvv)
        }
        //Take out the final ", " before actually sending the query
        queryParams = queryParams.slice(0, -2)
            connection.query(`UPDATE payment_info SET ${queryParams} WHERE user_id = ${paymentChangeRequest.user_id}`, [...queryValues], function(err:any, result:any){
                if(err){
                    throw err
                 }
            })
    }
}