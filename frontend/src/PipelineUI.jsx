import React, { useRef, useCallback, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { useStore } from "./store";

import { InputNode } from "./nodes/InputNode.jsx";
import { TextNode }  from "./nodes/TextNode.jsx";
import { LLMNode } from "./nodes/LLMNode.jsx";
import { OutputNode } from "./nodes/OutputNode.jsx";

const nodeTypes = {
  input: InputNode,
  llm: LLMNode,
  text: TextNode,
  output: OutputNode,
};


export const PipelineUI = () => {
  const wrapperRef = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore();

  
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type || !reactFlowInstance) return;

      const bounds = wrapperRef.current.getBoundingClientRect();

      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      addNode({
        id: getNodeID(type),
        type,
        position,
        data: {},
      });
    },
    [reactFlowInstance]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
    h-[72vh]
    rounded-2xl
    border border-slate-300
    bg-slate-100
    shadow-inner
  "
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        fitView
        connectionLineStyle={{
          stroke: "#1463eb", 
          strokeWidth: 3,
        }}
        defaultEdgeOptions={{
          style: {
            stroke: "#2563eb", 
            strokeWidth: 3,
          },
          animated: false,
        }}
      />
    </div>
  );
};
