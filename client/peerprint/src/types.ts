export default interface Receipt {
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
