import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if(!values.startDate) {
    errors.startDate = "Start Date is required";
  }
  if(!values.endDate) {
    errors.endDate = "End Date is required";
  }
  if(!values.amount) {
    errors.amount = "Amount is required";
  }
  
  // if (!values.name) {
  //   errors.name = "Name is required";
  // }
  // if (!values.email) {
  //   errors.email = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }
  // if (!values.message) {
  //   errors.message = "Message is required";
  // }
  return errors;
}
