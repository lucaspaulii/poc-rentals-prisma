export type Rental = {
    id?: number;
    startDate: string | Date;
    endDate: string | Date;
    dailyPrice: number;
    totalPrice: number;
    isPaid: boolean;
    downPayment: number;
  };