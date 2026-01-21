import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Members", href: "/members" }, // Add this line
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
  { label: "Gallery", href: "/gallery" },
];

export function Navbar() {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container-custom flex h-16 items-center justify-between">
<Link href="/" className="flex items-center space-x-3">
  <img 
    src="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/Image_to_url_V2/IEEE-CU-Logo-Official-imagetourl.cloud-1768544558737-myd2ju.jpg" 
    alt="IEEE Logo" 
    className="h-16 w-auto" 
  />
  <div className="text-2xl font-bold text-primary font-heading tracking-tight">
  <span className="text-foreground font-normal text-lg">Student Branch CU</span>
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/join">
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-sm">
              Join IEEE
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-3 py-2 text-base font-medium rounded-md transition-colors",
                  location === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/join" onClick={() => setIsMobileOpen(false)}>
                <Button className="w-full bg-primary text-white">Join IEEE</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
