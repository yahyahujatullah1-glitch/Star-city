"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Save, User, Bell, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);

  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <div className="p-8 lg:p-12 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-white">Settings</h1>

      <Card>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <User className="text-staff-primary" /> Profile Details
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-staff-muted uppercase">Display Name</label>
            <input defaultValue="James Anderson" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-staff-primary" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-staff-muted uppercase">Email</label>
            <input defaultValue="james@staffcore.com" disabled className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-staff-muted cursor-not-allowed" />
          </div>
          <div className="col-span-2 space-y-1">
            <label className="text-xs font-bold text-staff-muted uppercase">Bio</label>
            <textarea defaultValue="Senior Administrator managing development teams." className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white h-24" />
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <Bell className="text-staff-primary" /> Notifications
        </h2>
        <div className="space-y-4">
          {["Email Alerts for Warnings", "Push Notifications for Messages", "Weekly Performance Report"].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
              <span className="text-white font-medium">{item}</span>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out rounded-full bg-staff-primary cursor-pointer">
                <span className="absolute left-6 top-1 bg-white w-4 h-4 rounded-full shadow transition-transform"></span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end">
        <button 
          onClick={handleSave}
          className="bg-staff-primary hover:bg-staff-primaryDark text-black px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all"
        >
          {saving ? "Saving..." : <><Save className="h-5 w-5" /> Save Changes</>}
        </button>
      </div>
    </div>
  );
}
