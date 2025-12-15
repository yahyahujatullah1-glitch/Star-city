"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Gift, Award, Coins } from "lucide-react";
import { cn } from "@/lib/utils";

export default function RewardsPage() {
  const [balance, setBalance] = useState(1250);
  
  const rewards = [
    { id: 1, name: "$10 Amazon Card", cost: 500, color: "bg-orange-500" },
    { id: 2, name: "Discord Nitro", cost: 800, color: "bg-indigo-500" },
    { id: 3, name: "Custom Profile Badge", cost: 1200, color: "bg-staff-primary" },
    { id: 4, name: "Extra Day Off", cost: 2000, color: "bg-blue-500" },
  ];

  const redeem = (cost: number) => {
    if (balance >= cost) setBalance(balance - cost);
    else alert("Not enough points!");
  };

  return (
    <div className="p-8 lg:p-12 space-y-8">
      <header className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white">Rewards Shop</h1>
          <p className="text-staff-muted">Redeem your hard-earned XP for perks.</p>
        </div>
        <Card className="px-6 py-3 flex items-center gap-3 !rounded-full bg-staff-primary/10 border-staff-primary/20">
          <Coins className="h-6 w-6 text-staff-primary" />
          <span className="text-2xl font-bold text-white">{balance} pts</span>
        </Card>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {rewards.map((item, i) => (
          <Card key={i} className="group relative overflow-hidden" delay={i * 0.1}>
            <div className={cn("absolute top-0 left-0 w-full h-24 opacity-20 transition-opacity group-hover:opacity-40", item.color)} />
            <div className="relative pt-8 text-center">
              <div className={cn("mx-auto h-16 w-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg", item.color)}>
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{item.name}</h3>
              <p className="text-staff-muted mt-1 text-sm">Digital Reward</p>
              
              <div className="mt-6 pt-6 border-t border-white/5">
                <button 
                  onClick={() => redeem(item.cost)}
                  disabled={balance < item.cost}
                  className={cn(
                    "w-full py-2 rounded-lg font-bold transition-all",
                    balance >= item.cost 
                      ? "bg-white text-black hover:bg-staff-primary" 
                      : "bg-white/5 text-staff-muted cursor-not-allowed"
                  )}
                >
                  {balance >= item.cost ? `Redeem (${item.cost})` : `Need ${item.cost} pts`}
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
