import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Last Updated: <strong>November 20, 2024</strong>
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-600 mb-4">
            We may collect the following types of information:
          </p>
          <h3 className="text-xl font-medium text-blue-500 mb-2">
            a. Personal Information
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Any other details provided through our forms</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-500 mb-2">
            b. Non-Personal Information
          </h3>
          <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring website URLs</li>
            <li>Browsing behavior on our site</li>
          </ul>
          <h3 className="text-xl font-medium text-blue-500 mb-2">
            c. Cookies and Tracking Technologies
          </h3>
          <p className="text-gray-600">
            We use cookies and similar technologies to enhance your user
            experience. For more details, please refer to our Cookies Policy.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect for purposes including:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Providing and improving our services</li>
            <li>Responding to your inquiries and requests</li>
            <li>Processing registrations or transactions</li>
            <li>Sending promotional content, updates, or offers (with your consent)</li>
            <li>Analyzing website usage and trends</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            3. How We Share Your Information
          </h2>
          <p className="text-gray-600 mb-4">
            We may share your information in the following cases:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>
              <strong className="text-blue-500">Service Providers:</strong> With trusted third-party vendors who assist us in operating our website or providing services.
            </li>
            <li>
              <strong className="text-blue-500">Legal Requirements:</strong> When required to comply with applicable laws, regulations, or legal proceedings.
            </li>
            <li>
              <strong className="text-blue-500">Business Transfers:</strong> In case of a merger, acquisition, or sale of our business assets.
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            We do not sell your personal information to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            4. Data Retention
          </h2>
          <p className="text-gray-600">
            We retain your personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            5. Security Measures
          </h2>
          <p className="text-gray-600">
            We implement appropriate technical and organizational measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            6. Your Rights
          </h2>
          <p className="text-gray-600 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Access, correct, or update your personal information</li>
            <li>Request the deletion of your data (subject to legal obligations)</li>
            <li>Opt-out of receiving marketing communications</li>
          </ul>
          <p className="text-gray-600 mt-4">
            To exercise these rights, please contact us at{" "}
            <strong className="text-blue-500">proptechdubai@maxpo.ae</strong>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            7. Third-Party Links
          </h2>
          <p className="text-gray-600">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            8. Updates to This Policy
          </h2>
          <p>
  We may update this Privacy Policy from time to time. Any changes will be posted on this page with the &quot;Last Updated&quot; date at the top.
</p>

        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            9. Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            If you have any questions or concerns about this Privacy Policy,
            please contact us:
          </p>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>
              Email: <strong className="text-blue-500">proptechdubai@maxpo.ae</strong>
            </li>
            <li>Phone: <strong className="text-blue-500">+971 509431529</strong></li>
            <li>
              Address:{" "}
              <strong className="text-blue-500">
                50 2nd floor, MM Road, Pulikeshi Nagar, Bengaluru, Karnataka
                560005
              </strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
