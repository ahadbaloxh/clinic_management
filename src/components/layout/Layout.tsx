import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-muted/40 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/*
Recommended Folder Structure:

components/
  layout/
    SaaSHeader.tsx
    SaaSSidebar.tsx
    AppLayout.tsx

Usage Example (Next.js / React Router):

<AppLayout>
  <YourPage />
</AppLayout>

*/