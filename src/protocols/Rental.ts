export type Rental = {
  id: number;
  startdate: string | Date;
  enddate: string | Date;
  dailyprice: number;
  totalprice: number;
  ispaid: boolean;
  downpayment: number;
  houseId?: number;
  clientId?: number;
};

export type insertRental = {
  startdate: string | Date;
  enddate: string | Date;
  dailyprice: number;
  totalprice: number;
  ispaid: boolean;
  downpayment: number;
  houseId?: number;
  clientId?: number;
};

export type receivedRental = {
  startdate: string | Date;
  enddate: string | Date;
  dailyprice: number;
  ispaid: boolean;
  downpayment: number;
  houseId?: number;
  clientId?: number;
};
