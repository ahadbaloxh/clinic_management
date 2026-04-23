import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Upload } from "lucide-react";
import { patientMockData } from "./mockData";
import { SectionCard } from "./MedicalSection";

export const ImmunizationsList = () => {
  return (
    <div className="space-y-4">
      {patientMockData.immunizations.map((imm, idx) => (
        <div key={idx} className="flex items-center justify-between py-2 border-b border-slate-50 last:border-0">
          <span className="text-[11px] font-bold text-slate-700">{imm.name}</span>
          <span className="text-[10px] font-medium text-slate-400 tabular-nums">{imm.date}</span>
        </div>
      ))}
    </div>
  );
};

export const FamilyHistoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {patientMockData.familyHistory.map((member, idx) => (
        <div key={idx} className="p-3 rounded-lg bg-slate-50/50 border border-slate-100">
          <h5 className="text-[10px] font-black text-primary uppercase tracking-tighter mb-1">{member.relation}</h5>
          <p className="text-[11px] font-bold text-slate-800 leading-tight mb-1">{member.details}</p>
          <p className="text-[10px] italic text-slate-400 leading-relaxed">{member.notes}</p>
        </div>
      ))}
    </div>
  );
};

export const ProceduresTable = () => {
  return (
    <div className="rounded-xl border border-slate-100 overflow-hidden">
      <Table>
        <TableHeader className="bg-slate-50/50">
          <TableRow>
            <TableHead className="text-[10px] font-black tracking-widest uppercase">Procedure Name</TableHead>
            <TableHead className="text-[10px] font-black tracking-widest uppercase">Date</TableHead>
            <TableHead className="text-[10px] font-black tracking-widest uppercase text-right">Outcome</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patientMockData.procedures.map((proc, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-800">{proc.name}</p>
                  <p className="text-[10px] text-slate-400">{proc.doctor}</p>
                </div>
              </TableCell>
              <TableCell className="text-[10px] font-medium text-slate-500 tabular-nums">{proc.date}</TableCell>
              <TableCell className="text-right">
                <Badge className={`text-[8px] font-black tracking-widest px-1.5 py-0.5 ${
                  proc.outcome === "SUCCESSFUL" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                  proc.outcome === "COMPLETED" ? "bg-blue-50 text-blue-600 border-blue-100" :
                  "bg-slate-100 text-slate-400 border-slate-200"
                }`}>
                  {proc.outcome}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const FilesGrid = () => {
  return (
    <div className="flex flex-wrap gap-4">
      {patientMockData.files.map((file, idx) => (
        <Card key={idx} className="flex-1 min-w-[200px] border shadow-sm hover:shadow-md transition-shadow rounded-xl bg-white">
          <CardContent className="p-3 flex items-center gap-3">
            <div className="p-2 bg-red-50 rounded-lg text-red-500">
              <FileText className="h-4 w-4" />
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[10px] font-bold text-slate-800 truncate">{file.name}</p>
              <p className="text-[9px] text-slate-400">{file.date} • {file.size}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
