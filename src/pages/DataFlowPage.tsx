import { useCallback, useState } from 'react'
import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  type Edge,
  type Node,
  type NodeMouseHandler,
} from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  Database,
  Info,
  ShieldCheck,
  X,
} from 'lucide-react'

type FlowNodeData = {
  label: string
  description: string
  type: string
  purpose?: string
  retention?: string
  risk?: 'Low' | 'Medium' | 'High'
}

const initialNodes: Node[] = [
  {
    id: 'user',
    position: { x: 40, y: 180 },
    data: {
      label: 'You',
      description: 'Data Principal',
      type: 'Source',
    },
    style: {
      width: 190,
      background: '#f0f1ff',
      border: '1px solid #cfd3ff',
      color: '#182033',
      borderRadius: '16px',
      padding: '16px',
    },
  },
  {
    id: 'app',
    position: { x: 330, y: 180 },
    data: {
      label: 'PrivacyOS App',
      description: 'Collection & processing',
      type: 'Application',
      purpose: 'Account management',
      retention: 'Until account deletion',
      risk: 'Low',
    },
    style: {
      width: 210,
      background: '#ffffff',
      border: '1px solid #e8ebf2',
      color: '#182033',
      borderRadius: '16px',
      padding: '16px',
    },
  },
  {
    id: 'database',
    position: { x: 650, y: 80 },
    data: {
      label: 'Customer Database',
      description: 'Primary storage',
      type: 'Storage',
      purpose: 'Service delivery',
      retention: 'Until deletion',
      risk: 'Low',
    },
    style: {
      width: 210,
      background: '#ffffff',
      border: '1px solid #e8ebf2',
      color: '#182033',
      borderRadius: '16px',
      padding: '16px',
    },
  },
  {
    id: 'analytics',
    position: { x: 650, y: 280 },
    data: {
      label: 'Analytics Provider',
      description: 'Third-party processor',
      type: 'Processor',
      purpose: 'Product analytics',
      retention: '90 days',
      risk: 'Medium',
    },
    style: {
      width: 210,
      background: '#ffffff',
      border: '1px solid #fde2a8',
      color: '#182033',
      borderRadius: '16px',
      padding: '16px',
    },
  },
  {
    id: 'verification',
    position: { x: 950, y: 280 },
    data: {
      label: 'Verification Service',
      description: 'Third-party processor',
      type: 'Processor',
      purpose: 'Account verification',
      retention: '30 days',
      risk: 'Low',
    },
    style: {
      width: 210,
      background: '#ffffff',
      border: '1px solid #e8ebf2',
      color: '#182033',
      borderRadius: '16px',
      padding: '16px',
    },
  },
]

const initialEdges: Edge[] = [
  {
    id: 'user-app',
    source: 'user',
    target: 'app',
    animated: true,
    label: 'Provide',
    style: { stroke: '#6877ee', strokeWidth: 2 },
    labelStyle: { fill: '#6877ee', fontSize: 11 },
  },
  {
    id: 'app-database',
    source: 'app',
    target: 'database',
    animated: true,
    label: 'Store',
    style: { stroke: '#9aa2b5', strokeWidth: 2 },
    labelStyle: { fill: '#8992a5', fontSize: 11 },
  },
  {
    id: 'app-analytics',
    source: 'app',
    target: 'analytics',
    animated: true,
    label: 'Share',
    style: { stroke: '#f59e0b', strokeWidth: 2 },
    labelStyle: { fill: '#d97706', fontSize: 11 },
  },
  {
    id: 'analytics-verification',
    source: 'analytics',
    target: 'verification',
    animated: false,
    label: 'Verify',
    style: { stroke: '#9aa2b5', strokeWidth: 2 },
    labelStyle: { fill: '#8992a5', fontSize: 11 },
  },
]

export default function DataFlowPage() {
  const [nodes] = useState(initialNodes)
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    setSelectedNode(node as Node)
  }, [])

  const onPaneClick = useCallback(() => {
    setSelectedNode(null)
  }, [])

  const nodeCount = nodes.length

  return (
    <div className="space-y-8">

      {/* Header */}
      <section>
        <p className="text-sm font-medium text-[#6877ee]">
          Data Visibility
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#182033]">
              Follow your data.
            </h1>

            <p className="mt-2 max-w-2xl text-[#8992a5]">
              Explore how personal data moves through your organization,
              processors, and storage systems.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-[#e8ebf2] bg-white px-4 py-2 text-sm text-[#8992a5] shadow-sm">
            <ShieldCheck
              size={16}
              className="text-[#6877ee]"
            />
            Live privacy map
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Summary
          icon={Database}
          value={String(nodeCount)}
          label="Connected systems"
        />

        <Summary
          icon={Building2}
          value="3"
          label="Third-party processors"
        />

        <Summary
          icon={AlertTriangle}
          value="1"
          label="Flow requiring review"
        />
      </section>

      {/* Explorer */}
      <section className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white shadow-sm">

        <div className="flex flex-col justify-between gap-4 border-b border-[#e8ebf2] p-5 sm:flex-row sm:items-center">

          <div>
            <h2 className="font-semibold text-[#182033]">
              Personal data journey
            </h2>

            <p className="mt-1 text-xs text-[#8992a5]">
              Click any node to investigate its processing activity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-[#8992a5]">
            <Legend color="bg-[#6877ee]" label="Direct flow" />
            <Legend color="bg-amber-400" label="Review required" />
            <Legend color="bg-[#9aa2b5]" label="Storage" />
          </div>
        </div>

        <div className="relative h-[600px]">

          <ReactFlow
            nodes={nodes}
            edges={initialEdges}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            fitView
            minZoom={0.5}
            maxZoom={1.5}
            className="bg-white"
          >
            <Background
              color="#e8ebf2"
              gap={24}
              size={1}
            />

            <Controls className="!border-[#e8ebf2] !bg-white !shadow-sm" />

            <MiniMap
              nodeColor={(node) => {
                if (node.id === 'analytics') return '#f59e0b'
                if (node.id === 'user') return '#6877ee'
                return '#c4c9d6'
              }}
              maskColor="rgba(245, 247, 251, 0.75)"
              className="!border-[#e8ebf2] !bg-white"
            />
          </ReactFlow>

          {/* Investigation panel */}
          {selectedNode && (
            <InvestigationPanel
              node={selectedNode}
              onClose={() => setSelectedNode(null)}
            />
          )}
        </div>
      </section>
    </div>
  )
}

function Summary({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Database
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
        <Icon
          size={19}
          className="text-[#6877ee]"
        />
      </div>

      <p className="mt-4 text-3xl font-bold text-[#182033]">
        {value}
      </p>

      <p className="mt-1 text-sm text-[#8992a5]">
        {label}
      </p>
    </div>
  )
}

function Legend({
  color,
  label,
}: {
  color: string
  label: string
}) {
  return (
    <span className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </span>
  )
}

function InvestigationPanel({
  node,
  onClose,
}: {
  node: Node
  onClose: () => void
}) {
  const data = node.data as FlowNodeData

  return (
    <aside className="absolute right-4 top-4 z-10 w-[320px] rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-xl">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-[#6877ee]">
            Investigate
          </p>

          <h3 className="mt-1 text-lg font-semibold text-[#182033]">
            {data.label}
          </h3>

          <p className="mt-1 text-sm text-[#8992a5]">
            {data.description}
          </p>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-[#8992a5] hover:bg-[#f5f7fb] hover:text-[#182033]"
          aria-label="Close investigation panel"
        >
          <X size={17} />
        </button>
      </div>

      <div className="mt-6 space-y-4">

        <DetailRow
          label="System type"
          value={data.type}
        />

        {data.purpose && (
          <DetailRow
            label="Processing purpose"
            value={data.purpose}
          />
        )}

        {data.retention && (
          <DetailRow
            label="Retention"
            value={data.retention}
          />
        )}

        {data.risk && (
          <div className="flex items-center justify-between border-t border-[#e8ebf2] pt-4">
            <span className="text-sm text-[#8992a5]">
              Privacy risk
            </span>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                data.risk === 'High'
                  ? 'bg-red-50 text-red-600'
                  : data.risk === 'Medium'
                    ? 'bg-amber-50 text-amber-600'
                    : 'bg-[#f0f1ff] text-[#6877ee]'
              }`}
            >
              {data.risk}
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-[#e8ebf2] bg-[#f5f7fb] p-4">
        <div className="flex gap-3">

          <Info
            size={17}
            className="mt-0.5 shrink-0 text-[#6877ee]"
          />

          <p className="text-xs leading-5 text-[#8992a5]">
            PrivacyOS can use this processing activity to evaluate purpose,
            retention, consent, and third-party exposure.
          </p>

        </div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#6877ee] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#7c3aed]">
        View processing details
        <ArrowRight size={15} />
      </button>
    </aside>
  )
}

function DetailRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-[#e8ebf2] pb-3">
      <span className="text-sm text-[#8992a5]">
        {label}
      </span>

      <span className="text-right text-sm font-medium text-[#182033]">
        {value}
      </span>
    </div>
  )
}