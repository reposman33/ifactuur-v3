export interface Invoice {
  date: string;
  company: string;
  periodFrom: string;
  periodTo: string;
  description: string;
  hourlyRateInt: string;
  hourlyRateDec: string;
  hours: string;
  tax: string;
  sum: string;
  status: string;
  id: string;
}
