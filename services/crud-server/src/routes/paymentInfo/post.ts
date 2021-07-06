import {IPaymentInfo, PaymentModel} from '../../models/payment'
import {authenticateToken} from '../../middleware/authenticator'

export function post(app:any){
    app.post("/paymentInfo", authenticateToken, async (request:any, response: any) => {
        try {
        const user =  await PaymentModel.retrieve(request.body.user_id)
        response.status(200).send(user) 
    } catch {
        response.sendStatus(400).send({
            error: 400,
            message: "There is a syntax error in your payment information. It needs a user ID."
        })
    }
    })
}