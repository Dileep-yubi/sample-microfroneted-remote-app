interface LabelMapping {
  installmentAmount: string;
  tenure: string;
  rateOfInterest: string;
}
const labelMapping = {
  installmentAmount: "Amount",
  tenure: "Tenure",
  rateOfInterest: "R.O.I",
};
export const propertyToLabelMapping = (field) => {
  return labelMapping[field as keyof LabelMapping];
};
