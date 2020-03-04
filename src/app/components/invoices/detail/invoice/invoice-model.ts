export class InvoiceModel {
  constructor(
    public date: string,
    public company: string,
    public periodFrom: string,
    public periodTo: string,
    public description: string,
    public hourlyRateInt: string,
    public hourlyRateDec: string,
    public hours: string,
    public tax: string
  ) {}
}
