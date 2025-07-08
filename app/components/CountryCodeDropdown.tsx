// CountryCodeDropdown.tsx
import React from 'react';

interface CountryCodeDropdownProps {
  selectedCode: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CountryCodeDropdown: React.FC<CountryCodeDropdownProps> = ({ selectedCode, onChange }) => (
  <select
    value={selectedCode}
    onChange={onChange}
    className="rounded-l-md border border-gray-300 px-3 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
  >
    <option value="+971">+971</option>
    <option value="+91">+91</option>
    <option value="+1">+1</option>
    <option value="+44">+44</option>
    {/* Add more country codes as needed */}
  </select>
);

export default CountryCodeDropdown;
