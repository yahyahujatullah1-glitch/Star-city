"use client";

import { useState, useEffect } from "react";
import { 
  LayoutDashboard, Users, CheckSquare, MessageSquare, 
  AlertTriangle, Gift, Settings, LogOut, ShieldCheck, Menu, X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Users, label: "Staff List", href: "/staff" },
  { icon: CheckSquare, label: "Tasks", href: "/tasks" },
  { icon: MessageSquare, label: "Messages", href: "/messages", badge: 3 },
  { icon: AlertTriangle, label: "Warnings", href: "/warnings" },
  { icon: Gift, label: "Rewards", href: "/rewards" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* MOBILE TRIGGER BUTTON - Visible only on mobile */}
      <div className="fixed top-6 left-6 z-50 lg:hidden">
        <button 
          onClick={() => setIsOpen(true)}
          className="p-3 bg-staff-surface border border-white/10 rounded-xl shadow-lg text-white hover:bg-staff-surfaceLight transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* MOBILE OVERLAY BACKDROP */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR CONTAINER */}
      <aside className={cn(
        "fixed left-0 top-0 h-screen w-72 border-r border-white/5 bg-staff-surface/95 backdrop-blur-xl p-6 flex flex-col justify-between z-50 transition-transform duration-300 ease-in-out",
        // Logic: On Desktop (lg) always show. On Mobile, slide in/out based on isOpen state.
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        
        <div>
          {/* Header & Close Button */}
          <div className="flex items-center justify-between mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className="bg-staff-primary/10 p-2 rounded-xl border border-staff-primary/20">
                <ShieldCheck className="text-staff-primary h-6 w-6" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-white">StaffCore</h1>
            </div>
            
            {/* Close Button (Mobile Only) */}
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-staff-muted hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="space-y-1.5">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                    isActive 
                      ? "bg-staff-primary text-black font-semibold shadow-[0_0_20px_rgba(74,222,128,0.3)]" 
                      : "text-staff-muted hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-black" : "text-staff-muted group-hover:text-white")} />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={cn(
                      "ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full",
                      isActive ? "bg-black/20 text-black" : "bg-red-500 text-white shadow-red-500/50 shadow-sm"
                    )}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="bg-staff-surfaceLight/50 p-3 rounded-2xl border border-white/5 flex items-center gap-3 cursor-pointer hover:border-staff-primary/30 transition-all group">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-staff-primary to-emerald-600 flex items-center justify-center text-black font-bold text-sm shadow-lg">
            JA
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate group-hover:text-staff-primary transition-colors">James Anderson</p>
            <p className="text-xs text-staff-muted truncate">Administrator</p>
          </div>
          <LogOut className="h-4 w-4 text-staff-muted hover:text-white" />
        </div>
      </aside>
    </>
  );
}
