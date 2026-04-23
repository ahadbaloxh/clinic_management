import { Card, CardContent } from "@/components/ui/card";
import { Heart, Droplets, Activity, Thermometer, Scale } from "lucide-react";
import { patientMockData } from "./mockData";

const iconMap: any = {
  Heart,
  Droplets,
  Activity,
  Thermometer,
  Scale,
};

export const VitalsStrip = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {patientMockData.vitals.map((vital) => {
        const Icon = iconMap[vital.icon];

        return (
          <Card
            key={vital.label}
            className="
              group
              bg-white
              border border-slate-100
              shadow-sm
              hover:shadow-md
              transition-all
              duration-200
              rounded-2xl
            "
          >
            <CardContent className="p-4 flex flex-col items-center text-center gap-3">

              {/* Icon */}
              <div
                className="
                  p-2.5
                  rounded-xl
                  bg-slate-50
                  group-hover:bg-slate-100
                  transition-colors
                "
              >
                <Icon className="h-5 w-5 text-slate-600" />
              </div>

              {/* Content */}
              <div className="space-y-1">
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  {vital.label}
                </p>

                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-semibold text-slate-900">
                    {vital.value}
                  </span>

                  {vital.unit && (
                    <span className="text-[11px] font-medium text-slate-500 uppercase">
                      {vital.unit}
                    </span>
                  )}
                </div>
              </div>

            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
