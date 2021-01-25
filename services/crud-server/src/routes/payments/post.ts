import {IPaymentInfo, PaymentModel} from '../../models/payment'
import {authenticateToken} from '../../middleware/authenticator'

export function post(app:any){
    app.post("/payments", authenticateToken, async (request:any, response: any) => {
        try {
        const payment:IPaymentInfo = request.body;
        PaymentModel.create({
            user_id: payment.user_id,
            first_name: payment.first_name,
            last_name: payment.last_name,
            cardNo: payment.cardNo,
            expiry_date: payment.expiry_date,
            cvv: payment.cvv

        });
        response.sendStatus(201);
    } catch {
        response.sendStatus(400).send({
            error: 400,
            message: "There is a syntax error in your payment information.  It needs a user id, first name, last name, card number, expiry date, and cvv"
        })
    }
    })
}