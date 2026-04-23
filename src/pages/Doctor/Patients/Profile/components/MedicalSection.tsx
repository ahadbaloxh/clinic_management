import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface SectionCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export const SectionCard = ({
  title,
  icon: Icon,
  children,
  action,
  className = "",
}: SectionCardProps) => {
  return (
    <Card className={`rounded-2xl bg-white border-gray-200 overflow-hidden ${className}`}>
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-slate-50/30">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-white border border-gray-100 text-slate-600 shadow-sm">
            <Icon className="h-4 w-4" />
          </div>
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">{title}</h3>
        </div>
        {action && <div>{action}</div>}
      </div>
      <CardContent className="p-5">
        {children}
      </CardContent>
    </Card>
  );
};
