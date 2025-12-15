"use client";
import { Sidebar } from "@/components/layout/Sidebar";
import { Card } from "@/components/ui/Card";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { Bell, Plus, Award, ClipboardList, AlertCircle, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-staff-bg text-staff-text font-sans selection:bg-staff-primary selection:text-black">
      <Sidebar />
      
      <main className="ml-72 flex-1 p-8 overflow-y-auto h-screen">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-bold text-white mb-1">Dashboard</h1>
            <p className="text-staff-muted">Welcome back, Admin. Here's what's happening today.</p>
          </motion.div>

          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full bg-staff-surfaceLight hover:bg-white/10 transition-colors relative">
              <Bell className="h-5 w-5 text-white" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 rounded-full bg-red-500 border border-staff-surface" />
            </button>
            <button className="flex items-center gap-2 bg-staff-primary hover:bg-staff-primaryDark text-black px-6 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)]">
              <Plus className="h-5 w-5" />
              Create New Task
            </button>
          </div>
        </header>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-green-900/20 rounded-xl">
                  <Award className="h-6 w-6 text-staff-primary" />
                </div>
                <span className="text-xs font-bold text-staff-primary bg-staff-primary/10 px-2 py-1 rounded">+200 XP</span>
             </div>
             <div>
               <p className="text-staff-muted text-sm mt-4">Current Rank</p>
               <h3 className="text-3xl font-bold text-white">Level 5</h3>
             </div>
          </Card>

          <Card className="flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-900/20 rounded-xl">
                  <ClipboardList className="h-6 w-6 text-blue-400" />
                </div>
                <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">+2 New</span>
             </div>
             <div>
               <p className="text-staff-muted text-sm mt-4">Pending Tasks</p>
               <h3 className="text-3xl font-bold text-white">5 Pending</h3>
             </div>
          </Card>

          <Card className="flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-orange-900/20 rounded-xl">
                  <AlertCircle className="h-6 w-6 text-orange-400" />
                </div>
                <span className="text-xs font-bold text-staff-muted">No change</span>
             </div>
             <div>
               <p className="text-staff-muted text-sm mt-4">Active Warnings</p>
               <h3 className="text-3xl font-bold text-white">0 Active</h3>
             </div>
          </Card>

          <Card className="flex flex-col justify-between">
             <div className="flex justify-between items-start">
                <div className="p-3 bg-purple-900/20 rounded-xl">
                  <Gift className="h-6 w-6 text-purple-400" />
                </div>
                <span className="text-xs font-bold text-purple-400">+50 pts</span>
             </div>
             <div>
               <p className="text-staff-muted text-sm mt-4">Gift Credits</p>
               <h3 className="text-3xl font-bold text-white">1,250 pts</h3>
             </div>
          </Card>
        </div>

        {/* Middle Section: Progress & Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Rank Progress */}
          <Card className="lg:col-span-3">
            <div className="flex justify-between items-end mb-2">
              <div>
                <h3 className="text-xl font-bold text-white">Rank Progress</h3>
                <p className="text-staff-muted text-sm">Level 5 to Level 6</p>
              </div>
              <h2 className="text-3xl font-bold text-white">75%</h2>
            </div>
            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "75%" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="h-full bg-staff-primary rounded-full shadow-[0_0_15px_rgba(74,222,128,0.5)]"
              />
            </div>
            <div className="flex justify-between text-xs text-staff-muted mt-2">
              <span>Current: 1200 XP</span>
              <span>Goal: 1600 XP</span>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Activity Chart */}
          <Card className="lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Task Completion Activity</h3>
                <p className="text-staff-muted text-sm">Weekly overview</p>
              </div>
              <div className="text-right">
                <h2 className="text-3xl font-bold text-white">85%</h2>
                <p className="text-xs text-staff-primary font-bold">↗ +5% vs last week</p>
              </div>
            </div>
            <ActivityChart />
          </Card>

          {/* Team Online List (Right Sidebar Widget) */}
          <Card className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-white">Team Online</h3>
              <button className="text-xs text-staff-primary hover:underline">View All</button>
            </div>
            
            <div className="space-y-4 flex-1">
              {[
                { name: "Sarah Jenkins", role: "Moderator", status: "online", img: "SJ" },
                { name: "Michael Chen", role: "Senior Staff", status: "away", img: "MC" },
                { name: "Emily Davis", role: "Support", status: "online", img: "ED" },
              ].map((member, i) => (
                <div key={i} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-staff-surfaceLight border border-white/10 flex items-center justify-center text-sm font-bold">
                      {member.img}
                    </div>
                    <span className={cn(
                      "absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-staff-surface",
                      member.status === 'online' ? "bg-staff-primary" : "bg-yellow-500"
                    )} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{member.name}</p>
                    <p className="text-xs text-staff-muted">{member.role} • <span className="capitalize">{member.status}</span></p>
                  </div>
                  <button className="p-2 rounded-lg bg-white/5 text-staff-muted group-hover:bg-staff-primary group-hover:text-black transition-all">
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
