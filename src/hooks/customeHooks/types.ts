export type Transaction = {
  amount: number;
  currency: string;
  sku: string;
};

export type SumSalesOfProductFunction = (sku: string) => Transaction[];

export type Sales = {amount: number; currency: string}[];
