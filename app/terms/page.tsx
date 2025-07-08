import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-4xl font-bold text-blue-600">
           Terms and Conditions
        </h1>
        <p className="mb-8 text-center text-gray-500">
          Effective Date: <strong>24 June 2025</strong>
        </p>

        <p className="mb-6 text-gray-600">
          Welcome to the official website of Maxpo Exhibitions ("Company", "we", "our", or "us"). These Terms and Conditions ("Terms") govern your use of our websites, services, platforms, and event registrations through <strong>maxpo.ae</strong> or any of our event-specific domains (the "Website").
        </p>
        <p className="mb-6 text-gray-600">
          By accessing, browsing, or using this Website or registering for an event, you agree to be legally bound by these Terms. If you do not agree to these Terms, please refrain from using the Website or registering for any of our services.
        </p>

        {/* Sections */}
        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">1. Use of the Website</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>You must be at least 18 years of age to use this Website or register for events. By using the Website, you warrant that you are at least 18 years old.</li>
            <li>You agree to use this Website lawfully and ethically. Any misuse, unauthorized access, or interference with the functioning of the site is strictly prohibited.</li>
            <li>We reserve the right to deny or restrict access to any part of the Website or event without notice for any violation of these Terms.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">2. Event Registration and Participation</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>All event bookings, sponsorships, and registrations are subject to availability and approval by Maxpo Exhibitions.</li>
            <li>Registrations are considered final upon receipt of payment and/or written confirmation. Maxpo reserves the right to refuse or cancel any registration without notice.</li>
            <li>By registering, you consent to receive communications from Maxpo Exhibitions related to the event, including promotional and logistical information.</li>
            <li>It is the responsibility of the participant to provide accurate and complete registration information.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">3. Payment Terms</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>All invoices must be paid in full within five (5) business days of issuance unless otherwise agreed in writing.</li>
            <li>Payment methods include bank transfer or approved credit card transactions. Details will be provided on your invoice.</li>
            <li>Registrations not accompanied by timely payment may be subject to cancellation.</li>
            <li>All fees listed are exclusive of applicable taxes unless otherwise stated.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">4. Cancellation and Substitution Policy</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>All payments made to Maxpo Exhibitions are non-refundable under any circumstances.</li>
            <li>In case of inability to attend, delegates may nominate a substitute from their organization at no extra charge. Written notice must be provided at least 48 hours prior to the event.</li>
            <li>Sponsors and exhibitors may not cancel once payment has been made. However, a credit may be offered for a future edition of the same event (subject to Maxpo’s discretion).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">5. Event Changes and Force Majeure</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>Maxpo Exhibitions reserves the right to reschedule, relocate, convert to virtual format, or modify the content, structure, or speakers of an event due to circumstances beyond our control.</li>
            <li>If an in-person event cannot take place as scheduled due to force majeure (including but not limited to pandemics, natural disasters, government restrictions, or acts of God), a virtual or rescheduled event will be offered as an alternative.</li>
            <li>Under such conditions, Maxpo is not liable for any expenses, damages, or losses incurred by registrants.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">6. Intellectual Property</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>All content on this Website (including but not limited to text, graphics, logos, designs, videos, and images) is the property of Maxpo Exhibitions or its partners and is protected by intellectual property laws.</li>
            <li>No part of the Website may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed without express written permission from Maxpo.</li>
            <li>All trademarks, service marks, and logos displayed are either owned by Maxpo or used under license.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">7. Photography and Media Release</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>By attending any Maxpo event, you consent to being photographed, filmed, or recorded. Maxpo reserves the right to use such media for marketing and promotional purposes without compensation.</li>
            <li>If you do not wish to be photographed or recorded, please inform event organizers in writing prior to the event.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">8. Privacy and Data Protection</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>We collect and use personal data in accordance with our Privacy Policy and applicable data protection laws.</li>
            <li>Your data may be shared with event sponsors or partners strictly for business networking purposes and will not be sold or misused.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">9. Limitation of Liability</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>Maxpo Exhibitions shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of the Website or participation in an event.</li>
            <li>We are not responsible for the behavior or actions of other attendees, sponsors, exhibitors, or third-party vendors.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">10. Indemnification</h2>
          <p className="text-gray-600">
            You agree to indemnify and hold harmless Maxpo Exhibitions, its affiliates, employees, and partners from any claims, losses, damages, liabilities, including legal fees, arising from your breach of these Terms or your participation in any Maxpo event.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">11. Governing Law and Jurisdiction</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>These Terms are governed by the laws of India.</li>
            <li>Any disputes arising in connection with these Terms or any event shall be subject to the exclusive (or non-exclusive) jurisdiction of the courts of India.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">12. Modifications to Terms</h2>
          <ul className="ml-6 list-decimal space-y-2 text-gray-600">
            <li>Maxpo Exhibitions reserves the right to revise these Terms at any time. The revised version will be effective immediately upon posting on the Website.</li>
            <li>Continued use of the Website and services constitutes your agreement to the modified Terms.</li>
          </ul>
        </section>

        {/* Contact */}
        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">Contact Us</h2>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>Email: <strong className="text-blue-500">info@maxpoexhibitions.com</strong></li>
            <li>Phone: <strong className="text-blue-500">7780985893</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
