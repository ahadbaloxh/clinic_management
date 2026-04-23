import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

type VisitCardProps = {
    doctorName: string;
    specialty: string;
    date: string;
    time: string;
    tag?: string;
};

export const VisitCard = ({
    doctorName,
    specialty,
    date,
    time,
    tag = "Follow up",
}: VisitCardProps) => {
    return (
        <Card className="w-full rounded-xl bg-white">
            <CardContent className="p-4 flex items-start justify-between">

                {/* LEFT SIDE */}
                <div className="space-y-1">
                    <div className="flex items-center gap-2">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Dr. {doctorName}
                        </h2>

                        <Badge
                            variant="secondary"
                            className="text-[11px] px-2 py-0.5 rounded-full"
                        >
                            {tag}
                        </Badge>
                    </div>

                    <p className="text-xs text-slate-500">{specialty}</p>

                    <div className="flex items-center gap-4 pt-1 text-xs text-slate-600">

                        <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{date}</span>
                        </div>

                        <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{time}</span>
                        </div>

                    </div>
                </div>

            </CardContent>
        </Card>
    );
};