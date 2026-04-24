import useCyGen from "../../hooks/useCyGen";
import { FaBolt, FaCircle, FaFireFlameCurved, FaMoon } from "react-icons/fa6";

export default function ActivityBanner() {
  const { telemetry, isConnected, hasRealData } = useCyGen();

  return (
    <div
      className={`
        rounded-lg p-4 flex items-center gap-3 transition-all duration-300
        ${
          hasRealData && telemetry.isPedaling
            ? "bg-green-50 border-l-4 border-green-500"
            : "bg-gray-50 border-l-4 border-gray-300"
        }
      `}
    >
      <div
        className={
          hasRealData && telemetry.isPedaling
            ? "text-2xl animate-spin"
            : "text-2xl"
        }
      >
        {hasRealData && telemetry.isPedaling ? (
          <FaBolt className="text-green-600" />
        ) : (
          <FaCircle className="text-gray-500" />
        )}
      </div>
      <div className="flex-1">
        <p
          className={`font-semibold flex items-center gap-2 ${hasRealData && telemetry.isPedaling ? "text-green-700" : "text-gray-600"}`}
        >
          {hasRealData && telemetry.isPedaling ? (
            <FaFireFlameCurved />
          ) : (
            <FaMoon />
          )}
          <span>
            {!hasRealData
              ? "Demo Mode"
              : !isConnected
                ? "Device Offline"
                : telemetry.isPedaling
                  ? "Pedalling in Progress"
                  : "No Activity Detected"}
          </span>
        </p>
        <p
          className={`text-sm ${hasRealData && telemetry.isPedaling ? "text-green-600" : "text-gray-500"}`}
        >
          {!hasRealData
            ? "Waiting for ESP32 connection..."
            : !isConnected
              ? "No new telemetry. Reconnect ESP32 to resume live updates"
              : telemetry.isPedaling
                ? `Generating ${telemetry.powerInput}W of power`
                : "Start pedalling to generate energy"}
        </p>
      </div>
    </div>
  );
}
