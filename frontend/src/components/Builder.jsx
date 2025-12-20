import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Upload from "./Upload";
import WorkflowCanvas from "./WorkflowCanvas";
import WorkflowSummaryModal from "./WorkflowSummaryModal";
import MobileSidebar from "./MobileSidebar";

export default function Builder() {
  const [flowStarted, setFlowStarted] = useState(false);
  const [activeTab, setActiveTab] = useState("flow");

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [showSummary, setShowSummary] = useState(false);
  const [summary, setSummary] = useState(null);

  const handleBuildStack = () => {
    const nodeCount = nodes.length;
    const edgeCount = edges.length;

    const hasInput = nodes.some((n) => n.data?.label === "INPUT");
    const hasLLM = nodes.some((n) => n.data?.label === "LLM");
    const hasOutput = nodes.some((n) => n.data?.label === "OUTPUT");

    const valid = hasInput && hasLLM && hasOutput && edgeCount >= nodeCount - 1;

    setSummary({
      nodes: nodeCount,
      edges: edgeCount,
      hasInput,
      hasLLM,
      hasOutput,
      valid,
    });

    setShowSummary(true);
  };

  return (
    <div className="h-screen flex flex-col bg-slate-50">
      {/* HEADER */}
      <Header onStartFlow={() => setFlowStarted(true)} />

      {/* MOBILE SIDEBAR */}
      <MobileSidebar />

      {/* MOBILE TABS */}
      <div className="flex lg:hidden border-b border-gray-200">
        {["flow", "chat"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-sm font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 overflow-hidden">
        {/* DESKTOP SIDEBAR */}
        <Sidebar />

        {/* FLOW */}
        <div
          className={`flex-1 p-2 lg:p-4 flex flex-col ${
            activeTab === "chat" ? "hidden lg:flex" : "flex"
          }`}
        >
          <WorkflowCanvas
            nodes={nodes}
            setNodes={setNodes}
            edges={edges}
            setEdges={setEdges}
          />

          <div className="mt-4 flex justify-end">
            <button
              onClick={handleBuildStack}
              className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"
            >
              🔍 Build Stack
            </button>
          </div>
        </div>

        {/* CHAT */}
        <div
          className={`w-full lg:w-[380px] bg-white border-l flex flex-col ${
            activeTab === "flow" ? "hidden lg:flex" : "flex"
          }`}
        >
          <Chat />
          <Upload />
        </div>
      </div>

      <WorkflowSummaryModal
        open={showSummary}
        onClose={() => setShowSummary(false)}
        summary={summary}
      />
    </div>
  );
}
