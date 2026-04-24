import useCyGen from "../../hooks/useCyGen";
import Card from "../ui/Card";
import { FaBolt } from "react-icons/fa6";

export default function PowerFlowCard() {
  const { telemetry } = useCyGen();

  if (!telemetry) return null;

  return (
    <Card className="col-span-1 md:col-span-2">
      <div className="space-y-6">
        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide flex items-center gap-2">
          <FaBolt className="text-[#953177]" />
          <span>Power Flow</span>
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Power Input */}
          <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-xs text-gray-600 mb-2">Input (Generated)</p>
            <div className="text-3xl font-bold text-blue-600">
              {telemetry.powerInput}W
            </div>
            <p className="text-xs text-gray-500 mt-2">from pedalling</p>
          </div>

          {/* Power Output */}
          <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-[#953177]">
            <p className="text-xs text-gray-600 mb-2">Output (Consumed)</p>
            <div className="text-3xl font-bold text-[#953177]">
              {telemetry.powerOutput}W
            </div>
            <p className="text-xs text-gray-500 mt-2">to devices</p>
          </div>
        </div>

        {/* Power Balance */}
        <div className="pt-2 border-t border-gray-200">
          <p className="text-xs text-gray-600 mb-2">Power Balance</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    (telemetry.powerInput /
                      (telemetry.powerInput + telemetry.powerOutput + 1)) *
                      100,
                  )}%`,
                }}
              ></div>
            </div>
            <span className="text-xs font-semibold text-gray-700">
              {telemetry.powerInput > telemetry.powerOutput
                ? "Surplus"
                : "Deficit"}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}
