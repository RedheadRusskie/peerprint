export default interface Receipt {
  _id: string;
  service: string;
  quantity?: number;
  total: number;
  date: Date;
  name?: string;
  surname?: string;
}

export interface GetReceiptsError {
  message: string;
}
