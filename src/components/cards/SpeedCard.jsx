import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import { FaCircle, FaPersonBiking } from "react-icons/fa6";

export default function SpeedCard() {
  const { telemetry } = useCyGen();

  if (!telemetry) return null;

  return (
    <Card className="col-span-1">
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
          <FaPersonBiking className="text-[#953177]" />
          <span>RPM / Speed</span>
        </h3>

        <div className="text-4xl font-bold text-[#953177]">{telemetry.rpm}</div>

        <p className="text-sm text-gray-500">revolutions per minute</p>

        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
            telemetry.isPedaling
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            <FaCircle
              className={
                telemetry.isPedaling ? "text-green-500" : "text-gray-400"
              }
            />
            <span>{telemetry.isPedaling ? "Pedalling" : "Idle"}</span>
          </span>
        </div>
      </div>
    </Card>
  );
}
