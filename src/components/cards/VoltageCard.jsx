import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import { FaBolt } from "react-icons/fa6";

export default function VoltageCard() {
  const { telemetry, hasRealData } = useCyGen();

  const voltageValue = Number(telemetry.voltage ?? 0);

  return (
    <Card className="col-span-1">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
          <FaBolt className="text-[#953177]" />
          <span>Voltage</span>
        </h3>

        <div
          className={`text-4xl font-bold ${hasRealData ? "text-[#953177]" : "text-gray-400"}`}
        >
          {hasRealData ? `${voltageValue.toFixed(2)}V` : "—"}
        </div>

        <p className="text-sm text-gray-500">
          {hasRealData ? "measured from generator line" : "Waiting for data..."}
        </p>

        <div className="pt-2 text-xs text-gray-400">
          {hasRealData ? "Real-time sensor value from ESP32 A0" : "Demo mode"}
        </div>
      </div>
    </Card>
  );
}
