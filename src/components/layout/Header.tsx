import { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Globe,
  School,
  Clock,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const [language, setLanguage] = useState("EN");
  const [campus, setCampus] = useState("Clinic Saddar");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const dropdownMatchTrigger =
    "min-w-[--radix-dropdown-menu-trigger-width]";

  return (
    <header className="w-full border-b bg-background px-6 py-3 flex items-center justify-between">

      {/* SEARCH */}
      <div className="flex-1 max-w-xl ">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search patients, records, reports..."
            className="pl-9 pr-4 h-10 rounded-xl"
          />
        </div>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="flex items-center gap-3">

        {/* LANGUAGE */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 rounded-xl border border-gray-400 px-3 h-10">
              <Globe className="h-4 w-4" />
              <span className="text-sm">{language}</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className={`${dropdownMatchTrigger} p-1 `}
          >
            <DropdownMenuLabel>Language</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {["EN", "UR", "AR"].map((lang) => (
              <DropdownMenuItem
                key={lang}
                onClick={() => setLanguage(lang)}
                className="rounded-md "
              >
                {lang}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* CAMPUS */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 rounded-xl border border-gray-400 px-3 h-10">
              <School className="h-4 w-4" />
              <span className="text-sm max-w-[120px] truncate">
                {campus}
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className={`${dropdownMatchTrigger} p-1`}
          >
            <DropdownMenuLabel>Select Campus</DropdownMenuLabel>
            <DropdownMenuSeparator />

            {["Clinic Saddar", "Clinic Hala", "Clinic Rajputana"].map((c) => (
              <DropdownMenuItem
                key={c}
                onClick={() => setCampus(c)}
                className="rounded-md"
              >
                {c}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* TIME CARD */}
        <div className="flex items-center gap-2 px-3 h-10 rounded-xl border border-gray-400 bg-muted/40 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* PROFILE */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-muted transition h-10">
              <Avatar className="h-9 w-9">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>AA</AvatarFallback>
              </Avatar>

              <div className="text-left hidden sm:block leading-tight">
                <div className="text-sm font-medium">Abdul Ahad</div>
                <div className="text-xs text-muted-foreground">
                  Consultant
                </div>
              </div>

              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className={`${dropdownMatchTrigger} p-1`}
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2 rounded-md">
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2 rounded-md">
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-2 text-red-500 rounded-md">
              <LogOut className="h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    </header>
  );
}