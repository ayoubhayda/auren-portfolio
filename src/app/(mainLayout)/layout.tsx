import Footer from "@/components/general/Footer";
import Navbar from "@/components/general/Navbar";
import { Toaster } from "@/components/ui/sonner";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full p-0 m-0">
      <Navbar />
      <div>{children}</div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default MainLayout;
