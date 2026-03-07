"use client";
import React, { useEffect, useState, useMemo } from "react";
import darkLogo from "@/assets/logo/dark-logo.png";
import lightLogo from "@/assets/logo/light-logo.png";
import Image from "next/image";
import { Button } from "../ui/button";
import { ThemeToggle } from "../theme/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Menu,
  Home,
  Briefcase,
  Zap,
  Target,
  MessageCircle,
  Mail,
  X,
} from "lucide-react";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  // Memoize section IDs to prevent recreation on each render
  const sectionIds = useMemo(
    () => [
      "hero",
      "services-bar",
      "mywork",
      "services",
      "skills",
      "testimonials",
    ],
    [],
  );

  const { activeSection, scrollToSection } = useSectionNavigation(sectionIds);

  // Enhanced navigation links with Lucide icons
  const navLinks = useMemo(
    () => [
      {
        name: "Home",
        href: "#hero",
        sectionId: "hero",
        icon: Home,
        description: "Welcome section",
      },
      {
        name: "Work",
        href: "#mywork",
        sectionId: "mywork",
        icon: Briefcase,
        description: "Portfolio showcase",
      },
      {
        name: "Services",
        href: "#services",
        sectionId: "services",
        icon: Zap,
        description: "What I offer",
      },
      {
        name: "Skills",
        href: "#skills",
        sectionId: "skills",
        icon: Target,
        description: "Technical expertise",
      },
      {
        name: "Testimonials",
        href: "#testimonials",
        sectionId: "testimonials",
        icon: MessageCircle,
        description: "Client feedback",
      },
    ],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      setNavbar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  const handleContactClick = () => {
    scrollToSection("contact");
  };

  const handleLogoClick = () => {
    scrollToSection("hero");
  };

  // Check if current section is active
  const isActive = (sectionId: string) => {
    // Only show active states on home page
    if (pathName !== "/") {
      return false;
    }
    return activeSection === sectionId;
  };

  return (
    <div
      className={`${
        navbar ? "shadow bg-white dark:bg-card" : "bg-white dark:bg-background"
      } sticky top-0 left-0 right-0 z-30 transition-all`}
    >
      <nav
        className={`flex items-center justify-between h-17  md:h-19 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <button
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image
            src={lightLogo}
            alt="light-logo"
            className="dark:hidden"
            width={36}
            height={36}
          />
          <Image
            src={darkLogo}
            alt="dark-logo"
            className="hidden dark:block"
            width={36}
            height={36}
          />
          <h1 className="text-2xl font-bold hidden sm:block">
            Aur<span className="text-primary">en</span>
          </h1>
        </button>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(link.sectionId)}
              className={`text-sm font-medium transition-all duration-300 capitalize relative group cursor-pointer ${
                isActive(link.sectionId)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {link.name}
              {/* Add visual indicator for cross-page navigation */}
              {pathName !== "/" && (
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary/60 rounded-full opacity-60" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4 lg:gap-5">
          <ThemeToggle />

          <Button
            className="hidden lg:inline-flex text-white cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={handleContactClick}
          >
            Contact Me
          </Button>

          {/* Enhanced Mobile menu trigger */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="cursor-pointer hover:bg-primary/10 transition-colors duration-200 relative"
              >
                <Menu
                  className={`h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`h-5 w-5 absolute transition-all duration-300 ${isMobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] sm:w-[320px] bg-background border-l border-border/30 p-0"
            >
              {/* Minimal Header */}
              <SheetHeader className="px-6 pt-6 pb-4">
                <SheetTitle className="text-lg font-semibold tracking-tight">
                  Menu
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation
                </SheetDescription>
              </SheetHeader>

              {/* Clean Navigation Links */}
              <div className="flex flex-col px-3">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  const active = isActive(link.sectionId);
                  return (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.sectionId)}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                        active
                          ? "bg-primary/8 text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <IconComponent
                        className={`h-[18px] w-[18px] shrink-0 transition-colors duration-200 ${
                          active
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-foreground"
                        }`}
                      />
                      <span className="text-[15px] font-medium">
                        {link.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Divider + Contact */}
              <div className="mx-6 mt-4 pt-4 border-t border-border/40">
                <Button
                  className="w-full text-white cursor-pointer transition-all duration-200 hover:opacity-90"
                  onClick={() => {
                    handleContactClick();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
