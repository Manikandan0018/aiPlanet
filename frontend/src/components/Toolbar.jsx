import React from "react";

export const Toolbar = () => {
  const startDrag = (e, type) => {
    e.dataTransfer.setData("application/reactflow", type);
    e.dataTransfer.effectAllowed = "move";
  };

  const Item = ({ label, type }) => (
    <div
      draggable
      onDragStart={(e) => startDrag(e, type)}
      className="px-4 py-2 rounded-lg border border-slate-200 bg-white text-slate-800 cursor-grab hover:bg-slate-50 shadow-sm"
    >
      {label}
    </div>
  );

  return (
    <div className="flex gap-3 p-4 border-b border-slate-200 bg-white">
      <Item label="Input" type="input" />
      <Item label="Text" type="text" />
      <Item label="LLM" type="llm" />
      <Item label="Output" type="output" />
    </div>
  );
};
