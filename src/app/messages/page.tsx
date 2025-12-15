"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Send, Phone, Video, Search, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MessagesPage() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Sarah Jenkins", text: "Hey! Did you check the new dashboard?", time: "10:30 AM", isMe: false },
    { id: 2, sender: "Me", text: "Yes, it looks amazing! The dark mode is perfect.", time: "10:32 AM", isMe: true },
    { id: 3, sender: "Sarah Jenkins", text: "Great. Can you approve the new staff list?", time: "10:35 AM", isMe: false },
  ]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { 
      id: Date.now(), 
      sender: "Me", 
      text: inputValue, 
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
      isMe: true 
    }]);
    setInputValue("");
  };

  return (
    <div className="h-screen p-6 lg:p-8 flex gap-6 overflow-hidden">
      
      {/* Sidebar List */}
      <Card className="w-80 hidden md:flex flex-col p-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-staff-muted" />
          <input className="w-full bg-staff-surfaceLight rounded-lg py-2.5 pl-10 text-sm text-white focus:outline-none" placeholder="Search chats..." />
        </div>
        <div className="flex-1 overflow-y-auto space-y-2">
          {["Sarah Jenkins", "Michael Chen", "Team General", "Announcements"].map((name, i) => (
            <div key={i} className={cn("p-3 rounded-xl cursor-pointer flex gap-3 items-center", i === 0 ? "bg-white/10" : "hover:bg-white/5")}>
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center font-bold text-xs">{name.charAt(0)}</div>
              <div>
                <p className="text-sm font-bold text-white">{name}</p>
                <p className="text-xs text-staff-muted truncate">Click to open chat...</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Chat Area */}
      <Card className="flex-1 flex flex-col p-0 overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-staff-surfaceLight/30">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center font-bold">S</div>
            <div>
              <h3 className="font-bold text-white">Sarah Jenkins</h3>
              <p className="text-xs text-green-400 flex items-center gap-1">● Online</p>
            </div>
          </div>
          <div className="flex gap-2 text-staff-muted">
            <button className="p-2 hover:bg-white/10 rounded-lg"><Phone className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-white/10 rounded-lg"><Video className="h-5 w-5" /></button>
            <button className="p-2 hover:bg-white/10 rounded-lg"><MoreVertical className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/20">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex", msg.isMe ? "justify-end" : "justify-start")}>
              <div className={cn(
                "max-w-[70%] p-3 rounded-2xl text-sm",
                msg.isMe ? "bg-staff-primary text-black rounded-tr-none" : "bg-staff-surfaceLight text-white rounded-tl-none border border-white/5"
              )}>
                <p>{msg.text}</p>
                <p className={cn("text-[10px] mt-1 text-right opacity-70", msg.isMe ? "text-black" : "text-staff-muted")}>{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={sendMessage} className="p-4 border-t border-white/5 bg-staff-surfaceLight/30 flex gap-3">
          <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-staff-primary/50"
            placeholder="Type a message..."
          />
          <button type="submit" className="p-3 bg-staff-primary text-black rounded-xl hover:bg-staff-primaryDark transition-colors">
            <Send className="h-5 w-5" />
          </button>
        </form>
      </Card>
    </div>
  );
}
