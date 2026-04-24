import useCyGen from "../hooks/useCyGen";
import Header from "../components/layout/Header";
import ActivityBanner from "../components/layout/ActivityBanner";
import BatteryCard from "../components/cards/BatteryCard";
import SpeedCard from "../components/cards/SpeedCard";
import VoltageCard from "../components/cards/VoltageCard";
import PowerFlowCard from "../components/cards/PowerFlowCard";
import SystemLogCard from "../components/cards/SystemLogCard";
import { FaGear, FaTriangleExclamation } from "react-icons/fa6";

export default function Dashboard() {
  const { telemetry, loading, error, isConnected, apiBaseUrl } = useCyGen();

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Loading State */}
        {loading && !telemetry && (
          <div className="flex items-center justify-center min-h-96">
            <div className="text-center">
              <FaGear className="inline-block animate-spin text-4xl mb-4 text-[#953177]" />
              <p className="text-lg text-gray-600">Loading telemetry...</p>
              <p className="text-sm text-gray-500 mt-2">
                Connecting to ESP8266...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !telemetry && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg">
            <h3 className="text-red-700 font-semibold text-lg flex items-center gap-2">
              <FaTriangleExclamation />
              <span>Connection Error</span>
            </h3>
            <p className="text-red-600 text-sm mt-1">{error}</p>
            <p className="text-red-500 text-xs mt-3">
              Ensure backend is running on {apiBaseUrl}
            </p>
          </div>
        )}

        {/* Data Available */}
        {telemetry && (
          <div className="space-y-6">
            {!isConnected && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                <h3 className="text-amber-700 font-semibold text-lg flex items-center gap-2">
                  <FaTriangleExclamation />
                  <span>Device Disconnected</span>
                </h3>
                <p className="text-amber-700 text-sm mt-1">
                  Live telemetry stopped. Showing the last known values.
                </p>
              </div>
            )}

            {/* Activity Banner */}
            <ActivityBanner />

            {/* Main Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <BatteryCard />
              <SpeedCard />
              <VoltageCard />
              <SystemLogCard />
            </div>

            {/* Power Flow Section */}
            <div className="grid grid-cols-1 gap-4">
              <PowerFlowCard />
            </div>

            {/* Data Footer */}
            <footer className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Data polling every 2 seconds | ESP8266 telemetry dashboard
              </p>
            </footer>
          </div>
        )}
      </main>
    </div>
  );
}
