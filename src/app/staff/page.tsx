"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Search, Filter, MoreHorizontal, Shield, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const initialStaff = [
  { id: 1, name: "James Anderson", role: "Administrator", dept: "Management", status: "online", email: "james@staffcore.com" },
  { id: 2, name: "Sarah Jenkins", role: "Moderator", dept: "Community", status: "online", email: "sarah@staffcore.com" },
  { id: 3, name: "Michael Chen", role: "Senior Staff", dept: "Development", status: "busy", email: "mike@staffcore.com" },
  { id: 4, name: "Emily Davis", role: "Support", dept: "Support", status: "offline", email: "emily@staffcore.com" },
  { id: 5, name: "David Wilson", role: "Trainee", dept: "Community", status: "online", email: "david@staffcore.com" },
];

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredStaff = initialStaff.filter(staff => 
    staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    staff.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 lg:p-12 space-y-8">
      <header className="flex justify-between items-center">
        <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="text-4xl font-bold text-white">
          Staff Directory
        </motion.h1>
        <div className="bg-staff-surfaceLight p-1 rounded-lg border border-white/5 flex text-sm">
          <span className="px-4 py-1.5 bg-staff-primary text-black font-bold rounded-md cursor-pointer">All Staff</span>
          <span className="px-4 py-1.5 text-staff-muted hover:text-white cursor-pointer transition-colors">Management</span>
          <span className="px-4 py-1.5 text-staff-muted hover:text-white cursor-pointer transition-colors">Support</span>
        </div>
      </header>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-staff-muted" />
          <input 
            type="text" 
            placeholder="Search by name or role..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-staff-surfaceLight border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-staff-primary/50 transition-all"
          />
        </div>
        <button className="p-3 bg-staff-surfaceLight border border-white/10 rounded-xl text-white hover:bg-white/5">
          <Filter className="h-5 w-5" />
        </button>
      </div>

      <div className="grid gap-4">
        {filteredStaff.map((staff, i) => (
          <Card key={staff.id} delay={i * 0.1} className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="relative">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-staff-surfaceLight to-black border border-white/10 flex items-center justify-center text-lg font-bold">
                {staff.name.charAt(0)}
              </div>
              <div className={cn(
                "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-staff-surface",
                staff.status === 'online' ? 'bg-green-500' : staff.status === 'busy' ? 'bg-red-500' : 'bg-gray-500'
              )} />
            </div>
            
            <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                <h3 className="font-bold text-white group-hover:text-staff-primary transition-colors">{staff.name}</h3>
                <p className="text-xs text-staff-muted">{staff.email}</p>
              </div>
              <div className="flex items-center gap-2">
                {staff.role === 'Administrator' ? <Shield className="h-4 w-4 text-staff-primary" /> : <User className="h-4 w-4 text-staff-muted" />}
                <span className={cn("text-sm font-medium", staff.role === 'Administrator' ? 'text-staff-primary' : 'text-white')}>
                  {staff.role}
                </span>
              </div>
              <div className="text-sm text-staff-muted hidden md:block">{staff.dept}</div>
            </div>

            <button className="p-2 hover:bg-white/10 rounded-lg text-staff-muted">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
