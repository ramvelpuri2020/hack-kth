"use client"

import Link from "next/link"

export default function VideoConferencePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">H</span>
          </div>
          <span className="text-lg font-medium">HandSync Conference</span>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
            Leave Call
          </button>
        </div>
      </div>

      {/* Main video area */}
      <div className="flex-1 p-6">
        <div className="grid grid-cols-2 gap-4 h-96">
          {/* Local video */}
          <div className="bg-gray-700 rounded-lg flex items-center justify-center relative">
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
              You
            </div>
            <div className="text-6xl">🤟</div>
          </div>
          
          {/* Remote video */}
          <div className="bg-gray-700 rounded-lg flex items-center justify-center relative">
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-2 py-1 rounded text-sm">
              Remote User
            </div>
            <div className="text-6xl">👋</div>
          </div>
        </div>

        {/* Sign language translation display */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Real-time Translation</h3>
          <div className="bg-gray-700 p-3 rounded">
            <p className="text-green-400">Detected: "Hello, how are you?"</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-gray-800 p-4 flex items-center justify-center gap-6">
        <button className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
          🎥
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
          🎤
        </button>
        <button className="bg-gray-600 hover:bg-gray-500 p-3 rounded-full">
          🤚
        </button>
        <Link href="/" className="bg-teal-600 hover:bg-teal-700 px-6 py-2 rounded">
          Back to Home
        </Link>
      </div>
    </div>
  )
} 