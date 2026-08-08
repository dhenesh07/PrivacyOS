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

const initialNodes: Node<FlowNodeData>[] = [
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
      background: '#052e2b',
      border: '1px solid rgba(52, 211, 153, 0.35)',
      color: '#fff',
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
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#fff',
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
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#fff',
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
      background: '#0f172a',
      border: '1px solid rgba(245,158,11,0.3)',
      color: '#fff',
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
      background: '#0f172a',
      border: '1px solid rgba(255,255,255,0.12)',
      color: '#fff',
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
    style: { stroke: '#34d399' },
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
  },
  {
    id: 'app-database',
    source: 'app',
    target: 'database',
    animated: true,
    label: 'Store',
    style: { stroke: '#64748b' },
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
  },
  {
    id: 'app-analytics',
    source: 'app',
    target: 'analytics',
    animated: true,
    label: 'Share',
    style: { stroke: '#f59e0b' },
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
  },
  {
    id: 'analytics-verification',
    source: 'analytics',
    target: 'verification',
    animated: false,
    label: 'Verify',
    style: { stroke: '#64748b' },
    labelStyle: { fill: '#94a3b8', fontSize: 11 },
  },
]

export default function DataFlowPage() {
  const [nodes] = useState(initialNodes)
  const [selectedNode, setSelectedNode] = useState<Node<FlowNodeData> | null>(
    null,
  )

  const onNodeClick: NodeMouseHandler = useCallback((_, node) => {
    setSelectedNode(node as Node<FlowNodeData>)
  }, [])

  const onPaneClick = useCallback(() => {
    setSelectedNode(null)
  }, [])

  const nodeCount = nodes.length

  return (
    <div className="space-y-6">
      {/* Header */}
      <section>
        <p className="text-sm font-medium text-emerald-400">Data Visibility</p>

        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Follow your data.
            </h1>

            <p className="mt-2 max-w-2xl text-slate-400">
              Explore how personal data moves through your organization,
              processors, and storage systems.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-400">
            <ShieldCheck size={16} className="text-emerald-400" />
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
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950">
        <div className="flex flex-col justify-between gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-semibold">Personal data journey</h2>

            <p className="mt-1 text-xs text-slate-500">
              Click any node to investigate its processing activity.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <Legend color="bg-emerald-400" label="Direct flow" />
            <Legend color="bg-amber-400" label="Review required" />
            <Legend color="bg-slate-500" label="Storage" />
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
            className="bg-slate-950"
          >
            <Background color="#1e293b" gap={24} size={1} />
            <Controls className="!border-white/10 !bg-slate-900 !fill-white" />
            <MiniMap
              nodeColor={(node) => {
                if (node.id === 'analytics') return '#f59e0b'
                if (node.id === 'user') return '#34d399'
                return '#475569'
              }}
              maskColor="rgba(2, 6, 23, 0.75)"
              className="!border-white/10 !bg-slate-900"
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
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <Icon size={19} className="text-slate-400" />
      <p className="mt-4 text-2xl font-bold">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
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
    <div className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${color}`} />
      {label}
    </div>
  )
}

function InvestigationPanel({
  node,
  onClose,
}: {
  node: Node<FlowNodeData>
  onClose: () => void
}) {
  const data = node.data

  return (
    <aside className="absolute right-4 top-4 z-10 w-[330px] max-w-[calc(100%-32px)] rounded-2xl border border-white/10 bg-slate-900/95 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            Investigate
          </p>

          <h3 className="mt-1 text-lg font-semibold">{data.label}</h3>

          <p className="mt-1 text-sm text-slate-500">{data.description}</p>
        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-slate-500 hover:bg-white/5 hover:text-white"
          aria-label="Close investigation panel"
        >
          <X size={17} />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <DetailRow label="System type" value={data.type} />

        {data.purpose && (
          <DetailRow label="Processing purpose" value={data.purpose} />
        )}

        {data.retention && (
          <DetailRow label="Retention" value={data.retention} />
        )}

        {data.risk && (
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="text-sm text-slate-500">Privacy risk</span>

            <span
              className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                data.risk === 'High'
                  ? 'bg-red-500/10 text-red-400'
                  : data.risk === 'Medium'
                    ? 'bg-amber-500/10 text-amber-400'
                    : 'bg-emerald-500/10 text-emerald-400'
              }`}
            >
              {data.risk}
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex gap-3">
          <Info size={17} className="mt-0.5 shrink-0 text-slate-400" />

          <p className="text-xs leading-5 text-slate-500">
            PrivacyOS can use this processing activity to evaluate purpose,
            retention, consent, and third-party exposure.
          </p>
        </div>
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10">
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
    <div className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <p className="text-xs text-slate-600">{label}</p>
      <p className="mt-1 text-sm text-slate-300">{value}</p>
    </div>
  )
}