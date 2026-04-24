import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import LiveDot from "../ui/LiveDot";
import { FaCircle, FaClock } from "react-icons/fa6";

export default function SystemLogCard() {
  const { telemetry, isConnected, formatLastUpdate } = useCyGen();

  if (!telemetry) return null;

  return (
    <Card className="col-span-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
            <FaClock className="text-[#953177]" />
            <span>System Status</span>
          </h3>
          <LiveDot isActive={isConnected} />
        </div>

        <div>
          <p className="text-xs text-gray-600 mb-1">Time to Full Battery</p>
          <div className="text-3xl font-bold text-[#953177]">
            {telemetry.etaToFull}
          </div>
          <p className="text-xs text-gray-500">minutes</p>
        </div>

        <div className="pt-2 border-t border-gray-200 space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Connection</span>
            <span
              className={
                isConnected
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              <span className="inline-flex items-center gap-2">
                <FaCircle
                  className={isConnected ? "text-green-500" : "text-red-500"}
                />
                <span>{isConnected ? "Connected" : "Disconnected"}</span>
              </span>
            </span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-gray-600">Last Update</span>
            <span className="text-gray-700 font-semibold">
              {formatLastUpdate()}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
