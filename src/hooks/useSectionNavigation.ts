// hooks/useSectionNavigation.ts
"use client";
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface SectionInfo {
  id: string;
  element: HTMLElement;
  top: number;
  bottom: number;
}

export const useSectionNavigation = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [sections, setSections] = useState<SectionInfo[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  // Initialize sections
  useEffect(() => {
    const sectionElements = sectionIds.map(id => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
          id,
          element,
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        };
      }
      return null;
    }).filter(Boolean) as SectionInfo[];

    setSections(sectionElements);
  }, [sectionIds]);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Offset for better UX
      
      let newActiveSection = '';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.top) {
          newActiveSection = section.id;
          break;
        }
      }
      
      // Only update if section changed
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        
        // Clean up hash from URL when scrolling to different sections
        // Only on home page and if there's currently a hash
        if (pathname === '/' && window.location.hash) {
          const currentHash = window.location.hash.replace('#', '');
          if (currentHash !== newActiveSection) {
            // Use replaceState to remove hash without triggering navigation
            window.history.replaceState(null, '', window.location.pathname);
          }
        }
      }
    };

    if (sections.length > 0) {
      handleScroll(); // Set initial active section
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sections, activeSection, pathname]);

  // Check for hash in URL on page load and navigate to section
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && sectionIds.includes(hash)) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          scrollToSectionDirect(hash);
        }, 100);
      }
    };

    // Only run on home page
    if (pathname === '/') {
      handleHashNavigation();
      
      // Listen for hash changes
      window.addEventListener('hashchange', handleHashNavigation);
      return () => window.removeEventListener('hashchange', handleHashNavigation);
    }
  }, [pathname, sectionIds]);

  // Direct scroll to section (for same page navigation)
  const scrollToSectionDirect = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 76; // Height of your navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Immediately set active section for better UX
      setActiveSection(sectionId);
    }
  };

  // Enhanced scroll to section with cross-page navigation
  const scrollToSection = (sectionId: string) => {
    // Check if we're on the home page
    if (pathname === '/') {
      // Same page navigation - clean up any existing hash
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      scrollToSectionDirect(sectionId);
    } else {
      // Cross-page navigation: navigate to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  return {
    activeSection,
    scrollToSection,
  };
};