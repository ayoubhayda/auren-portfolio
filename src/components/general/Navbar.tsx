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
  ChevronRight, 
  Home, 
  Briefcase, 
  Zap, 
  Target, 
  MessageCircle, 
  Mail,
  Sparkles,
  X
} from "lucide-react";
import { useSectionNavigation } from "@/hooks/useSectionNavigation";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  // Memoize section IDs to prevent recreation on each render
  const sectionIds = useMemo(() => 
    ['hero', 'services-bar', 'mywork', 'services', 'skills', 'testimonials', 'contact'], 
    []
  );
  
  const { activeSection, scrollToSection } = useSectionNavigation(sectionIds);

  // Enhanced navigation links with Lucide icons
  const navLinks = useMemo(() => [
    { name: 'Home', href: '#hero', sectionId: 'hero', icon: Home, description: 'Welcome section' },
    { name: 'Work', href: '#mywork', sectionId: 'mywork', icon: Briefcase, description: 'Portfolio showcase' },
    { name: 'Services', href: '#services', sectionId: 'services', icon: Zap, description: 'What I offer' },
    { name: 'Skills', href: '#skills', sectionId: 'skills', icon: Target, description: 'Technical expertise' },
    { name: 'Testimonials', href: '#testimonials', sectionId: 'testimonials', icon: MessageCircle, description: 'Client feedback' },
    { name: 'Contact', href: '#contact', sectionId: 'contact', icon: Mail, description: 'Get in touch' },
  ], []);

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
    scrollToSection('contact');
  };

  const handleLogoClick = () => {
    scrollToSection('hero');
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
        className={`flex items-center justify-between py-4 md:py-[18px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        <button 
          onClick={handleLogoClick}
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Image src={lightLogo} alt="light-logo" className="dark:hidden" width={40} height={40} />
          <Image src={darkLogo} alt="dark-logo" className="hidden dark:block" width={40} height={40} />
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

        <div className="flex items-center gap-4 lg:gap-5">
          <ThemeToggle />
          <Button 
            className="text-white cursor-pointer hover:scale-105 transition-transform duration-200"
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
                <Menu className={`h-5 w-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`h-5 w-5 absolute transition-all duration-300 ${isMobileMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[320px] sm:w-[400px] bg-gradient-to-br from-background via-background/98 to-background/95 backdrop-blur-xl border-l border-border/20 shadow-2xl"
            >
              {/* Enhanced Header */}
              <SheetHeader className="text-left pb-4 border-b border-border/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div>
                      <SheetTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                        Navigation
                      </SheetTitle>
                      <SheetDescription className="text-sm text-muted-foreground mt-1">
                        {pathName === "/" ? "Explore sections" : "Navigate to home sections"}
                      </SheetDescription>
                    </div>
                  </div>
                </div>
              </SheetHeader>

              {/* Enhanced Navigation Links */}
              <div className="flex flex-col gap-2 mt-4 px-4">
                {navLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleNavClick(link.sectionId)}
                      className={`group flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-300 text-left hover:bg-primary/5 ${
                        isActive(link.sectionId)
                          ? "bg-gradient-to-r from-primary/15 to-primary/10 text-primary border border-primary/30"
                          : "text-foreground border border-border bg-gradient-to-r from-muted/50 to-muted/30 hover:border-primary/20"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 relative ${
                          isActive(link.sectionId) 
                            ? 'bg-primary/20 border border-primary/30 scale-110' 
                            : 'bg-muted border border-border/30 group-hover:bg-primary/10 group-hover:border-primary/20'
                        }`}>
                          <IconComponent className={`h-4 w-4 transition-colors duration-300 ${
                            isActive(link.sectionId) ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                          }`} />
                          {/* Cross-page indicator */}
                          {pathName !== "/" && (
                            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary/60 rounded-full opacity-60" />
                          )}
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-base font-semibold">{link.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {pathName !== "/" ? `Go to ${link.description}` : link.description}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className={`h-5 w-5 transition-all duration-300 ${
                        isActive(link.sectionId) 
                          ? 'text-primary opacity-100 translate-x-0 scale-110' 
                          : 'text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary'
                      }`} />
                    </button>
                  );
                })}
              </div>

              {/* Enhanced Footer */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-center text-xs text-muted-foreground bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 rounded-xl px-4 py-3 backdrop-blur-sm border border-border/20">
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="h-3 w-3 text-primary" />
                    <span>© {new Date().getFullYear()} Auren Portfolio</span>
                    <Sparkles className="h-3 w-3 text-primary" />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;