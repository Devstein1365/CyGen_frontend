import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import MetricsBar from "../ui/MetricsBar";
import StatusBadge from "../ui/StatusBadge";
import { FaBatteryHalf } from "react-icons/fa6";

export default function BatteryCard() {
  const { telemetry } = useCyGen();

  if (!telemetry) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case "charging":
        return "bg-blue-500";
      case "full":
        return "bg-green-500";
      case "idle":
        return "bg-gray-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <Card className="col-span-1">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
            <FaBatteryHalf className="text-[#953177]" />
            <span>Battery</span>
          </h3>
          <StatusBadge
            text={telemetry.chargingStatus}
            color={getStatusColor(telemetry.chargingStatus)}
          />
        </div>

        <div className="text-4xl font-bold text-[#953177]">
          {telemetry.battery}%
        </div>

        <MetricsBar percentage={telemetry.battery} />

        <div className="text-xs text-gray-500">
          Status:{" "}
          <span className="font-semibold text-gray-700">
            {telemetry.chargingStatus}
          </span>
        </div>
      </div>
    </Card>
  );
}
