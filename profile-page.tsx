"use client"

import Link from "next/link"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mx-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">User Profile</h1>
        
        <div className="space-y-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-gray-700">John Doe</h2>
            <p className="text-gray-500">john.doe@example.com</p>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">Sign Language Experience:</p>
            <p className="text-gray-800">Intermediate</p>
          </div>
          
          <div className="border-t pt-4">
            <p className="text-sm text-gray-600 mb-2">Preferred Communication:</p>
            <p className="text-gray-800">ASL, PSE</p>
          </div>
        </div>
        
        <div className="mt-6 space-y-3">
          <button className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition-colors">
            Edit Profile
          </button>
          <Link 
            href="/" 
            className="w-full block text-center bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 