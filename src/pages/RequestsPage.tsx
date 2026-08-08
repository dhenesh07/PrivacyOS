import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileSearch,
  ShieldCheck,
  Trash2,
} from 'lucide-react'

type RequestStatus = 'Completed' | 'In Progress' | 'Pending'

type PrivacyRequest = {
  id: string
  type: string
  description: string
  created: string
  updated: string
  status: RequestStatus
  icon: typeof FileSearch
}

const requests: PrivacyRequest[] = [
  {
    id: 'REQ-1042',
    type: 'Access request',
    description: 'Requested a copy of personal data currently being processed.',
    created: 'Aug 4, 2026',
    updated: 'Aug 5, 2026',
    status: 'In Progress',
    icon: FileSearch,
  },
  {
    id: 'REQ-1031',
    type: 'Correction request',
    description: 'Requested correction of an outdated profile field.',
    created: 'Jul 28, 2026',
    updated: 'Jul 29, 2026',
    status: 'Completed',
    icon: CheckCircle2,
  },
  {
    id: 'REQ-0987',
    type: 'Deletion request',
    description: 'Requested deletion of optional profile information.',
    created: 'Jun 18, 2026',
    updated: 'Jun 20, 2026',
    status: 'Completed',
    icon: Trash2,
  },
]

const requestTypes = [
  {
    title: 'Access my data',
    description: 'Request a copy of the personal data being processed about you.',
    icon: FileSearch,
  },
  {
    title: 'Correct my data',
    description: 'Ask an organization to correct inaccurate or outdated information.',
    icon: ShieldCheck,
  },
  {
    title: 'Delete my data',
    description: 'Request deletion of personal data where applicable.',
    icon: Trash2,
  },
]

export default function RequestsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <p className="text-sm font-medium text-emerald-400">
          Privacy Rights
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Take control of your data.
        </h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          Submit and track privacy requests without navigating complicated
          processes or legal terminology.
        </p>
      </section>

      {/* Request actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Start a request</h2>

          <p className="mt-1 text-sm text-slate-500">
            Choose what you want to do with your personal data.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {requestTypes.map((request) => {
            const Icon = request.icon

            return (
              <button
                key={request.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition hover:-translate-y-0.5 hover:border-emerald-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
                    <Icon size={20} className="text-emerald-400" />
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-emerald-400"
                  />
                </div>

                <h3 className="mt-6 font-semibold">{request.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {request.description}
                </p>
              </button>
            )
          })}
        </div>
      </section>

      {/* Request lifecycle */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
              How it works
            </p>

            <h2 className="mt-2 text-lg font-semibold">
              From request to resolution
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            <LifecycleStep number="1" label="Submit" active />
            <ArrowRight size={15} className="text-slate-700" />
            <LifecycleStep number="2" label="Verify" />
            <ArrowRight size={15} className="text-slate-700" />
            <LifecycleStep number="3" label="Process" />
            <ArrowRight size={15} className="text-slate-700" />
            <LifecycleStep number="4" label="Resolve" />
          </div>
        </div>
      </section>

      {/* Request history */}
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold">Request history</h2>

            <p className="mt-1 text-sm text-slate-500">
              Track the progress and outcome of your privacy requests.
            </p>
          </div>

          <span className="hidden text-sm text-slate-500 sm:block">
            {requests.length} requests
          </span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
          <div className="hidden grid-cols-[1fr_1.4fr_1fr_1fr_120px] gap-4 border-b border-white/10 px-6 py-4 text-xs uppercase tracking-wider text-slate-600 md:grid">
            <span>Request</span>
            <span>Description</span>
            <span>Created</span>
            <span>Updated</span>
            <span>Status</span>
          </div>

          <div className="divide-y divide-white/10">
            {requests.map((request) => {
              const Icon = request.icon

              return (
                <div
                  key={request.id}
                  className="grid gap-4 px-6 py-5 transition hover:bg-white/[0.02] md:grid-cols-[1fr_1.4fr_1fr_1fr_120px] md:items-center"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5">
                      <Icon size={16} className="text-slate-400" />
                    </div>

                    <div>
                      <p className="text-sm font-medium">{request.type}</p>
                      <p className="mt-0.5 text-xs text-slate-600">
                        {request.id}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-5 text-slate-500">
                    {request.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-slate-500 md:block">
                    <span className="md:hidden">Created:</span>
                    {request.created}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500 md:block">
                    <span className="md:hidden">Updated:</span>
                    {request.updated}
                  </div>

                  <StatusBadge status={request.status} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Transparency note */}
      <section className="flex gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
          <Clock3 size={18} className="text-emerald-400" />
        </div>

        <div>
          <h2 className="font-medium">Every request has a traceable history</h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            PrivacyOS records when a request was submitted, verified,
            processed, and resolved. This creates transparency for both the
            individual and the organization.
          </p>
        </div>
      </section>
    </div>
  )
}

function LifecycleStep({
  number,
  label,
  active = false,
}: {
  number: string
  label: string
  active?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
          active
            ? 'bg-emerald-500 text-slate-950'
            : 'bg-white/5 text-slate-500'
        }`}
      >
        {number}
      </span>

      <span className={active ? 'text-slate-200' : 'text-slate-500'}>
        {label}
      </span>
    </div>
  )
}

function StatusBadge({ status }: { status: RequestStatus }) {
  const styles = {
    Completed: 'bg-emerald-500/10 text-emerald-400',
    'In Progress': 'bg-amber-500/10 text-amber-400',
    Pending: 'bg-slate-500/10 text-slate-400',
  }

  return (
    <span
      className={`w-fit rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  )
}