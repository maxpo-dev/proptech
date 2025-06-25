"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";

import { Button } from "@/components/ui/button";
import TextField from "./textField";
import PhoneInputField from "./phoneInputFiled";
import { countries } from "./utils/countries";
import { validationSchema } from "./utils/formValidationSchema";
import { event } from "@/lib/gtag";

type FormTypes =
  | "enquiry"
  | "delegates"
  | "exhibitors"
  | "sponsor"
  | "participants";

// ✅ Component to inject UTM parameters
const UTMSetter = () => {
  const { setFieldValue } = useFormikContext<any>();
  const searchParams = useSearchParams();

  useEffect(() => {
    setFieldValue("utm_source", searchParams.get("utm_source") || "");
    setFieldValue("utm_medium", searchParams.get("utm_medium") || "");
    setFieldValue("utm_campaign", searchParams.get("utm_campaign") || "");
  }, [searchParams, setFieldValue]);

  return null;
};

const FormSection = ({ type }: { type: FormTypes }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = React.useState(false);

  const handleSubmit = async (values: any) => {
    setSubmitting(true);
    router.push(`/register/thankyou?type=${type}`);

    try {
      setTimeout(() => {
        fetch(`/api/${type}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then(() => {
            event({
              action: "form_submit",
              category: "lead",
              label: type,
            });
          })
          .catch((error) => {
            console.error("Background submission error:", error);
          });
      }, 100);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem submitting the form.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        country: "",
        phone: "",
        jobTitle: "",
        message: "",
        consent1: true,
        consent2: true,
        utm_source: "",
        utm_medium: "",
        utm_campaign: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <UTMSetter />
        <div className="flex flex-col md:flex-row gap-0 md:gap-4 w-full">
          <TextField
            name="name"
            label="Name"
            placeholder="Full Name"
            autoComplete="name"
            required
          />
          <TextField
            name="jobTitle"
            label="Job Title"
            placeholder="Job Title"
            required
          />
        </div>
        <div className="flex flex-col md:flex-row gap-0 md:gap-4 w-full">
          <TextField
            name="email"
            label="Work Email"
            type="email"
            autoComplete="email"
            placeholder="Work Email Address"
            required
          />
          <PhoneInputField name="phone" />
        </div>
        <div className="flex flex-col md:flex-row gap-0 md:gap-4 w-full">
          <TextField
            name="companyName"
            label="Company Name"
            placeholder="Company Name"
            autoComplete="organization"
            required
          />
          <TextField
            name="country"
            label="Country"
            as="select"
            options={countries.map((value) => ({
              value,
              label: value,
            }))}
            required={true}
          />
        </div>
        <TextField
          name="message"
          label="Message (if any)"
          as="textarea"
          rows={3}
          placeholder="Write your message..."
        />

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent1"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              I confirm that I have read, understand and accept the{" "}
              <a className="underline">Terms and Conditions</a> and{" "}
              <a
                href="https://www.maxpo.ae/privacy"
                target="_blank"
                className="underline"
              >
                Privacy Policy
              </a>
              .<span className="text-red-500">*</span>
            </p>
          </label>
          <ErrorMessage
            name="consent1"
            component="p"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-start text-sm">
            <Field
              type="checkbox"
              name="consent2"
              className="mr-2 mt-1 font-semibold"
            />
            <p>
              I consent to having my data processed for event communication.
              <span className="text-red-500">*</span>
            </p>
          </label>
          <ErrorMessage
            name="consent2"
            component="p"
            className="text-xs text-red-500 mt-1"
          />
        </div>

        <div className="flex justify-end mt-6">
          <Button
            type="submit"
            disabled={submitting}
            className="bg-transparent text-black border border-black rounded-none hover:bg-gray-50 px-8"
          >
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormSection;
