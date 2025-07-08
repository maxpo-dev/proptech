'use client';

import { Subscription } from '@prisma/client';

type ExhibitorTableProps = {
  exhibitors: Subscription[];
}

export default function ExhibitorTable({ exhibitors }: ExhibitorTableProps) {
  return (
    <div className="overflow-x-auto rounded bg-white shadow-md">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Email
            </th>
            <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
              Registration Date
            </th>
          </tr>
        </thead>
        <tbody>
          {exhibitors.map((exhibitor) => (
            <tr key={exhibitor.id}>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">{exhibitor.email}</p>
              </td>
              <td className="border-b border-gray-200 bg-white p-5 text-sm">
                <p className="whitespace-no-wrap text-gray-900">
                  {new Date(exhibitor.createdAt).toLocaleString()}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
