import useCyGen from "../../hooks/useCyGen";
import LiveDot from "../ui/LiveDot";
import { FaCircle, FaGear } from "react-icons/fa6";

export default function Header() {
  const { isConnected, formatLastUpdate, telemetry } = useCyGen();

  return (
    <header className="bg-linear-to-r from-[#953177] to-[#6f1f57] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            <FaGear className="text-3xl" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">CyGen</h1>
              <p className="text-xs sm:text-sm text-purple-100">
                Live Telemetry Dashboard
              </p>
            </div>
          </div>

          {/* Right: Connection Status */}
          <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3">
            <div className="flex items-center gap-2">
              <LiveDot isActive={isConnected} />
              <div className="text-right">
                <p className="text-xs sm:text-sm font-semibold">
                  <span className="inline-flex items-center gap-2">
                    <FaCircle
                      className={
                        isConnected ? "text-green-300" : "text-red-300"
                      }
                    />
                    <span>{isConnected ? "Connected" : "Offline"}</span>
                  </span>
                </p>
                <p className="text-xs text-purple-100">
                  {telemetry
                    ? `Updated ${formatLastUpdate()}`
                    : "Waiting for data..."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
