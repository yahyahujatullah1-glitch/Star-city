"use client";
import { 
  LayoutDashboard, Users, CheckSquare, MessageSquare, 
  AlertTriangle, Gift, Settings, LogOut, ShieldCheck 
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

  return (
    <aside className="fixed left-0 top-0 h-screen w-72 border-r border-white/5 bg-staff-surface p-6 flex flex-col justify-between z-50">
      
      {/* Logo Section */}
      <div>
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="bg-staff-primary/20 p-2 rounded-lg">
            <ShieldCheck className="text-staff-primary h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">StaffCore</h1>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group relative overflow-hidden",
                  isActive 
                    ? "bg-staff-primary text-black font-semibold shadow-[0_0_15px_rgba(74,222,128,0.4)]" 
                    : "text-staff-muted hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className={cn("h-5 w-5", isActive ? "text-black" : "text-staff-muted group-hover:text-white")} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={cn(
                    "ml-auto text-xs font-bold px-2 py-0.5 rounded-full",
                    isActive ? "bg-black/20 text-black" : "bg-red-500 text-white"
                  )}>
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Mini-Card */}
      <div className="bg-staff-surfaceLight/50 p-4 rounded-2xl border border-white/5 flex items-center gap-3 cursor-pointer hover:border-staff-primary/50 transition-colors">
        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-black font-bold">
          JA
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">James Anderson</p>
          <p className="text-xs text-staff-primary truncate">Administrator</p>
        </div>
        <LogOut className="h-4 w-4 text-staff-muted hover:text-white" />
      </div>
    </aside>
  );
}
