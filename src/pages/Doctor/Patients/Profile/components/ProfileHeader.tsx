import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Phone, MapPin, CreditCard } from "lucide-react";

type ProfileHeaderProps = {
    patient: {
        name: string;
        age: number;
        gender: string;
        dob: string;
        mrNumber: string;
        cnic: string;
        phone: string;
        city: string;
    };
};

export const ProfileHeader = ({ patient }: ProfileHeaderProps) => {
    const { name, age, gender, dob, mrNumber, cnic, phone, city } = patient;

    // safe initials
    const initials =
        name
            ?.split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")
            .toUpperCase() || "P";

    const formattedDOB = dob ? new Date(dob).toLocaleDateString() : dob;

    return (
        <Card className="rounded-2xl bg-white ">
            <CardContent className="py-4 px-5">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 min-w-0">

                        {/* Avatar */}
                        <Avatar className="h-20 w-20 rounded-lg bg-gray-100">
                            <AvatarImage src="/profile.png" alt={name} />
                            <AvatarFallback className="rounded-lg font-semibold text-lg">
                                {initials}
                            </AvatarFallback>
                        </Avatar>

                        {/* INFO */}
                        <div className="min-w-0 space-y-2">

                            {/* NAME + MR */}
                            <div className="flex items-center gap-3 flex-wrap">
                                <h2 className="text-xl font-semibold text-slate-900 truncate">
                                    {name}
                                </h2>

                                <Badge variant="outline" className="text-sm px-2 py-1">
                                    MR: {mrNumber}
                                </Badge>
                            </div>

                            {/* META */}
                            <p className="text-sm text-slate-600">
                                {age} yrs • {gender} • {formattedDOB}
                            </p>

                            {/* DETAILS */}
                            <div className="flex flex-wrap gap-4 text-sm text-slate-600">

                                <div className="flex items-center gap-1.5">
                                    <CreditCard className="h-4 w-4 text-slate-500" />
                                    <span>{cnic}</span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <Phone className="h-4 w-4 text-slate-500" />
                                    <span>{phone}</span>
                                </div>

                                <div className="flex items-center gap-1.5">
                                    <MapPin className="h-4 w-4 text-slate-500" />
                                    <span>{city}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </CardContent>
        </Card>
    );
};