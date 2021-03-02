import {authenticateToken} from '../../../../middleware/authenticator';
import {ISeries, SeriesModel} from '../../../../models/series'


export function post(app:any){
    app.post("/series", authenticateToken, async (request:any, response: any) => {
        try {
        const series:ISeries = request.body;
        SeriesModel.createSeries({
            series_id: series.series_id,
            series_owner: series.series_owner,
            series_title: series.series_title,
            series_desc: series.series_desc,
            series_price: series.series_price,
            series_category: series.series_category
        });
        response.send(201);
    } catch {
        response.send(400).send({
            error: 400,
            message: "There is a syntax error in your article formation."
        })
    }
    })
}