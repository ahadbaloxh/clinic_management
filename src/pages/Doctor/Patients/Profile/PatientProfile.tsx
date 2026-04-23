import { PlusCircle, Calendar } from "lucide-react";
import { ProfileHeader } from "./components/ProfileHeader";
import { VisitCard } from "./components/Visit-Card";
import { MedicalHistory, Prescriptions } from "./components/MedicalRecords";
import { VitalsStrip } from "./components/VitalsStrip";
import { Button } from "@/components/ui/button";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

export const PatientProfile = () => {
    const patient = {
        name: "Ahad Khan",
        age: 22,
        gender: "Male",
        dob: "2003-04-10",
        mrNumber: "MR-1024",
        cnic: "12345-6789012-3",
        phone: "+92 300 1234567",
        city: "Karachi",
    };

    const appointments = [
        { id: "1", doctor: "Ahmed", specialty: "Cardiology", date: "2026-04-20", time: "10:30 AM", status: "Completed" },
        { id: "2", doctor: "Sarah", specialty: "Neurology", date: "2026-04-21", time: "11:00 AM", status: "Pending" },
        { id: "3", doctor: "Ali", specialty: "Orthopedics", date: "2026-04-22", time: "09:00 AM", status: "Cancelled" },
        { id: "4", doctor: "John", specialty: "General Medicine", date: "2026-04-15", time: "02:00 PM", status: "Completed" },
    ];

    return (
        <div className="flex flex-col gap-6 -m-6 h-[calc(100vh-64px)] overflow-hidden bg-slate-50/30">

            {/* TOP STICKY BAR - FULL WIDTH */}
            <div className="flex items-center justify-between px-8 py-3 bg-white/80 backdrop-blur-md border-b sticky top-0 z-20 shrink-0 shadow-sm">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/patients">Patients</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold text-slate-900">Patient Profile</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                <Button className="text-sm gap-2  active:scale-95">
                    <PlusCircle className="h-4 w-4" />
                    Book Appointment
                </Button>
            </div>

            {/* SCROLLABLE MAIN CONTENT AREA */}
            <div className="flex-1 overflow-y-auto px-8 pb-12 space-y-8 scroll-smooth no-scrollbar">

                {/* PATIENT IDENTITY HEADER */}
                <div className="transition-all duration-300">
                    <ProfileHeader patient={patient} />
                </div>

                {/* TWO SECTION GRID: VITALS & MEDICAL HISTORY (EQUAL SIZE) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* VITALS SECTION */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Clinical Snapshot</h3>
                        <VitalsStrip />
                    </div>

                    {/* MEDICAL HISTORY SECTION */}
                    <div className="space-y-4">
                        <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest px-1">Medical Conditions</h3>
                        <MedicalHistory />
                    </div>
                </div>

                {/* PRESCRIPTIONS & OTHER DATA */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                    <Prescriptions />
                </div>

                {/* RECENT VISITS TIMELINE */}
                <div className="space-y-4 pt-6 bg-white/50 p-6 rounded-[2.5rem] border border-dashed border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-primary/10 rounded-2xl">
                                <Calendar className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 tracking-tight">Visit History</h3>
                                <p className="text-xs text-slate-500 font-medium">Timeline of clinical consultations</p>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-primary text-xs font-bold uppercase tracking-wider hover:bg-primary/5 px-4">
                            See All Visits
                        </Button>
                    </div>

                    <div className="flex gap-5 overflow-x-auto pb-4 scroll-smooth no-scrollbar">
                        {appointments.map((appointment) => (
                            <div key={appointment.id} className="min-w-[340px] max-w-[340px] flex-shrink-0 group">
                                <div className="transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-[1.01]">
                                    <VisitCard
                                        doctorName={appointment.doctor}
                                        specialty={appointment.specialty}
                                        date={appointment.date}
                                        time={appointment.time}
                                        tag={appointment.status}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
