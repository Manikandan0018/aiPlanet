import React from "react";
import axios from "axios";
import { useStore } from "../store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const submit = async () => {
    const res = await axios.post("http://127.0.0.1:8000/pipelines/parse", {
      nodes,
      edges,
    });
    alert(
      `Nodes: ${res.data.num_nodes}\nEdges: ${res.data.num_edges}\nValid DAG: ${res.data.is_dag}`
    );
  };

  return (
    <button
      onClick={submit}
      className="bg-indigo-600 hover:bg-indigo-500 transition text-white px-6 py-2 rounded-lg shadow-sm"
    >
      Submit
    </button>
  );
};
