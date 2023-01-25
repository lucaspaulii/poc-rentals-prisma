import { Response, Request, NextFunction } from "express";
import { Rental } from "../protocols/Rental";

export default function rentalsServices(req: Request, res: Response, next: NextFunction): void | Response {
    const rental = req.body as Rental;
    const { startDate, endDate, dailyPrice } = rental;

    if (new Date(startDate) > new Date(endDate)) return res.sendStatus(400);
    if (new Date() > new Date(startDate)) return res.sendStatus(400);

    const dayDifference = Math.ceil(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 3600 * 24)
      );
    
    const totalPrice = dailyPrice * dayDifference;

    res.locals = {totalPrice}

    next();
};
