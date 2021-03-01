import {authenticateToken} from '../../../../middleware/authenticator';
import {ISeries, SeriesModel} from '../../../../models/series'


export function post(app:any){
    app.post("/series", authenticateToken, async (request:any, response: any) => {
        try {
        const series:ISeries = request.body;
        SeriesModel.createSeries({
            series_id: series.series_id,
            series_title: series.series_title,
            series_desc: series.series_desc,
            series_price: series.series_price,
            organization_ord_id: series.organization_ord_id,
            art_id: series.art_id
        });
        response.send(201);
    } catch {
        response.send(400).send({
            error: 400,
            message: "There is a syntax error in your article formation.  It needs a price, author number, title, descrption, type number, and a body."
        })
    }
    })
}