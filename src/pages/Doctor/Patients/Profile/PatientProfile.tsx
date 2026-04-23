"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

import { Phone, MapPin, CreditCard, Calendar, Clock } from "lucide-react";

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
    recentAppointment?: {
        date: string;
        time: string;
        doctor: string;
        status: string;
    };
};

export const ProfileHeader = ({
    patient,
    recentAppointment,
}: ProfileHeaderProps) => {
    const { name, age, gender, dob, mrNumber, cnic, phone, city } = patient;

    return (
        <Card className="rounded-2xl border bg-white border-gray-200">
            <CardContent className="py-4 px-5">
                <div className="flex items-center justify-between gap-6">

                    {/* LEFT */}
                    <div className="flex items-center gap-4 min-w-0">
                        <Avatar className="h-20 w-20 rounded-lg bg-gray-100">
                            <AvatarImage src="/profile.png" alt={name} />
                            <AvatarFallback className="rounded-lg font-semibold text-lg">
                                {name?.charAt(0)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0 space-y-2">
                            <div className="flex items-center gap-3 flex-wrap">
                                <h2 className="text-xl font-semibold text-slate-900 truncate">
                                    {name}
                                </h2>

                                <Badge
                                    variant="secondary"
                                    className="text-md font-semibold px-2 py-1"
                                >
                                    MR: {mrNumber}
                                </Badge>
                            </div>

                            <p className="text-sm text-slate-600">
                                {age} yrs • {gender} • {dob}
                            </p>

                            <div className="flex flex-wrap gap-5 text-sm text-slate-600">
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

                    {/* RIGHT → Recent Appointment */}
                    {recentAppointment && (
                        <div className="min-w-[220px] border-l pl-6 flex flex-col justify-center space-y-2">

                            <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                                Recent Appointment
                            </p>

                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-slate-900">
                                    {recentAppointment.doctor}
                                </p>

                                <div className="flex items-center gap-3 text-xs text-slate-600">
                                    <div className="flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {recentAppointment.date}
                                    </div>

                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3.5 w-3.5" />
                                        {recentAppointment.time}
                                    </div>
                                </div>

                                <Badge
                                    variant="outline"
                                    className="text-xs w-fit mt-1"
                                >
                                    {recentAppointment.status}
                                </Badge>
                            </div>
                        </div>
                    )}

                </div>
            </CardContent>
        </Card>
    );
};