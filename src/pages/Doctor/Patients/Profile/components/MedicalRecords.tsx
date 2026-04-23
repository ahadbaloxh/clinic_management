import React from "react";
import { Badge } from "@/components/ui/badge";
import { SectionCard } from "./MedicalSection";
import { Pill, Activity, AlertCircle, Calendar } from "lucide-react";
import { patientMockData } from "./mockData";

export const MedicalHistory = () => {
    return (
        <SectionCard title="Medical History" icon={Activity}>
            <div className="space-y-4">
                {patientMockData.chronicConditions.map((condition, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-800">{condition.name}</span>
                            <Badge variant={condition.status === "ACTIVE" ? "destructive" : "secondary"} className="text-[10px] px-1.5 py-0">
                                {condition.status}
                            </Badge>
                        </div>
                        <p className="text-xs text-slate-500">{condition.date} • {condition.severity || condition.target}</p>
                        <p className="text-[11px] text-slate-400 italic">{condition.notes}</p>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export const Prescriptions = () => {
    return (
        <SectionCard title="Prescriptions" icon={Pill}>
            <div className="space-y-4">
                {patientMockData.medications.map((med, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-800">{med.name}</span>
                            <Badge variant={med.status === "ACTIVE" ? "default" : "outline"} className="text-[10px] px-1.5 py-0">
                                {med.status}
                            </Badge>
                        </div>
                        <p className="text-xs text-slate-600 font-medium">{med.dose}</p>
                        {med.lastFill && (
                            <p className="text-[10px] text-slate-400">Last Fill: {med.lastFill} • {med.refills} refills left</p>
                        )}
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};

export const Allergies = () => {
    return (
        <SectionCard title="Allergies" icon={AlertCircle}>
            <div className="space-y-4">
                {patientMockData.allergies.map((allergy, idx) => (
                    <div key={idx} className="flex flex-col gap-1 border-b border-slate-50 last:border-0 pb-3 last:pb-0">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold text-slate-800">{allergy.substance}</span>
                            <Badge className={`text-[10px] px-1.5 py-0 ${
                                allergy.severity === "SEVERE" ? "bg-red-100 text-red-700 border-red-200" : "bg-orange-100 text-orange-700 border-orange-200"
                            }`}>
                                {allergy.severity}
                            </Badge>
                        </div>
                        <p className="text-xs text-slate-600">{allergy.reaction}</p>
                    </div>
                ))}
            </div>
        </SectionCard>
    );
};
