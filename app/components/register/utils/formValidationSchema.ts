import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Z\s.'-]+$/,
      "Name can only contain letters, spaces, apostrophes, hyphens, and periods"
    )
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .required("This is a required field"),

  email: Yup.string()
    .trim()
    .email("Please enter a valid email address")
    .required("This is a required field"),

  phone: Yup.string()
    .required("This is a required field")
    .matches(/^\+?\d{7,15}$/, "Enter a valid phone number"),

  country: Yup.string().required("This is a required field"),

  companyName: Yup.string().trim().required("This is a required field"),

  jobTitle: Yup.string().trim().required("This is a required field"),

  consent1: Yup.boolean().oneOf([true], "This is a required field"),
  consent2: Yup.boolean().oneOf([true], "This is a required field"),
});
