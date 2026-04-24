import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import { FaBolt } from "react-icons/fa6";

export default function VoltageCard() {
  const { telemetry } = useCyGen();

  if (!telemetry) return null;

  const voltageValue = Number(telemetry.voltage ?? 0);

  return (
    <Card className="col-span-1">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
          <FaBolt className="text-[#953177]" />
          <span>Voltage</span>
        </h3>

        <div className="text-4xl font-bold text-[#953177]">
          {voltageValue.toFixed(2)}V
        </div>

        <p className="text-sm text-gray-500">measured from generator line</p>

        <div className="pt-2 text-xs text-gray-400">
          Real-time sensor value from ESP8266 A0
        </div>
      </div>
    </Card>
  );
}
