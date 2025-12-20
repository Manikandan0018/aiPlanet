import React from "react";

const components = [
  { type: "input", label: "User Query" },
  { type: "knowledge", label: "Knowledge Base" },
  { type: "llm", label: "LLM Engine" },
  { type: "output", label: "Output" },
];

export default function MobileSidebar() {
  const onDragStart = (e, type) => {
    e.dataTransfer.setData("application/reactflow", type);
    e.dataTransfer.effectAllowed = "move";
  };

  return (
    <div className="lg:hidden border-b border-gray-200 bg-white px-3 py-2">
      <div className="flex gap-3 overflow-x-auto">
        {components.map((c) => (
          <div
            key={c.type}
            draggable
            onDragStart={(e) => onDragStart(e, c.type)}
            className="min-w-[150px] px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-sm text-center cursor-move active:scale-95"
          >
            {c.label}
          </div>
        ))}
      </div>
    </div>
  );
}
