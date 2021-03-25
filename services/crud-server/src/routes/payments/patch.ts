import {IPaymentChangeRequest, PaymentModel} from '../../models/payment'
import {authenticateToken} from '../../middleware/authenticator'

export function patch(app:any){
    app.patch("/payments", authenticateToken, async (request:any, response: any) => {
        try {
        const payment:IPaymentChangeRequest = request.body;
        PaymentModel.modify({
            user_id: payment.user_id,
            first_name: payment.first_name,
            last_name: payment.last_name,
            cardNo: payment.cardNo,
            expiry_date: payment.expiry_date,
            cvv: payment.cvv

        });
        response.status(200).send({
            message: "Modified."
        });
    } catch {
        response.status(400).send({
            error: 400,
            message: "There is a syntax error in your payment information."
        })
    }
    })
}