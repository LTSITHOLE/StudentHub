'use client';
// app/dashboard/page.tsx
import Link from 'next/link';
import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

const DashboardPage = () => {
  // Example loading state
  const [isLoading, setIsLoading] = useState(false);

  // Example data (replace with actual data fetching)
  const requests = [
    { id: 1, title: 'Math Assignment', status: 'Pending' },
    { id: 2, title: 'History Essay', status: 'Completed' },
  ];
  const documents = [
    { id: 1, name: 'Math_Assignment.pdf', uploaded: '2024-09-01' },
    { id: 2, name: 'History_Essay.docx', uploaded: '2024-08-25' },
  ];
  const transactions = [
    {
      id: 1,
      description: 'Payment for Math Assignment',
      amount: 'R200',
      date: '2024-09-02',
    },
    {
      id: 2,
      description: 'Payment for History Essay',
      amount: 'R150',
      date: '2024-08-30',
    },
  ];

  // Calculate totals
  const totalRequests = requests.length;
  const totalDocuments = documents.length;
  const totalCost = transactions
    .reduce(
      (sum, transaction) =>
        sum + parseFloat(transaction.amount.replace('R', '')),
      0
    )
    .toFixed(2);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {isLoading ? (
          <div className="flex items-center justify-center h-screen bg-white">
            <div className="w-16 h-16 border-4 border-t-4 border-black border-solid rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold">Dashboard</h2>
              <p className="mt-4">welcome to your dashboard.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border shadow-lg rounded-lg p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Requests
                  </h3>
                  <p className="text-xl  font-bold text-black">
                    {totalRequests}
                  </p>
                </div>
                <div className="border p-4 rounded-full">
                  <h1 className="text-2xl">📄</h1>
                </div>
              </div>

              <div className="bg-white border shadow-lg rounded-lg p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Documents
                  </h3>
                  <p className="text-xl font-bold text-black">
                    {totalDocuments}
                  </p>
                </div>
                <div className="border p-4 rounded-full">
                  <h1 className="text-xl">📁</h1>
                </div>
              </div>

              <div className="bg-white border shadow-lg rounded-lg p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-700">
                    Total Cost
                  </h3>
                  <p className="text-xl font-bold text-red-600">R{totalCost}</p>
                </div>
                <div className="border p-4 rounded-full">
                  <h1 className="text-xl">💰</h1>
                </div>
              </div>
            </div>

            {/* Requests Section */}
            <section className="flex flex-col md:flex-row gap-5 w-full">
              <section className="w-full shadow-lg rounded-lg border p-5 ">
                <div>
                  <h2 className="text-xl font-bold">Requets</h2>
                </div>
                <div className="bg-white  p-6">
                  <ul className="space-y-4">
                    {requests.map((request) => (
                      <li
                        key={request.id}
                        className="flex flex-col md:flex-row gap-3 justify-between items-center border-b pb-2"
                      >
                        <div className="flex-1 w-full">
                          <span className="font-medium">{request.title}</span>
                        </div>
                        <span
                          className={`px-3 w-[110px] py-1 rounded-full text-white text-center ${
                            request.status === 'Pending'
                              ? 'bg-gray-500'
                              : 'bg-green-700'
                          }`}
                        >
                          {request.status}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Documents Section */}
              <section className="w-full shadow-lg rounded-lg border p-5 ">
                <div>
                  <h2 className="text-xl font-bold">Documents</h2>
                </div>
                <div className="bg-white  p-6">
                  <ul className="space-y-4">
                    {documents.map((doc) => (
                      <li
                        key={doc.id}
                        className="flex flex-col md:flex-row gap-3 justify-between items-center border-b pb-2"
                      >
                        <div className="flex flex-col gap-2 ">
                          <span className="text-gay-600 ">{doc.name}</span>
                          <span className="text-gray-500 text-sm">
                            {doc.uploaded}
                          </span>
                        </div>
                        <button className="w-full bg-black p-3 text-white rounded-md ">
                          Download
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </section>

            {/* Transactions Section */}
            <section className="hidden md:flex md:flex-col shadow-lg rounded-lg border p-5">
              <div>
                <h2 className="text-xl font-bold">Transactions</h2>
                <p className="mt-4">lates transactions.</p>
              </div>
              <div className="bg-white mt-6 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {transaction.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
