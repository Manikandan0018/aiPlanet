import React from "react";
import { Database, MessageSquare, Cpu, Send } from "lucide-react";

const components = [
  {
    type: "input",
    label: "User Query",
    icon: MessageSquare,
    color: "bg-blue-50 text-blue-600",
  },
  {
    type: "knowledge",
    label: "Knowledge Base",
    icon: Database,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    type: "llm",
    label: "LLM Engine",
    icon: Cpu,
    color: "bg-purple-50 text-purple-600",
  },
  {
    type: "output",
    label: "Output",
    icon: Send,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function Sidebar() {
  const onDragStart = (e, type) => {
    e.dataTransfer.setData("application/reactflow", type);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-slate-50 border-r border-slate-200 px-4 py-6">
      {/* TITLE */}
      <div className="mb-6">
        <h3 className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
          Components
        </h3>
      </div>

      {/* COMPONENT LIST */}
      <div className="space-y-3">
        {components.map((c) => {
          const Icon = c.icon;

          return (
            <div
              key={c.type}
              draggable
              onDragStart={(e) => onDragStart(e, c.type)}
              className="group flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm border border-slate-200 cursor-move
                         hover:shadow-md hover:border-slate-300 transition-all"
            >
              {/* ICON */}
              <div
                className={`w-9 h-9 rounded-md flex items-center justify-center ${c.color}`}
              >
                <Icon size={18} />
              </div>

              {/* LABEL */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-800">
                  {c.label}
                </span>
                <span className="text-xs text-slate-400">Drag to canvas</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* FOOTER HELP */}
      <div className="mt-auto pt-6">
        <div className="text-xs text-slate-400 leading-relaxed">
          Drag components into the canvas to build your AI workflow.
        </div>
      </div>
    </aside>
  );
}
