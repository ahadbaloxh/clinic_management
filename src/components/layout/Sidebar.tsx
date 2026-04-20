import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Activity,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

const menuSections = [
  {
    title: "Main",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { label: "Patients", icon: Users, path: "/patients" },
      { label: "Records", icon: FileText, path: "/records" },
    ],
  },
  {
    title: "Management",
    items: [
      { label: "Billing", icon: CreditCard, path: "/billing" },
      { label: "Notifications", icon: Bell, path: "/notifications" },
    ],
  },
  {
    title: "System",
    items: [
      { label: "Help", icon: HelpCircle, path: "/help" },
      { label: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

export default function SaaSSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "h-screen border-r flex flex-col transition-all duration-300 overflow-hidden bg-background",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* ================= HEADER ================= */}
      <div className="border-b p-4 flex items-center justify-between ">
        {/* LOGO */}
        <div
          className={cn(
            "flex items-center font-semibold tracking-tight text-teal-700",
            collapsed ? "justify-center w-full" : "gap-2 text-lg"
          )}
        >
          <div className="p-1.5 rounded-md bg-teal-100">
            <Activity className="h-5 w-5 text-teal-600" />
          </div>

          {!collapsed && <span>EasyHealth</span>}
        </div>

        {/* TOGGLE */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="shrink-0"
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* ================= MENU ================= */}
      <nav className="flex-1 px-2 py-3 space-y-5">
        {menuSections.map((section, sIndex) => (
          <div key={sIndex}>
            {!collapsed && (
              <div className="px-3 tracking-wider opacity-70 mb-2 text-xs font-medium text-muted-foreground uppercase">
                {section.title}
              </div>
            )}

            <div className="space-y-1">
              {section.items.map((item, index) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center text-sm font-medium transition px-3 py-2 rounded-md",
                        collapsed ? "justify-center px-0" : "gap-3",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted text-muted-foreground hover:text-foreground"
                      )
                    }
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    {!collapsed && <span>{item.label}</span>}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* ================= PROFILE ================= */}
      <div className="border-t p-2 bg-teal-50">
        <div
          className={cn(
            "flex items-center rounded-md p-2",
            collapsed ? "justify-center" : "justify-between"
          )}
        >
          <div className={cn("flex items-center", collapsed ? "" : "gap-3")}>
            <div className="h-8 w-8 rounded-md bg-primary text-white flex items-center justify-center text-sm">
              A
            </div>

            {!collapsed && (
              <div className="leading-tight">
                <div className="text-sm font-medium">Abdul Ahad</div>
                <div className="text-xs text-muted-foreground">Admin</div>
              </div>
            )}
          </div>

          {/* Logout */}
          {!collapsed && (
            <button
              className="h-9 w-9 flex items-center justify-center rounded-md text-red-500 hover:bg-red-50 hover:text-red-600 transition"
              aria-label="Logout"
            >
              <LogOut className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}