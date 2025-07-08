import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-600">
          Privacy Policy
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Effective Date: <strong>01.05.2025</strong>
        </p>

        <p className="mb-6 text-gray-600">
          Welcome to <strong>Future PropTech Summit</strong>, organized by Maxpo Exhibitions Pvt Ltd. We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, register for the summit, or engage with our services related to the Future PropTech Summit.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">1. Information We Collect</h2>

          <h3 className="mb-2 text-xl font-medium text-blue-500">Personal Information</h3>
          <p className="mb-4 text-gray-600">We may collect the following details when you register or interact with our website:</p>
          <ul className="mb-6 ml-6 list-disc space-y-2 text-gray-600">
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Contact Number</li>
            <li>City and Country of Residence</li>
            <li>Job Title and Organization</li>
            <li>Industry Segment (e.g., real estate, smart buildings, IoT, fintech)</li>
            <li>Areas of Interest in PropTech (e.g., AI, sustainability, digital twins)</li>
          </ul>

          <h3 className="mb-2 text-xl font-medium text-blue-500">Non-Personal Information</h3>
          <p className="mb-4 text-gray-600">We may also collect:</p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Device type and browser</li>
            <li>IP address</li>
            <li>Pages visited and time spent</li>
            <li>Referring websites or URLs</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-600">Your data may be used to:</p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Manage your registration and participation in the Future PropTech Summit</li>
            <li>Connect you with relevant exhibitors, sponsors, or networking sessions</li>
            <li>Send event-related updates, reminders, and promotional communications</li>
            <li>Deliver customer service and respond to your inquiries</li>
            <li>Improve our website, app functionality, and marketing performance</li>
            <li>Generate insights and analytics for event planning and optimization</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">3. Sharing Your Information</h2>
          <p className="mb-4 text-gray-600">We do not sell your personal data. We may share it with:</p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Trusted event partners (e.g., sponsors, exhibitors) for post-event follow-up or networking</li>
            <li>Service providers supporting event logistics, apps, digital tools, or registration systems</li>
            <li>Legal authorities if required to comply with applicable laws</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">4. Cookies and Tracking Technologies</h2>
          <p className="mb-4 text-gray-600">We use cookies and tracking tools to:</p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Remember your login and preferences</li>
            <li>Serve personalized content relevant to PropTech topics</li>
            <li>Monitor website usage and user experience</li>
          </ul>
          <p className="mt-4 text-gray-600">
            You can modify or disable cookies in your browser settings.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">5. Data Security</h2>
          <p className="text-gray-600">
            We implement appropriate physical, technical, and administrative safeguards (firewalls, secure servers, encryption) to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">6. Your Rights</h2>
          <p className="mb-4 text-gray-600">You have the right to:</p>
          <ul className="mb-4 ml-6 list-disc space-y-2 text-gray-600">
            <li>Access or update your personal data</li>
            <li>Request correction or deletion of your data</li>
            <li>Withdraw consent or object to certain processing</li>
            <li>Request restriction of data use</li>
          </ul>
          <p className="text-gray-600">
            To exercise these rights, please email us at:{" "}
            <strong className="text-blue-500">info@futureproptechsummit.com</strong>
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">7. Third-Party Links</h2>
          <p className="text-gray-600">
            Our site and emails may contain links to third-party websites (such as partner companies, sponsors, or PropTech tools). We are not responsible for their privacy practices. Please review their privacy policies before submitting any data.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">8. Changes to This Policy</h2>
          <p className="text-gray-600">
            We may update this policy occasionally. Any changes will be posted here with a revised effective date. Please check this page periodically.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">9. Contact Us</h2>
          <p className="mb-4 text-gray-600">
            For questions or concerns about your data and privacy:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Email: <strong className="text-blue-500">info@futureproptechsummit.com</strong></li>
            <li>
              Address:{" "}
              <strong className="text-blue-500">
                50, 2nd Floor, MM Road, Frazer Town, Bengaluru, Karnataka, India – 560005
              </strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
