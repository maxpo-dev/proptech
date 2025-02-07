'use client';

import { useState } from 'react';

const ExhibitorRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    boothSize: '',
    productCategory: '',
    specialRequirements: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/exhibitorreg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Registration submitted successfully! A confirmation email has been sent.');
        setFormData({
          companyName: '',
          contactName: '',
          email: '',
          phone: '',
          website: '',
          boothSize: '',
          productCategory: '',
          specialRequirements: '',
        });
      } else {
        alert('Error submitting registration.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* <h2 className="text-2xl font-bold text-center mb-6">Exhibitor Registration</h2> */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {['companyName', 'contactName', 'email', 'phone', 'website', 'productCategory'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
            value={formData[field as keyof typeof formData]}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        ))}
        <input
          type="text"
          name="boothSize"
          placeholder="Preferred Booth Size (e.g., 10x10, 20x20)"
          value={formData.boothSize}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="specialRequirements"
          placeholder="Special Requirements"
          value={formData.specialRequirements}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default ExhibitorRegistration;
