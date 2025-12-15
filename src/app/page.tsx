"use client";

import { Card } from "@/components/ui/Card";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { Bell, Plus, Award, ClipboardList, AlertCircle, Gift, MessageSquare, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  return (
    <div className="p-8 lg:p-12 max-w-[1600px] mx-auto space-y-8">
      
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-staff-muted">Welcome back, Admin. System status is nominal.</p>
        </motion.div>

        <div className="flex items-center gap-4">
          <button className="p-3 rounded-full bg-staff-surfaceLight hover:bg-white/10 transition-colors relative border border-white/5">
            <Bell className="h-5 w-5 text-white" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-staff-primary border border-staff-surface animate-pulse" />
          </button>
          <button className="flex items-center gap-2 bg-staff-primary hover:bg-staff-primaryDark text-black px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] active:scale-95">
            <Plus className="h-5 w-5" />
            Create Task
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Current Rank", value: "Level 5", sub: "+200 XP", icon: Award, color: "text-staff-primary", bg: "bg-staff-primary/10" },
          { title: "Pending Tasks", value: "5 Pending", sub: "+2 New", icon: ClipboardList, color: "text-blue-400", bg: "bg-blue-400/10" },
          { title: "Active Warnings", value: "0 Active", sub: "Clean Record", icon: AlertCircle, color: "text-orange-400", bg: "bg-orange-400/10" },
          { title: "Gift Credits", value: "1,250 pts", sub: "+50 pts", icon: Gift, color: "text-purple-400", bg: "bg-purple-400/10" }
        ].map((stat, i) => (
          <Card key={i} delay={i * 0.1} className="flex flex-col justify-between group">
             <div className="flex justify-between items-start">
                <div className={cn("p-3 rounded-xl transition-colors group-hover:bg-white/5", stat.bg)}>
                  <stat.icon className={cn("h-6 w-6", stat.color)} />
                </div>
                <span className={cn("text-xs font-bold px-2 py-1 rounded-full bg-white/5", stat.color)}>{stat.sub}</span>
             </div>
             <div>
               <p className="text-staff-muted text-sm mt-4">{stat.title}</p>
               <h3 className="text-3xl font-bold text-white mt-1">{stat.value}</h3>
             </div>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Progress & Chart */}
        <div className="lg:col-span-2 space-y-6">
          {/* Rank Progress */}
          <Card delay={0.4}>
            <div className="flex justify-between items-end mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Rank Progress</h3>
                <p className="text-staff-muted text-sm">Level 5 to Level 6</p>
              </div>
              <h2 className="text-3xl font-bold text-white">75%</h2>
            </div>
            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden p-[2px]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                className="h-full bg-staff-primary rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"
              />
            </div>
            <div className="flex justify-between text-xs text-staff-muted mt-2 font-mono">
              <span>1200 XP</span>
              <span>1600 XP</span>
            </div>
          </Card>

          {/* Activity Chart */}
          <Card delay={0.5}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">Productivity</h3>
                <p className="text-staff-muted text-sm">Weekly task completion</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-white">85%</h2>
                <div className="flex items-center gap-1 text-xs text-staff-primary font-bold">
                  <ArrowUpRight className="h-3 w-3" />
                  <span>+5% vs last week</span>
                </div>
              </div>
            </div>
            <ActivityChart />
          </Card>
        </div>

        {/* Right Column: Team List */}
        <Card delay={0.6} className="flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Team Online</h3>
            <button className="text-xs text-staff-primary hover:underline">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: "Sarah Jenkins", role: "Moderator", status: "online", img: "SJ", color: "bg-pink-500" },
              { name: "Michael Chen", role: "Senior Staff", status: "busy", img: "MC", color: "bg-blue-500" },
              { name: "Emily Davis", role: "Support", status: "online", img: "ED", color: "bg-purple-500" },
              { name: "David Wilson", role: "Intern", status: "offline", img: "DW", color: "bg-yellow-500" },
            ].map((member, i) => (
              <div key={i} className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-2xl transition-all cursor-pointer group border border-transparent hover:border-white/5">
                <div className="relative">
                  <div className={cn("h-10 w-10 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg", member.color)}>
                    {member.img}
                  </div>
                  <span className={cn(
                    "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-staff-surface",
                    member.status === 'online' ? "bg-staff-primary" : member.status === 'busy' ? "bg-red-500" : "bg-staff-muted"
                  )} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-white group-hover:text-staff-primary transition-colors">{member.name}</p>
                  <p className="text-xs text-staff-muted">{member.role}</p>
                </div>
                <button className="p-2 rounded-xl bg-white/5 text-staff-muted opacity-0 group-hover:opacity-100 group-hover:bg-staff-primary group-hover:text-black transition-all">
                  <MessageSquare className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/5">
             <h4 className="text-sm font-bold text-white mb-3">Priority Tasks</h4>
             <div className="p-3 rounded-xl bg-staff-surfaceLight border border-white/5 flex items-start gap-3">
                <div className="mt-1 h-4 w-4 rounded-full border-2 border-staff-primary" />
                <div>
                    <p className="text-sm text-white">Review quarterly reports</p>
                    <p className="text-xs text-red-400 font-bold mt-1">Due Today</p>
                </div>
             </div>
          </div>
        </Card>
      </div>
    </div>
  );
                  }
