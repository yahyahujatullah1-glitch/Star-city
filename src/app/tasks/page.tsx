"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Plus, CheckCircle2, Circle, Calendar, Flag } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface Task {
  id: number;
  title: string;
  due: string;
  priority: "High" | "Medium" | "Low";
  completed: boolean;
}

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Review quarterly staff reports", due: "Today", priority: "High", completed: false },
    { id: 2, title: "Update server permissions", due: "Tomorrow", priority: "Medium", completed: false },
    { id: 3, title: "Onboard new trainees", due: "Oct 30", priority: "Low", completed: false },
    { id: 4, title: "Fix discord integration bot", due: "Yesterday", priority: "High", completed: true },
  ]);

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="p-8 lg:p-12 space-y-8">
      <header className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Task Board</h1>
        <button className="flex items-center gap-2 bg-staff-primary hover:bg-staff-primaryDark text-black px-4 py-2 rounded-lg font-bold transition-all">
          <Plus className="h-4 w-4" /> New Task
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Pending Column */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-staff-muted uppercase tracking-wider">In Progress</h2>
          <AnimatePresence>
            {tasks.filter(t => !t.completed).map((task) => (
              <Card key={task.id} className="group cursor-pointer hover:border-staff-primary/30" onClick={() => toggleTask(task.id)}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-staff-muted group-hover:text-staff-primary transition-colors">
                    <Circle className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium group-hover:text-staff-primary transition-colors">{task.title}</h3>
                    <div className="flex items-center gap-4 mt-2 text-xs text-staff-muted">
                      <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {task.due}</span>
                      <span className={cn(
                        "flex items-center gap-1 font-bold",
                        task.priority === "High" ? "text-red-400" : task.priority === "Medium" ? "text-yellow-400" : "text-blue-400"
                      )}>
                        <Flag className="h-3 w-3" /> {task.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </div>

        {/* Completed Column */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-staff-muted uppercase tracking-wider">Completed</h2>
          <AnimatePresence>
            {tasks.filter(t => t.completed).map((task) => (
              <Card key={task.id} className="opacity-60 hover:opacity-100 transition-opacity" onClick={() => toggleTask(task.id)}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 text-staff-primary">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-medium line-through decoration-white/30">{task.title}</h3>
                    <div className="mt-2 text-xs text-green-400 font-bold">Completed</div>
                  </div>
                </div>
              </Card>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
