import React, { useCallback, useEffect } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  useReactFlow,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "reactflow/dist/style.css";
import FlowNode from "./FlowNode";
import bg from "../../image/bg.jpg";

const nodeTypes = {
  flowNode: FlowNode,
};

const colorMap = {
  input: "#a855f7",
  knowledge: "#6366f1",
  llm: "#22c55e",
  output: "#f59e0b",
};

export default function WorkflowCanvas({ nodes, setNodes, edges, setEdges }) {
  const [rfNodes, setRfNodes, onNodesChange] = useNodesState(nodes);
  const [rfEdges, setRfEdges, onEdgesChange] = useEdgesState(edges);

  const { screenToFlowPosition } = useReactFlow();

  // 🔁 Sync state back to Builder
  useEffect(() => {
    setNodes(rfNodes);
  }, [rfNodes, setNodes]);

  useEffect(() => {
    setEdges(rfEdges);
  }, [rfEdges, setEdges]);

  const onConnect = useCallback(
    (params) =>
      setRfEdges((eds) =>
        addEdge(
          {
            ...params,
            type: "smoothstep",
            style: { stroke: "#94a3b8", strokeWidth: 2 },
          },
          eds
        )
      ),
    []
  );

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      setRfNodes((nds) =>
        nds.concat({
          id: crypto.randomUUID(),
          type: "flowNode",
          position,
          data: {
            label: type.toUpperCase(),
            subtitle:
              type === "input"
                ? "User Input"
                : type === "knowledge"
                ? "Knowledge Base"
                : type === "llm"
                ? "LLM Engine"
                : "Final Output",
            color: colorMap[type],
          },
        })
      );
    },
    [screenToFlowPosition]
  );

  return (
    <div
      className="h-full rounded-xl border border-gray-200 overflow-hidden"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ LIGHT OVERLAY (important) */}
      <div className="h-full bg-white/40 backdrop-blur-sm">
        <ReactFlow
          nodes={rfNodes}
          edges={rfEdges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={(e) => e.preventDefault()}
          fitView
        >
          {/* Grid */}
          <Background gap={20} size={1} color="#e5e7eb" />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}
