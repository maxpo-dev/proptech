import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const InputField = ({ label, id, type = 'text', placeholder, value, onChange }: { label: string; id: string; type?: string; placeholder: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      required
    />
  </div>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    jobTitle: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        setIsSubmitted(true);
        setSubmitError('');
      } else {
        setSubmitError('Form submission failed. Please try again.');
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about the International Proptech Investment Expo? We&apos;re here to help.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-blue-600 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>proptechdubai@maxpo.ae</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p>9945580628</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p>Maxpo Exhibitions, Dubai, UAE</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {isSubmitted ? (
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-green-600 mb-4">Thank You!</h2>
                  <p className="text-gray-600">Your message has been sent successfully. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <InputField label="Name" id="name" placeholder="Your full name" value={formData.name} onChange={handleChange} />
                  <InputField label="Job Title" id="jobTitle" placeholder="Your job title" value={formData.jobTitle} onChange={handleChange} />
                  <InputField label="Company Name" id="companyName" placeholder="Your company name" value={formData.companyName} onChange={handleChange} />
                  <InputField label="Email" id="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleChange} />
                  <InputField label="Phone" id="phone" type="tel" placeholder="Your phone number" value={formData.phone} onChange={handleChange} />
                  <InputField label="Country" id="country" placeholder="Your country" value={formData.country} onChange={handleChange} />
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
              {submitError && <p className="mt-4 text-red-600">{submitError}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}