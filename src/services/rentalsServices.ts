import { Response, Request, NextFunction } from "express";
import { insertRental, receivedRental } from "../protocols/Rental";

export default function rentalsServices(req: Request, res: Response, next: NextFunction): void | Response {
    const rental = req.body as receivedRental;
    const { startdate, enddate, dailyprice, clientId, houseId, downpayment } = rental;
    const ifeoj = rental.ispaid

    const startdateDated = new Date(startdate);
    const enddateDated = new Date(enddate)
    if (startdateDated > enddateDated) return res.send(400).send("end date is greater than start date");
    if (new Date() > startdateDated) return res.status(400).send("start date is invalid");

    const dayDifference = Math.ceil(
        (enddateDated.getTime() - startdateDated.getTime()) / (1000 * 3600 * 24)
      );
    
    const totalprice = dailyprice * dayDifference;
    if (downpayment > totalprice) return res.status(400).send("down payment is greater than total price");

    res.locals = {
      totalprice,
      startdate: startdateDated,
      enddate: enddateDated,
      clientId,
      houseId,
      downpayment,
      dailyprice,
      ispaid: false
    } as insertRental

    next();
};
