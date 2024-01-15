// components/SuccessPage.js

import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your order. Your payment was successful.
        </p>

        <Link
          href="/profile"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          View All Orders
        </Link>
      </div>
    </div>
  )
}
