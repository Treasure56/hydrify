"use client"

import { useState } from "react"

export function PhoneMockup() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="relative w-[300px] h-[600px] mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-black rounded-[40px] p-3">
        <div className="relative w-full h-full bg-white rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="h-12 bg-white flex items-center justify-between px-4">
            <div className="text-sm">Good morning, Thomas!</div>
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-yellow-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
              27°
            </div>
          </div>

          {/* App Content */}
          <div className="p-4 space-y-4">
            {/* Device Cards */}
            <div className="grid grid-cols-2 gap-4">
              <DeviceCard
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.5 19H3.5C2.67157 19 2 18.3284 2 17.5V6.5C2 5.67157 2.67157 5 3.5 5H17.5C18.3284 5 19 5.67157 19 6.5V17.5C19 18.3284 19 19 17.5 19Z" />
                    <path d="M12 16V8M9 11.5L12 8L15 11.5" />
                  </svg>
                }
                name="Gregory"
                active={true}
              />
              <DeviceCard
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22C12 22 20 18 20 12C20 6 12 2 12 2C12 2 4 6 4 12C4 18 12 22 12 22Z" />
                  </svg>
                }
                name="Side Alley"
                active={false}
              />
            </div>

            {/* Controller Status */}
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-medium mb-2">Controller status</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#0D894F] rounded-full" />
                <span className="text-sm text-gray-600">Connected and active</span>
              </div>
            </div>

            {/* Sensor Grid */}
            <div className="grid grid-cols-4 gap-4">
              {["Humidity", "Daylight", "Precipitation", "Flow meter"].map((sensor) => (
                <div
                  key={sensor}
                  className="aspect-square bg-gray-100 rounded-xl p-2 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-8 h-8 bg-white rounded-full mb-1" />
                  <span className="text-xs">{sensor}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t flex items-center justify-around">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                className={`w-12 h-12 rounded-full transition-colors ${activeTab === i ? "bg-gray-100" : "hover:bg-gray-50"}`}
                onClick={() => setActiveTab(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function DeviceCard({
  icon,
  name,
  active,
}: {
  icon: React.ReactNode
  name: string
  active: boolean
}) {
  return (
    <div className={`p-4 rounded-xl ${active ? "bg-[#8A3FFC]/10" : "bg-gray-100"}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className={active ? "text-[#8A3FFC]" : "text-gray-600"}>{icon}</div>
        <span className="text-sm font-medium">{name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">Status</span>
        <div className={`w-8 h-4 rounded-full transition-colors ${active ? "bg-[#8A3FFC]" : "bg-gray-300"}`} />
      </div>
    </div>
  )
}

