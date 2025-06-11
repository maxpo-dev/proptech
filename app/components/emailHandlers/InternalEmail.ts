interface FormDataProps {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  country: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export const InternalEmailHandler = ({
  formType,
  formData,
}: {
  formType: string;
  formData: FormDataProps;
}) => {
  const {
    name,
    email,
    phone,
    companyName,
    jobTitle,
    country,
    message = "N/A",
    utm_source = "N/A",
    utm_medium = "N/A",
    utm_campaign = "N/A",
  } = formData;


  return `
    <div style="font-family: Arial, sans-serif; background-color: #f4f7fa; padding: 30px; max-width: 650px; margin: auto;">
      <div style="background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
        <h2 style="color: #003f5c; border-bottom: 3px solid #faa41a; padding-bottom: 10px; margin-bottom: 30px;">
          New Proptech ${formType} Registration
        </h2>

        <table style="width: 100%; font-size: 15px; border-collapse: collapse;">
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Name:</strong></td><td>${name}</td></tr>
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Job Title:</strong></td><td>${jobTitle}</td></tr>
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Company:</strong></td><td>${companyName}</td></tr>
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Email:</strong></td><td>${email}</td></tr>
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Phone:</strong></td><td>${phone}</td></tr>
          <tr><td style="padding: 8px 0;"><strong style="color: #003f5c;">Country:</strong></td><td>${country}</td></tr>
          <tr><td style="padding: 8px 0;" valign="top"><strong style="color: #003f5c;">Message:</strong></td><td>${message || "N/A"}</td></tr>
        </table>

        <hr style="margin: 30px 0; border-top: 1px solid #ccc;"/>

        <h3 style="color: #003f5c; margin-bottom: 15px;">UTM Tracking</h3>
        <table style="width: 100%; font-size: 14px;">
          <tr><td style="padding: 6px 0;"><strong style="color: #003f5c;">Source:</strong></td><td>${utm_source || "N/A"}</td></tr>
          <tr><td style="padding: 6px 0;"><strong style="color: #003f5c;">Medium:</strong></td><td>${utm_medium || "N/A"}</td></tr>
          <tr><td style="padding: 6px 0;"><strong style="color: #003f5c;">Campaign:</strong></td><td>${utm_campaign || "N/A" }</td></tr>
        </table>

        <p style="margin-top: 40px; font-size: 13px; color: #888888;">
          Submitted via Future Proptech Summit ${formType} Form
        </p>
      </div>
    </div>
  `;
};

