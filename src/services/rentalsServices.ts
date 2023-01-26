import { Response, Request, NextFunction } from "express";
import { receivedRental } from "../protocols/Rental";

export default function rentalsServices(req: Request, res: Response, next: NextFunction): void | Response {
    const rental = req.body as receivedRental;
    const { startdate, enddate, dailyprice } = rental;

    if (new Date(startdate) > new Date(enddate)) return res.sendStatus(400);
    if (new Date() > new Date(startdate)) return res.sendStatus(400);

    const dayDifference = Math.ceil(
        (new Date(enddate).getTime() - new Date(startdate).getTime()) / (1000 * 3600 * 24)
      );
    
    const totalPrice = dailyprice * dayDifference;

    res.locals = {totalPrice}

    next();
};
