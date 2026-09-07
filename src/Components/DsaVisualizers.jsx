import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Plus,
  Minus,
  RotateCcw,
  Sparkles,
  BrainCircuit,
  Layers,
  Zap,
  ArrowRight,
  Activity,
  CheckCircle2,
} from "lucide-react";

// ==========================================
// 1. DYNAMIC BINARY TREE VISUALIZER
// ==========================================

const INITIAL_TREE_NODES = [
  { id: "1", val: 50, x: 300, y: 55, level: 0 },
  { id: "2", val: 25, x: 170, y: 130, level: 1, parent: "1" },
  { id: "3", val: 75, x: 430, y: 130, level: 1, parent: "1" },
  { id: "4", val: 12, x: 100, y: 215, level: 2, parent: "2" },
  { id: "5", val: 38, x: 240, y: 215, level: 2, parent: "2" },
  { id: "6", val: 63, x: 360, y: 215, level: 2, parent: "3" },
  { id: "7", val: 89, x: 500, y: 215, level: 2, parent: "3" },
];

const DYNAMIC_TREE_NODES = [
  { id: "8", val: 6, x: 65, y: 295, level: 3, parent: "4" },
  { id: "9", val: 96, x: 535, y: 295, level: 3, parent: "7" },
  { id: "10", val: 44, x: 275, y: 295, level: 3, parent: "5" },
];

export function DsaTreeMotion() {
  const [nodes, setNodes] = useState(INITIAL_TREE_NODES);
  const [activeNodeId, setActiveNodeId] = useState("1");
  const [activePath, setActivePath] = useState(["1"]);
  const [operationMsg, setOperationMsg] = useState("BST Balanced · Root: 50");
  const [isPlaying, setIsPlaying] = useState(true);
  const stepRef = useRef(0);

  // Auto-cycling state machine for Tree operations
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      stepRef.current = (stepRef.current + 1) % 8;
      const step = stepRef.current;

      switch (step) {
        case 0:
          // Search 38
          setActivePath(["1", "2", "5"]);
          setActiveNodeId("5");
          setOperationMsg("SEARCH(38): 50 → 25 → 38 [Found]");
          break;
        case 1:
          // Insert 96
          setNodes((prev) =>
            prev.some((n) => n.id === "9")
              ? prev
              : [...prev, DYNAMIC_TREE_NODES[1]]
          );
          setActivePath(["1", "3", "7", "9"]);
          setActiveNodeId("9");
          setOperationMsg("INSERT(96): 50 → 75 → 89 → Inserted");
          break;
        case 2:
          // Search 75
          setActivePath(["1", "3"]);
          setActiveNodeId("3");
          setOperationMsg("TRAVERSAL: In-order inspect 75");
          break;
        case 3:
          // Insert 6
          setNodes((prev) =>
            prev.some((n) => n.id === "8")
              ? prev
              : [...prev, DYNAMIC_TREE_NODES[0]]
          );
          setActivePath(["1", "2", "4", "8"]);
          setActiveNodeId("8");
          setOperationMsg("INSERT(6): 50 → 25 → 12 → Inserted");
          break;
        case 4:
          // Insert 44
          setNodes((prev) =>
            prev.some((n) => n.id === "10")
              ? prev
              : [...prev, DYNAMIC_TREE_NODES[2]]
          );
          setActivePath(["1", "2", "5", "10"]);
          setActiveNodeId("10");
          setOperationMsg("INSERT(44): 50 → 25 → 38 → Inserted");
          break;
        case 5:
          // Search Root
          setActivePath(["1"]);
          setActiveNodeId("1");
          setOperationMsg("REBALANCING: AVL Tree Height = 4, Invariant OK");
          break;
        case 6:
          // Prune / Remove 6 and 44
          setNodes((prev) => prev.filter((n) => n.id !== "8" && n.id !== "10"));
          setActivePath(["1", "2"]);
          setActiveNodeId("2");
          setOperationMsg("DELETE(6, 44): Leaf nodes pruned & freed");
          break;
        case 7:
          // Remove 96
          setNodes(INITIAL_TREE_NODES);
          setActivePath(["1"]);
          setActiveNodeId("1");
          setOperationMsg("RESET: Base BST Tree Restored");
          break;
        default:
          break;
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleAddNode = () => {
    const missing = DYNAMIC_TREE_NODES.find(
      (d) => !nodes.some((n) => n.id === d.id)
    );
    if (missing) {
      setNodes((prev) => [...prev, missing]);
      setActiveNodeId(missing.id);
      setActivePath(["1", missing.parent, missing.id]);
      setOperationMsg(`INSERT(${missing.val}): Dynamic leaf added`);
    } else {
      setOperationMsg("Tree at max demonstration capacity");
    }
  };

  const handleRemoveNode = () => {
    const dynamicIds = ["10", "8", "9"];
    const toRemove = dynamicIds.find((id) => nodes.some((n) => n.id === id));
    if (toRemove) {
      const removedNode = nodes.find((n) => n.id === toRemove);
      setNodes((prev) => prev.filter((n) => n.id !== toRemove));
      setActiveNodeId(removedNode.parent);
      setActivePath(["1", removedNode.parent]);
      setOperationMsg(`DELETE(${removedNode.val}): Node pruned gracefully`);
    } else {
      setOperationMsg("Base tree structure preserved");
    }
  };

  const handleReset = () => {
    setNodes(INITIAL_TREE_NODES);
    setActivePath(["1"]);
    setActiveNodeId("1");
    setOperationMsg("BST Reset to Initial State");
  };

  return (
    <div className="panel dsa-interactive-card">
      <div className="dsa-card-header">
        <div className="dsa-card-header__left">
          <div className="dsa-pill dsa-pill--tree">
            <Sparkles size={13} />
            <span>Binary Search Tree</span>
          </div>
          <h3 className="dsa-card-title">Dynamic BST & Balancing</h3>
        </div>

        <div className="dsa-controls">
          <button
            type="button"
            className="dsa-btn"
            onClick={() => setIsPlaying((p) => !p)}
            title={isPlaying ? "Pause animation" : "Resume animation"}
            aria-label={isPlaying ? "Pause animation" : "Resume animation"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleAddNode}
            title="Insert dynamic node"
            aria-label="Insert dynamic node"
          >
            <Plus size={14} />
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleRemoveNode}
            title="Remove leaf node"
            aria-label="Remove leaf node"
          >
            <Minus size={14} />
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleReset}
            title="Reset tree"
            aria-label="Reset tree"
          >
            <RotateCcw size={13} />
          </button>
        </div>
      </div>

      <div className="dsa-status-bar">
        <span className="dsa-live-indicator" />
        <span className="dsa-status-text">{operationMsg}</span>
      </div>

      <div className="dsa-canvas-wrap">
        <svg
          viewBox="0 0 600 350"
          className="dsa-diagram"
          role="img"
          aria-label="Interactive Binary Search Tree with dynamic insertions and removals"
        >
          <defs>
            <filter id="treeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="activeBranch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" />
              <stop offset="100%" stopColor="#ff9d71" />
            </linearGradient>
            <linearGradient id="inactiveBranch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </linearGradient>
          </defs>

          {/* Background Frame */}
          <rect
            x="10"
            y="10"
            width="580"
            height="330"
            rx="20"
            className="dsa-diagram__frame"
          />

          {/* Level Markers */}
          <g className="dsa-level-labels" opacity="0.4">
            <text x="30" y="60">L0</text>
            <text x="30" y="135">L1</text>
            <text x="30" y="220">L2</text>
            <text x="30" y="300">L3</text>
          </g>

          {/* Tree Edges */}
          {nodes.map((node) => {
            if (!node.parent) return null;
            const parent = nodes.find((n) => n.id === node.parent);
            if (!parent) return null;

            const isPathActive =
              activePath.includes(node.id) && activePath.includes(parent.id);

            // Smooth bezier branch
            const midY = (parent.y + node.y) / 2;
            const pathD = `M ${parent.x} ${parent.y + 14} C ${parent.x} ${midY}, ${node.x} ${midY}, ${node.x} ${node.y - 14}`;

            return (
              <g key={`edge-${parent.id}-${node.id}`}>
                <motion.path
                  d={pathD}
                  fill="none"
                  stroke={isPathActive ? "url(#activeBranch)" : "url(#inactiveBranch)"}
                  strokeWidth={isPathActive ? 3 : 1.6}
                  strokeLinecap="round"
                  filter={isPathActive ? "url(#treeGlow)" : undefined}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                {isPathActive && (
                  <motion.circle
                    r="3.5"
                    fill="#ffffff"
                    filter="url(#treeGlow)"
                    animate={{
                      cx: [parent.x, node.x],
                      cy: [parent.y + 14, node.y - 14],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Tree Nodes */}
          <AnimatePresence>
            {nodes.map((node, index) => {
              const isActive = activeNodeId === node.id;
              const isPath = activePath.includes(node.id);

              return (
                <motion.g
                  key={node.id}
                  initial={{ scale: 0, opacity: 0, y: -20 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: [0, (index % 2 === 0 ? -3 : 3), 0],
                  }}
                  exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                  transition={{
                    y: { duration: 3.5 + (index % 3), repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.4, type: "spring", stiffness: 300 },
                  }}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                >
                  {/* Active Pulse Ring */}
                  {isActive && (
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r="24"
                      fill="none"
                      stroke="var(--accent)"
                      strokeWidth="2"
                      initial={{ scale: 0.8, opacity: 0.9 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}

                  {/* Node Circle */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="19"
                    fill={isActive ? "rgba(255, 107, 53, 0.95)" : isPath ? "rgba(255, 107, 53, 0.25)" : "rgba(22, 26, 35, 0.92)"}
                    stroke={isActive ? "#ff9d71" : isPath ? "var(--accent)" : "rgba(255, 255, 255, 0.16)"}
                    strokeWidth={isActive ? 2.5 : 1.5}
                    filter={isActive ? "url(#treeGlow)" : "drop-shadow(0 4px 10px rgba(0,0,0,0.5))"}
                  />

                  {/* Value */}
                  <text
                    x={node.x}
                    y={node.y + 5.5}
                    textAnchor="middle"
                    fill={isActive ? "#110b08" : "#f5f3ef"}
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    {node.val}
                  </text>
                </motion.g>
              );
            })}
          </AnimatePresence>
        </svg>
      </div>

      <div className="dsa-card-footer">
        <span className="dsa-metric-chip">Height: 3</span>
        <span className="dsa-metric-chip">Active Path: {activePath.length} nodes</span>
        <span className="dsa-metric-chip dsa-metric-chip--accent">AVL Balanced</span>
      </div>
    </div>
  );
}

// ==========================================
// 2. DYNAMIC GRAPH NETWORK VISUALIZER
// ==========================================

const BASE_VERTICES = [
  { id: "V1", label: "V1", x: 290, y: 55, fixed: true },
  { id: "V2", label: "V2", x: 440, y: 110, fixed: false },
  { id: "V3", label: "V3", x: 420, y: 245, fixed: false },
  { id: "V4", label: "V4", x: 290, y: 295, fixed: false },
  { id: "V5", label: "V5", x: 160, y: 245, fixed: false },
  { id: "V6", label: "V6", x: 140, y: 110, fixed: false },
  { id: "V7", label: "V7", x: 290, y: 175, fixed: false },
];

const BASE_GRAPH_EDGES = [
  ["V1", "V6"],
  ["V1", "V7"],
  ["V1", "V2"],
  ["V6", "V5"],
  ["V6", "V7"],
  ["V2", "V7"],
  ["V2", "V3"],
  ["V7", "V4"],
  ["V7", "V5"],
  ["V7", "V3"],
  ["V5", "V4"],
  ["V3", "V4"],
];

const DYNAMIC_VERTEX = { id: "V8", label: "V8", x: 505, y: 180, fixed: false };
const DYNAMIC_EDGES = [
  ["V2", "V8"],
  ["V8", "V3"],
];

export function DsaGraphMotion() {
  const [vertices, setVertices] = useState(BASE_VERTICES);
  const [edges, setEdges] = useState(BASE_GRAPH_EDGES);
  const [activeVertex, setActiveVertex] = useState("V1");
  const [activeEdge, setActiveEdge] = useState(["V1", "V7"]);
  const [bfsWave, setBfsWave] = useState(["V1"]);
  const [statusText, setStatusText] = useState("BFS Wavefront initialized at V1");
  const [isPlaying, setIsPlaying] = useState(true);
  const graphStepRef = useRef(0);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      graphStepRef.current = (graphStepRef.current + 1) % 8;
      const step = graphStepRef.current;

      switch (step) {
        case 0:
          // Wave 1
          setActiveVertex("V1");
          setActiveEdge(["V1", "V7"]);
          setBfsWave(["V1"]);
          setStatusText("BFS Wave 0: Inspecting Source V1");
          break;
        case 1:
          // Wave 2: neighbors of V1 (V6, V7, V2)
          setActiveVertex("V7");
          setActiveEdge(["V1", "V2"]);
          setBfsWave(["V6", "V7", "V2"]);
          setStatusText("BFS Wave 1: Propagating to V6, V7, V2");
          break;
        case 2:
          // Dynamically add node V8!
          setVertices((prev) =>
            prev.some((v) => v.id === "V8") ? prev : [...prev, DYNAMIC_VERTEX]
          );
          setEdges((prev) =>
            prev.some(([u, v]) => u === "V2" && v === "V8")
              ? prev
              : [...prev, ...DYNAMIC_EDGES]
          );
          setActiveVertex("V8");
          setActiveEdge(["V2", "V8"]);
          setStatusText("DYNAMIC TOPOLOGY: Node V8 added & connected");
          break;
        case 3:
          // Wave 3: V8 routing packets
          setActiveVertex("V8");
          setActiveEdge(["V8", "V3"]);
          setBfsWave(["V5", "V8", "V3"]);
          setStatusText("PACKET ROUTING: High-speed edge via V8 → V3");
          break;
        case 4:
          // Target Reach: V4
          setActiveVertex("V4");
          setActiveEdge(["V7", "V4"]);
          setBfsWave(["V4"]);
          setStatusText("TARGET REACHED: Shortest path converged at V4");
          break;
        case 5:
          // Dijkstra relaxation
          setActiveVertex("V3");
          setActiveEdge(["V3", "V4"]);
          setBfsWave(["V3", "V4"]);
          setStatusText("DIJKSTRA RELAXATION: Edge weights optimized");
          break;
        case 6:
          // Dynamically prune / remove V8
          setVertices((prev) => prev.filter((v) => v.id !== "V8"));
          setEdges((prev) =>
            prev.filter(([u, v]) => u !== "V8" && v !== "V8")
          );
          setActiveVertex("V7");
          setActiveEdge(["V7", "V5"]);
          setBfsWave(["V7", "V5"]);
          setStatusText("DYNAMIC CULLING: Node V8 gracefully disconnected");
          break;
        case 7:
          // Cycle reset
          setActiveVertex("V1");
          setActiveEdge(["V1", "V6"]);
          setBfsWave(["V1"]);
          setStatusText("GRAPH TOPOLOGY: Stable 7-vertex cycle ready");
          break;
        default:
          break;
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleToggleV8 = () => {
    const hasV8 = vertices.some((v) => v.id === "V8");
    if (!hasV8) {
      setVertices((prev) => [...prev, DYNAMIC_VERTEX]);
      setEdges((prev) => [...prev, ...DYNAMIC_EDGES]);
      setActiveVertex("V8");
      setActiveEdge(["V2", "V8"]);
      setStatusText("Manual Action: Inserted dynamic vertex V8");
    } else {
      setVertices((prev) => prev.filter((v) => v.id !== "V8"));
      setEdges((prev) => prev.filter(([u, v]) => u !== "V8" && v !== "V8"));
      setActiveVertex("V1");
      setStatusText("Manual Action: Removed vertex V8");
    }
  };

  const handleTriggerBfs = () => {
    setActiveVertex("V1");
    setBfsWave(["V6", "V7", "V2"]);
    setStatusText("Manual Action: BFS wavefront triggered from V1");
  };

  return (
    <div className="panel dsa-interactive-card">
      <div className="dsa-card-header">
        <div className="dsa-card-header__left">
          <div className="dsa-pill dsa-pill--graph">
            <BrainCircuit size={13} />
            <span>Connected Graph</span>
          </div>
          <h3 className="dsa-card-title">Network Flow & Dynamic Nodes</h3>
        </div>

        <div className="dsa-controls">
          <button
            type="button"
            className="dsa-btn"
            onClick={() => setIsPlaying((p) => !p)}
            title={isPlaying ? "Pause animation" : "Resume animation"}
            aria-label={isPlaying ? "Pause animation" : "Resume animation"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleToggleV8}
            title="Toggle dynamic node V8"
            aria-label="Toggle dynamic node V8"
          >
            {vertices.some((v) => v.id === "V8") ? (
              <Minus size={14} />
            ) : (
              <Plus size={14} />
            )}
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleTriggerBfs}
            title="Trigger BFS wave"
            aria-label="Trigger BFS wave"
          >
            <Zap size={13} />
          </button>
        </div>
      </div>

      <div className="dsa-status-bar">
        <span className="dsa-live-indicator dsa-live-indicator--cyan" />
        <span className="dsa-status-text">{statusText}</span>
      </div>

      <div className="dsa-canvas-wrap">
        <svg
          viewBox="0 0 600 350"
          className="dsa-diagram"
          role="img"
          aria-label="Interactive Graph with dynamic nodes and packet transmission"
        >
          <defs>
            <filter id="graphGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="cyanEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="emeraldEdge" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          {/* Background Frame */}
          <rect
            x="10"
            y="10"
            width="580"
            height="330"
            rx="20"
            className="dsa-diagram__frame dsa-diagram__frame--graph"
          />

          {/* Graph Edges */}
          {edges.map(([uId, vId]) => {
            const u = vertices.find((vert) => vert.id === uId);
            const v = vertices.find((vert) => vert.id === vId);
            if (!u || !v) return null;

            const isCurrentEdge =
              (activeEdge[0] === uId && activeEdge[1] === vId) ||
              (activeEdge[0] === vId && activeEdge[1] === uId);
            const isDynamic = uId === "V8" || vId === "V8";

            return (
              <g key={`graph-edge-${uId}-${vId}`}>
                <motion.line
                  x1={u.x}
                  y1={u.y}
                  x2={v.x}
                  y2={v.y}
                  stroke={
                    isDynamic
                      ? "url(#emeraldEdge)"
                      : isCurrentEdge
                      ? "url(#cyanEdge)"
                      : "rgba(74, 146, 255, 0.22)"
                  }
                  strokeWidth={isCurrentEdge || isDynamic ? 2.8 : 1.4}
                  strokeDasharray={isDynamic ? "4 4" : undefined}
                  filter={isCurrentEdge || isDynamic ? "url(#graphGlow)" : undefined}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Flowing Data Packet particle */}
                {isCurrentEdge && (
                  <motion.circle
                    r="4"
                    fill={isDynamic ? "#10b981" : "#00f2fe"}
                    filter="url(#graphGlow)"
                    animate={{
                      cx: [u.x, v.x],
                      cy: [u.y, v.y],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Graph Vertices */}
          <AnimatePresence>
            {vertices.map((vert, idx) => {
              const isActive = activeVertex === vert.id;
              const isWave = bfsWave.includes(vert.id);
              const isDynamic = vert.id === "V8";

              // Organic floating coordinates
              const swayX = (idx % 3 - 1) * 3;
              const swayY = (idx % 2 === 0 ? -4 : 4);

              return (
                <motion.g
                  key={vert.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: [0, swayX, 0],
                    y: [0, swayY, 0],
                  }}
                  exit={{ scale: 0, opacity: 0, transition: { duration: 0.3 } }}
                  transition={{
                    x: { duration: 4 + idx * 0.4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 3.6 + idx * 0.5, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.4, type: "spring", stiffness: 320 },
                  }}
                  style={{ transformOrigin: `${vert.x}px ${vert.y}px` }}
                >
                  {/* Wave expansion ripple */}
                  {(isActive || isWave) && (
                    <motion.circle
                      cx={vert.x}
                      cy={vert.y}
                      r="26"
                      fill="none"
                      stroke={isDynamic ? "#10b981" : "#06b6d4"}
                      strokeWidth="1.8"
                      initial={{ scale: 0.8, opacity: 0.9 }}
                      animate={{ scale: 1.4, opacity: 0 }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
                    />
                  )}

                  {/* Vertex Body */}
                  <circle
                    cx={vert.x}
                    cy={vert.y}
                    r="20"
                    fill={
                      isActive
                        ? isDynamic
                          ? "rgba(16, 185, 129, 0.9)"
                          : "rgba(6, 182, 212, 0.9)"
                        : isWave
                        ? "rgba(59, 130, 246, 0.35)"
                        : "rgba(15, 23, 42, 0.94)"
                    }
                    stroke={
                      isActive
                        ? "#ffffff"
                        : isDynamic
                        ? "#10b981"
                        : isWave
                        ? "#06b6d4"
                        : "rgba(74, 146, 255, 0.45)"
                    }
                    strokeWidth={isActive ? 2.5 : 1.5}
                    filter={isActive || isWave ? "url(#graphGlow)" : undefined}
                  />

                  {/* Label */}
                  <text
                    x={vert.x}
                    y={vert.y + 5.5}
                    textAnchor="middle"
                    fill={isActive ? "#0b1320" : "#f1f5f9"}
                    fontSize="13"
                    fontWeight="700"
                    fontFamily="Space Grotesk, sans-serif"
                  >
                    {vert.label}
                  </text>
                </motion.g>
              );
            })}
          </AnimatePresence>
        </svg>
      </div>

      <div className="dsa-card-footer">
        <span className="dsa-metric-chip">Vertices: {vertices.length}</span>
        <span className="dsa-metric-chip">Edges: {edges.length}</span>
        <span className="dsa-metric-chip dsa-metric-chip--cyan">
          {vertices.some((v) => v.id === "V8") ? "Topology: Dynamic (+V8)" : "Topology: Static Mesh"}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// 3. DYNAMIC ARRAY & SLIDING WINDOW VISUALIZER
// ==========================================

const INITIAL_ARRAY = [16, 28, 42, 55, 68, 79, 93];

export function DsaArrayMotion() {
  const [items, setItems] = useState(INITIAL_ARRAY);
  const [leftPointer, setLeftPointer] = useState(1);
  const [rightPointer, setRightPointer] = useState(3);
  const [operation, setOperation] = useState("Sliding Window: [L=1, R=3]");
  const [activeIndices, setActiveIndices] = useState([1, 2, 3]);
  const [isPlaying, setIsPlaying] = useState(true);
  const arrayStepRef = useRef(0);

  // Auto-running Sliding Window & Array Operations
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      arrayStepRef.current = (arrayStepRef.current + 1) % 7;
      const step = arrayStepRef.current;

      switch (step) {
        case 0:
          // Expand Right
          setLeftPointer(1);
          setRightPointer(4);
          setActiveIndices([1, 2, 3, 4]);
          setOperation("EXPAND WINDOW: Right pointer moves to index 4");
          break;
        case 1:
          // Shrink Left
          setLeftPointer(2);
          setRightPointer(4);
          setActiveIndices([2, 3, 4]);
          setOperation("CONTRACT WINDOW: Left pointer moves to index 2 (Condition met)");
          break;
        case 2:
          // Push element
          setItems((prev) => (prev.length < 9 ? [...prev, 108] : prev));
          setOperation("ARRAY.PUSH(108): Element added at tail with amortized O(1)");
          break;
        case 3:
          // Slide further
          setLeftPointer(3);
          setRightPointer(5);
          setActiveIndices([3, 4, 5]);
          setOperation("SLIDE: Subarray [68, 79, 93] inspected");
          break;
        case 4:
          // Swap / Two-pointer meet
          setOperation("TWO POINTERS: Binary search partition comparison");
          setActiveIndices([leftPointer, rightPointer]);
          break;
        case 5:
          // Pop element
          setItems((prev) => (prev.length > 6 ? prev.slice(0, -1) : prev));
          setOperation("ARRAY.POP(): Tail element evicted; capacity preserved");
          break;
        case 6:
          // Reset window
          setLeftPointer(1);
          setRightPointer(3);
          setActiveIndices([1, 2, 3]);
          setItems(INITIAL_ARRAY);
          setOperation("WINDOW RESET: [1..3] Active subarray initialized");
          break;
        default:
          break;
      }
    }, 2600);

    return () => clearInterval(interval);
  }, [isPlaying, leftPointer, rightPointer]);

  const handlePush = () => {
    if (items.length >= 10) {
      setOperation("Array demonstration capacity (10) reached");
      return;
    }
    const val = Math.floor(Math.random() * 80) + 20;
    setItems((prev) => [...prev, val]);
    setOperation(`ARRAY.PUSH(${val}): Memory block allocated`);
  };

  const handlePop = () => {
    if (items.length <= 4) {
      setOperation("Minimum elements reached");
      return;
    }
    const popped = items[items.length - 1];
    setItems((prev) => prev.slice(0, -1));
    if (rightPointer >= items.length - 1) {
      setRightPointer(items.length - 2);
    }
    setOperation(`ARRAY.POP(): Evicted value ${popped}`);
  };

  const handleStepWindow = () => {
    const nextR = (rightPointer + 1) % items.length;
    const nextL = (leftPointer + 1) % items.length;
    setRightPointer(nextR);
    if (nextL <= nextR) {
      setLeftPointer(nextL);
    } else {
      setLeftPointer(0);
      setRightPointer(2);
    }
    setOperation(`MANUAL SLIDE: Window moved to [${leftPointer}..${rightPointer}]`);
  };

  // Current window sum
  const windowSubarray = items.slice(
    Math.min(leftPointer, rightPointer),
    Math.max(leftPointer, rightPointer) + 1
  );
  const windowSum = windowSubarray.reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="panel dsa-interactive-card dsa-visual-card--wide">
      <div className="dsa-card-header">
        <div className="dsa-card-header__left">
          <div className="dsa-pill dsa-pill--array">
            <Layers size={13} />
            <span>Contiguous Memory & Two Pointers</span>
          </div>
          <h3 className="dsa-card-title">Dynamic Array & Sliding Window</h3>
        </div>

        <div className="dsa-controls">
          <button
            type="button"
            className="dsa-btn"
            onClick={() => setIsPlaying((p) => !p)}
            title={isPlaying ? "Pause animation" : "Resume animation"}
            aria-label={isPlaying ? "Pause animation" : "Resume animation"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handlePush}
            title="Push element to array"
            aria-label="Push element to array"
          >
            <Plus size={14} /> Push
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handlePop}
            title="Pop element from array"
            aria-label="Pop element from array"
          >
            <Minus size={14} /> Pop
          </button>
          <button
            type="button"
            className="dsa-btn"
            onClick={handleStepWindow}
            title="Slide pointers"
            aria-label="Slide pointers"
          >
            <ArrowRight size={14} /> Slide
          </button>
        </div>
      </div>

      <div className="dsa-status-bar">
        <span className="dsa-live-indicator dsa-live-indicator--emerald" />
        <span className="dsa-status-text">{operation}</span>
      </div>

      {/* Array Elements Visual Display */}
      <div className="dsa-array-container">
        <div className="dsa-array-track">
          <AnimatePresence mode="popLayout">
            {items.map((val, idx) => {
              const isLeft = idx === leftPointer;
              const isRight = idx === rightPointer;
              const isInsideWindow =
                idx >= Math.min(leftPointer, rightPointer) &&
                idx <= Math.max(leftPointer, rightPointer);

              return (
                <motion.div
                  key={`${idx}-${val}`}
                  layout
                  initial={{ scale: 0.5, opacity: 0, y: -25 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.4, opacity: 0, y: 30 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                  }}
                  className={`dsa-array-cell ${
                    isInsideWindow ? "dsa-array-cell--active" : ""
                  }`}
                >
                  {/* Pointer Labels above cell */}
                  <div className="dsa-pointer-tags">
                    {isLeft && (
                      <motion.span
                        className="dsa-pointer-badge dsa-pointer-badge--left"
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        L
                      </motion.span>
                    )}
                    {isRight && (
                      <motion.span
                        className="dsa-pointer-badge dsa-pointer-badge--right"
                        initial={{ y: -5, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                      >
                        R
                      </motion.span>
                    )}
                  </div>

                  {/* Cell Box */}
                  <div className="dsa-cell-box">
                    <span className="dsa-cell-value">{val}</span>
                  </div>

                  {/* Index Label beneath cell */}
                  <div className="dsa-cell-meta">
                    <span className="dsa-cell-idx">[{idx}]</span>
                    <span className="dsa-cell-hex">0x{((idx + 1) * 4).toString(16).padStart(2, "0")}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Live Computation Panel */}
      <div className="dsa-metrics-row">
        <div className="dsa-metric-box">
          <span className="dsa-metric-box__label">Active Window</span>
          <strong className="dsa-metric-box__val">
            [{leftPointer} .. {rightPointer}]
          </strong>
        </div>

        <div className="dsa-metric-box">
          <span className="dsa-metric-box__label">Window Sum</span>
          <strong className="dsa-metric-box__val dsa-metric-box__val--accent">
            Σ = {windowSum}
          </strong>
        </div>

        <div className="dsa-metric-box">
          <span className="dsa-metric-box__label">Capacity / Size</span>
          <strong className="dsa-metric-box__val">{items.length} Elements</strong>
        </div>

        <div className="dsa-metric-box">
          <span className="dsa-metric-box__label">Time Complexity</span>
          <strong className="dsa-metric-box__val">O(N) Amortized</strong>
        </div>
      </div>
    </div>
  );
}
