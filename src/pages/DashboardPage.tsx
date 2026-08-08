import {
  ArrowUpRight,
  Database,
  FileCheck2,
  ShieldAlert,
  Users,
} from 'lucide-react'

const stats = [
  {
    label: 'Personal Data Assets',
    value: '24',
    change: '+3 this month',
    icon: Database,
  },
  {
    label: 'Active Processors',
    value: '8',
    change: '2 require review',
    icon: Users,
  },
  {
    label: 'Open Privacy Risks',
    value: '7',
    change: '2 high priority',
    icon: ShieldAlert,
  },
  {
    label: 'Evidence Coverage',
    value: '87%',
    change: '+6% this month',
    icon: FileCheck2,
  },
]

const risks = [
  {
    title: 'Undefined retention period',
    description:
      'Customer location data does not have a clearly defined retention period.',
    severity: 'High',
  },
  {
    title: 'Third-party sharing needs review',
    description:
      'Analytics provider receives customer information without documented purpose mapping.',
    severity: 'Medium',
  },
  {
    title: 'Deletion workflow incomplete',
    description:
      'Automated deletion evidence is missing for one data processing activity.',
    severity: 'Medium',
  },
]

const severityStyles = {
  High: 'border-red-500/20 bg-red-500/10 text-red-400',
  Medium: 'border-amber-500/20 bg-amber-500/10 text-amber-400',
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <p className="text-sm font-medium text-emerald-400">
          Privacy Overview
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Good morning, Harish.
            </h1>

            <p className="mt-2 max-w-2xl text-slate-400">
              Here's how your organization's privacy posture looks today.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium transition hover:bg-white/10">
            View full report
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* Trust score */}
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-slate-900 to-slate-950 p-6">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  Privacy Trust Score
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight">
                    87
                  </span>

                  <span className="mb-2 text-slate-500">/100</span>
                </div>

                <p className="mt-2 text-sm text-emerald-400">
                  ↑ 6 points since last assessment
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <ShieldAlert className="text-emerald-400" size={28} />
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-xs text-slate-500">
                <span>Privacy health</span>
                <span>87%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[87%] rounded-full bg-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-slate-400">Evidence readiness</p>

          <div className="mt-5 space-y-5">
            <EvidenceRow label="Data inventory" value={100} />
            <EvidenceRow label="Consent records" value={92} />
            <EvidenceRow label="Third-party mapping" value={88} />
            <EvidenceRow label="Retention controls" value={64} />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
                  <Icon size={19} className="text-slate-300" />
                </div>

                <ArrowUpRight size={16} className="text-slate-600" />
              </div>

              <p className="mt-5 text-sm text-slate-400">{stat.label}</p>

              <p className="mt-1 text-3xl font-bold">{stat.value}</p>

              <p className="mt-2 text-xs text-slate-500">{stat.change}</p>
            </div>
          )
        })}
      </section>

      {/* Risks */}
      <section className="rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="flex flex-col justify-between gap-3 border-b border-white/10 p-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-lg font-semibold">Priority privacy risks</h2>
            <p className="mt-1 text-sm text-slate-500">
              Issues that need attention from your privacy team.
            </p>
          </div>

          <button className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
            View all risks →
          </button>
        </div>

        <div className="divide-y divide-white/10">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="flex flex-col gap-4 p-6 transition hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex gap-4">
                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />

                <div>
                  <h3 className="font-medium">{risk.title}</h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">
                    {risk.description}
                  </p>
                </div>
              </div>

              <span
                className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                  severityStyles[risk.severity as keyof typeof severityStyles]
                }`}
              >
                {risk.severity}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function EvidenceRow({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-300">{label}</span>
        <span className="text-slate-500">{value}%</span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
        <div
          className="h-full rounded-full bg-emerald-400"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}