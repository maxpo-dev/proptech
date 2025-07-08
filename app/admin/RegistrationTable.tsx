// app/admin/RegistrationTable.tsx
'use client';

import { ContactForm } from '@prisma/client';

type RegistrationTableProps = {
  registrations: ContactForm[];
}

export default function RegistrationTable({ registrations }: RegistrationTableProps) {
  return (
    <div className="overflow-x-auto rounded bg-white shadow-md">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Name
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Job Title
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Company Name
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Email
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Phone
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Country
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Message
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Registration Date
            </th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration.id}>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.name}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.jobTitle}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.companyName}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.email}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.phone}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.country}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{registration.message}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">
                  {new Date(registration.createdAt).toLocaleString()}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
