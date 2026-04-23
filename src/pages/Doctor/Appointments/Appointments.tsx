import { useState } from "react";
import {
  Search,
  Calendar,
  Filter,
  MoreHorizontal,
  CalendarRange,
  CheckCircle2,
  Clock,
  XCircle,
  ChevronDown,
  Mail,
  Phone,
  UserPlus,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/ui/stat-card";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { cn } from "@/lib/utils";

const appointmentsData = [
  {
    token: "001",
    mrNo: "MR-1001",
    patientName: "Muhammad Ali",
    guardianName: "Ahmed Ali",
    gender: "Male",
    phone: "0300-1234567",
    paymentStatus: "Paid",
    status: "Confirmed",
  },
  {
    token: "002",
    mrNo: "MR-1005",
    patientName: "Fatima Bibi",
    guardianName: "Muhammad Hassan",
    gender: "Female",
    phone: "0321-7654321",
    paymentStatus: "Pending",
    status: "Pending",
  },
  {
    token: "003",
    mrNo: "MR-1012",
    patientName: "Zainab Ahmed",
    guardianName: "Ahmed Khan",
    gender: "Female",
    phone: "0311-9876543",
    paymentStatus: "Paid",
    status: "Confirmed",
  },
  {
    token: "004",
    mrNo: "MR-1025",
    patientName: "Hamza Sheikh",
    guardianName: "Ibrahim Sheikh",
    gender: "Male",
    phone: "0333-4567890",
    paymentStatus: "Unpaid",
    status: "Cancelled",
  },
  {
    token: "005",
    mrNo: "MR-1044",
    patientName: "Ayesha Noor",
    guardianName: "Saeed Anwar",
    gender: "Female",
    phone: "0345-0001112",
    paymentStatus: "Paid",
    status: "Confirmed",
  },
];

export default function Appointments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedAppointments, setSelectedAppointments] = useState<string[]>(
    []
  );

  const filteredAppointments = appointmentsData.filter((apt) => {
    const matchesSearch =
      apt.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.token.includes(searchTerm) ||
      apt.mrNo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || apt.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedAppointments.length === filteredAppointments.length) {
      setSelectedAppointments([]);
    } else {
      setSelectedAppointments(filteredAppointments.map((a) => a.token));
    }
  };

  const toggleSelect = (token: string) => {
    setSelectedAppointments((prev) =>
      prev.includes(token)
        ? prev.filter((id) => id !== token)
        : [...prev, token]
    );
  };

  const statusBadge = (status: string) => {
    const base =
      "text-xs px-2 py-0.5 rounded-full border font-medium capitalize";

    switch (status) {
      case "Confirmed":
        return (
          <Badge className={cn(base, "bg-emerald-50 text-emerald-700 border-emerald-200")}>
            {status}
          </Badge>
        );
      case "Pending":
        return (
          <Badge className={cn(base, "bg-amber-50 text-amber-700 border-amber-200")}>
            {status}
          </Badge>
        );
      case "Cancelled":
        return (
          <Badge className={cn(base, "bg-red-50 text-red-700 border-red-200")}>
            {status}
          </Badge>
        );
      default:
        return <Badge className={base}>{status}</Badge>;
    }
  };

  const paymentBadge = (status: string) => {
    const base =
      "text-xs px-2 py-0.5 rounded-full border font-medium capitalize";

    switch (status) {
      case "Paid":
        return (
          <Badge className={cn(base, "bg-emerald-50 text-emerald-700 border-emerald-200")}>
            {status}
          </Badge>
        );
      case "Pending":
        return (
          <Badge className={cn(base, "bg-amber-50 text-amber-700 border-amber-200")}>
            {status}
          </Badge>
        );
      case "Unpaid":
        return (
          <Badge className={cn(base, "bg-red-50 text-red-700 border-red-200")}>
            {status}
          </Badge>
        );
      default:
        return <Badge className={base}>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">
            Appointments
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage patient queue and consultation flow
          </p>
        </div>

        <Button className="gap-2 rounded-xl">
          <UserPlus className="h-4 w-4" />
          Book Appointment
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Total Appointments"
          value={appointmentsData.length}
          icon={<CalendarRange className="h-4 w-4" />}
          change="+12% from yesterday"
        />
        <StatCard
          title="Confirmed"
          value={appointmentsData.filter((a) => a.status === "Confirmed").length}
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
          change="3 new since morning"
        />
        <StatCard
          title="Pending"
          value={appointmentsData.filter((a) => a.status === "Pending").length}
          icon={<Clock className="h-4 w-4 text-amber-500" />}
          change="Awaiting confirmation"
        />
        <StatCard
          title="Cancelled"
          value={appointmentsData.filter((a) => a.status === "Cancelled").length}
          icon={<XCircle className="h-4 w-4 text-red-500" />}
          change="-2% from last week"
        />
      </div>

      {/* Table */}
      <div className="border rounded-xl bg-background">
        {/* Toolbar */}
        <div className="p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, token, MR No..."
              className="pl-9"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-xl gap-2">
                  <Filter className="h-4 w-4" />
                  {statusFilter}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {["All", "Confirmed", "Pending", "Cancelled"].map((s) => (
                  <DropdownMenuItem key={s} onClick={() => setStatusFilter(s)}>
                    {s}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="rounded-xl gap-2">
              <Calendar className="h-4 w-4" />
              Today
            </Button>
          </div>
        </div>

        {/* Table */}
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/30">
              <TableHead className="w-10">
                <Checkbox
                  checked={
                    filteredAppointments.length > 0 &&
                    selectedAppointments.length === filteredAppointments.length
                  }
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Mr No</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Guardian Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredAppointments.map((apt) => (
              <TableRow key={apt.token}>
                <TableCell>
                  <Checkbox
                    checked={selectedAppointments.includes(apt.token)}
                    onCheckedChange={() => toggleSelect(apt.token)}
                  />
                </TableCell>

                <TableCell className="font-medium">{apt.token}</TableCell>
                <TableCell>{apt.mrNo}</TableCell>
                <TableCell>{apt.patientName}</TableCell>
                <TableCell>{apt.guardianName}</TableCell>
                <TableCell>{apt.gender}</TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {apt.phone}
                </TableCell>

                <TableCell>
                  {paymentBadge(apt.paymentStatus)}
                </TableCell>

                <TableCell>{statusBadge(apt.status)}</TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Summary
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="h-4 w-4 mr-2" />
                        Reschedule
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination />
      </div>
    </div>
  );
}