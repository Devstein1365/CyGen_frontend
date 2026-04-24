import useCyGen from "../../hooks/useCyGen";
import { FaBolt, FaCircle, FaFireFlameCurved, FaMoon } from "react-icons/fa6";

export default function ActivityBanner() {
  const { telemetry, isConnected } = useCyGen();

  if (!telemetry) return null;

  return (
    <div
      className={`
        rounded-lg p-4 flex items-center gap-3 transition-all duration-300
        ${
          telemetry.isPedaling
            ? "bg-green-50 border-l-4 border-green-500"
            : "bg-gray-50 border-l-4 border-gray-300"
        }
      `}
    >
      <div
        className={telemetry.isPedaling ? "text-2xl animate-spin" : "text-2xl"}
      >
        {telemetry.isPedaling ? (
          <FaBolt className="text-green-600" />
        ) : (
          <FaCircle className="text-gray-500" />
        )}
      </div>
      <div className="flex-1">
        <p
          className={`font-semibold flex items-center gap-2 ${telemetry.isPedaling ? "text-green-700" : "text-gray-600"}`}
        >
          {telemetry.isPedaling ? <FaFireFlameCurved /> : <FaMoon />}
          <span>
            {!isConnected
              ? "Device Offline"
              : telemetry.isPedaling
                ? "Pedalling in Progress"
                : "No Activity Detected"}
          </span>
        </p>
        <p
          className={`text-sm ${telemetry.isPedaling ? "text-green-600" : "text-gray-500"}`}
        >
          {!isConnected
            ? "No new telemetry. Reconnect ESP8266 to resume live updates"
            : telemetry.isPedaling
              ? `Generating ${telemetry.powerInput}W of power`
              : "Start pedalling to generate energy"}
        </p>
      </div>
    </div>
  );
}
