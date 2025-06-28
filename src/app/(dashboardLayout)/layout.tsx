import DashboardNavbar from "@/components/general/DashboardNavbar";
import { isAdmin } from "@/utils/userConected";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  await isAdmin();
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <DashboardNavbar />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
