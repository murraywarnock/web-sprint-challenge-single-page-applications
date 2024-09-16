// Here goes the schema for the form
import * as yup from "yup";

export default yup.object().shape({
    name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be 2 chars long"),
    size: yup
    .string()
    .required("Size is required"),
    pepperoni: yup
    .bool(),
    peppers: yup
    .bool(),
    onion: yup
    .bool(),
    anchovies: yup
    .bool(),
    special: yup
    .string(),

    // password: yup
    // .string()
    // .required("Please enter your password")
    // .matches(
    //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    //   "Password must contain at least 8 characters, one uppercase, one number and one special case character"
// ),

    // terms checkbox
//   terms: yup
//     .bool()
//     .oneOf([true], "Must submit to TERMS!")
 
});