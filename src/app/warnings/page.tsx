"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { AlertTriangle, Plus, Gavel } from "lucide-react";
import { cn } from "@/lib/utils";

export default function WarningsPage() {
  const [logs, setLogs] = useState([
    { id: 1, user: "John Doe", type: "Conduct", severity: "Low", date: "2023-10-24", reason: "Disrespectful in general chat" },
    { id: 2, user: "Alex Smith", type: "Attendance", severity: "High", date: "2023-10-20", reason: "No showed for scheduled shift (3rd time)" },
  ]);

  return (
    <div className="p-8 lg:p-12 space-y-8">
      <h1 className="text-4xl font-bold text-white">Disciplinary Action</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Form */}
        <Card className="h-fit">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-500/10 rounded-lg"><Gavel className="h-6 w-6 text-red-500" /></div>
            <h2 className="text-xl font-bold text-white">Issue Warning</h2>
          </div>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-bold text-staff-muted uppercase">Staff Member</label>
              <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-staff-primary" placeholder="Search user..." />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-staff-muted uppercase">Type</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white">
                  <option>Conduct</option>
                  <option>Performance</option>
                  <option>Attendance</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-staff-muted uppercase">Severity</label>
                <select className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>Critical</option>
                </select>
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-staff-muted uppercase">Description</label>
              <textarea className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white h-32 resize-none" placeholder="Detail the incident..." />
            </div>
            <button className="w-full py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors flex justify-center items-center gap-2">
              <AlertTriangle className="h-4 w-4" /> Issue Warning
            </button>
          </form>
        </Card>

        {/* Log Table */}
        <Card className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-6">Recent Disciplinary Logs</h2>
          <div className="space-y-4">
            {logs.map((log) => (
              <div key={log.id} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="h-10 w-10 rounded-full bg-staff-surfaceLight flex items-center justify-center font-bold text-staff-muted">
                  {log.user.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white">{log.user}</h3>
                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded uppercase font-bold",
                      log.severity === "High" ? "bg-red-500/20 text-red-400" : "bg-yellow-500/20 text-yellow-400"
                    )}>{log.severity}</span>
                  </div>
                  <p className="text-sm text-staff-muted">{log.reason}</p>
                </div>
                <div className="text-right text-xs text-staff-muted">
                  <p>{log.date}</p>
                  <p className="font-bold text-white mt-1">{log.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
