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
  Users,
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

const patientsData = [
  {
    mrNo: "MR-001",
    patientName: "Muhammad Ali",
    guardianName: "Ahmed Ali",
    gender: "Male",
    age: "28",
    phone: "0300-1234567",
    cnic: "42101-1234567-1",
    visits: 5,
    status: "Active",
  },
  {
    mrNo: "MR-002",
    patientName: "Fatima Bibi",
    guardianName: "Muhammad Hassan",
    gender: "Female",
    age: "35",
    phone: "0321-7654321",
    cnic: "42101-7654321-2",
    visits: 2,
    status: "Active",
  },
  {
    mrNo: "MR-003",
    patientName: "Zainab Ahmed",
    guardianName: "Ahmed Khan",
    gender: "Female",
    age: "24",
    phone: "0311-9876543",
    cnic: "42101-9876543-3",
    visits: 12,
    status: "Inactive",
  },
  {
    mrNo: "MR-004",
    patientName: "Hamza Sheikh",
    guardianName: "Ibrahim Sheikh",
    gender: "Male",
    age: "45",
    phone: "0333-4567890",
    cnic: "42101-4567890-4",
    visits: 1,
    status: "Active",
  },
  {
    mrNo: "MR-005",
    patientName: "Ayesha Noor",
    guardianName: "Saeed Anwar",
    gender: "Female",
    age: "31",
    phone: "0345-0001112",
    cnic: "42101-0001112-5",
    visits: 0,
    status: "Active",
  },
];

export default function Patients() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPatients, setSelectedPatients] = useState<string[]>(
    []
  );

  const filteredPatients = patientsData.filter((patient) => {
    const matchesSearch =
      patient.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.mrNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.cnic.includes(searchTerm);

    const matchesStatus =
      statusFilter === "All" || patient.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const toggleSelectAll = () => {
    if (selectedPatients.length === filteredPatients.length) {
      setSelectedPatients([]);
    } else {
      setSelectedPatients(filteredPatients.map((p) => p.mrNo));
    }
  };

  const toggleSelect = (mrNo: string) => {
    setSelectedPatients((prev) =>
      prev.includes(mrNo)
        ? prev.filter((id) => id !== mrNo)
        : [...prev, mrNo]
    );
  };

  const statusBadge = (status: string) => {
    const base =
      "text-xs px-2 py-0.5 rounded-full border font-medium capitalize";

    switch (status) {
      case "Active":
        return (
          <Badge className={cn(base, "bg-emerald-50 text-emerald-700 border-emerald-200")}>
            {status}
          </Badge>
        );
      case "Inactive":
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
            Patients
          </h1>
          <p className="text-sm text-muted-foreground">
            Manage your patient records and medical history
          </p>
        </div>

        <Button className="gap-2 rounded-xl">
          <UserPlus className="h-4 w-4" />
          Add Patient
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="Total Patients"
          value={patientsData.length}
          icon={<CalendarRange className="h-4 w-4" />}
          change="+5% from last month"
        />
        <StatCard
          title="Active Patients"
          value={patientsData.filter((a) => a.status === "Active").length}
          icon={<CheckCircle2 className="h-4 w-4 text-emerald-500" />}
          change="+2 today"
        />
        <StatCard
          title="New Cases"
          value={patientsData.filter((a) => a.visits === 0).length}
          icon={<Clock className="h-4 w-4 text-amber-500" />}
          change="Fresh registrations"
        />
        <StatCard
          title="Avg Visits"
          value={(patientsData.reduce((acc, curr) => acc + curr.visits, 0) / patientsData.length).toFixed(1)}
          icon={<Users className="h-4 w-4 text-blue-500" />}
          change="Per patient"
        />
      </div>

      {/* Table */}
      <div className="border rounded-xl bg-background">
        {/* Toolbar */}
        <div className="p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between border-b">
          <div className="relative w-full md:max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name, MR NO, CNIC..."
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
                {["All", "Active", "Inactive"].map((s) => (
                  <DropdownMenuItem key={s} onClick={() => setStatusFilter(s)}>
                    {s}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" className="rounded-xl gap-2">
              <Calendar className="h-4 w-4" />
              All Time
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
                    filteredPatients.length > 0 &&
                    selectedPatients.length === filteredPatients.length
                  }
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>
              <TableHead>MR NO#</TableHead>
              <TableHead>Patient Name</TableHead>
              <TableHead>Guardian Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>CNIC</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Visit</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filteredPatients.map((patient) => (
              <TableRow key={patient.mrNo}>
                <TableCell>
                  <Checkbox
                    checked={selectedPatients.includes(patient.mrNo)}
                    onCheckedChange={() => toggleSelect(patient.mrNo)}
                  />
                </TableCell>

                <TableCell className="font-medium">{patient.mrNo}</TableCell>
                <TableCell>{patient.patientName}</TableCell>
                <TableCell>{patient.guardianName}</TableCell>
                <TableCell>{patient.gender}</TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {patient.cnic}
                </TableCell>
                <TableCell className="text-muted-foreground text-sm">
                  {patient.phone}
                </TableCell>

                <TableCell>
                  <Badge variant="secondary">
                    {patient.visits} Visits
                  </Badge>
                </TableCell>

                <TableCell>{statusBadge(patient.status)}</TableCell>

                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <UserPlus className="h-4 w-4 mr-2" />
                        View Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="h-4 w-4 mr-2" />
                        Send Records
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Phone className="h-4 w-4 mr-2" />
                        Contact
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