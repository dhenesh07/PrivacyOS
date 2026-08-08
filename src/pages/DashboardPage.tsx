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
  High: 'border-red-200 bg-red-50 text-red-600',
  Medium: 'border-amber-200 bg-amber-50 text-amber-600',
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <section>
        <p className="text-sm font-medium text-[#6877ee]">
          Privacy Overview
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#182033]">
              Good morning, Harish.
            </h1>

            <p className="mt-2 max-w-2xl text-[#8992a5]">
              Here's how your organization's privacy posture looks today.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8ebf2] bg-white px-4 py-2.5 text-sm font-medium text-[#6877ee] shadow-sm transition hover:bg-[#f5f7fb]">
            View full report
            <ArrowUpRight size={16} />
          </button>
        </div>
      </section>

      {/* Trust score + Evidence */}
      <section className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">

        {/* Trust Score */}
        <div className="relative overflow-hidden rounded-2xl border border-[#e8ebf2] bg-gradient-to-br from-[#eef0ff] via-[#ffffff] to-[#f5f3ff] p-6 shadow-sm">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#8b5cf6]/10 blur-3xl" />

          <div className="relative">
            <div className="flex items-start justify-between">

              <div>
                <p className="text-sm text-[#8992a5]">
                  Privacy Trust Score
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-6xl font-bold tracking-tight text-[#182033]">
                    87
                  </span>

                  <span className="mb-2 text-[#8992a5]">
                    /100
                  </span>
                </div>

                <p className="mt-2 text-sm font-medium text-[#6877ee]">
                  ↑ 6 points since last assessment
                </p>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/10">
                <ShieldAlert
                  className="text-[#6877ee]"
                  size={28}
                />
              </div>

            </div>

            <div className="mt-8">
              <div className="mb-2 flex justify-between text-xs text-[#8992a5]">
                <span>Privacy health</span>
                <span>87%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#e8ebf2]">
                <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-[#6877ee] to-[#9b6cff]" />
              </div>
            </div>
          </div>
        </div>

        {/* Evidence Readiness */}
        <div className="rounded-2xl border border-[#e8ebf2] bg-white p-6 shadow-sm">
          <p className="text-sm font-medium text-[#8992a5]">
            Evidence readiness
          </p>

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
              className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
                  <Icon
                    size={19}
                    className="text-[#6877ee]"
                  />
                </div>

                <ArrowUpRight
                  size={16}
                  className="text-[#8992a5]"
                />
              </div>

              <p className="mt-5 text-sm text-[#8992a5]">
                {stat.label}
              </p>

              <p className="mt-1 text-3xl font-bold text-[#182033]">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-[#8992a5]">
                {stat.change}
              </p>
            </div>
          )
        })}
      </section>

      {/* Risks */}
      <section className="rounded-2xl border border-[#e8ebf2] bg-white shadow-sm">

        <div className="flex flex-col justify-between gap-3 border-b border-[#e8ebf2] p-6 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-lg font-semibold text-[#182033]">
              Priority privacy risks
            </h2>

            <p className="mt-1 text-sm text-[#8992a5]">
              Issues that need attention from your privacy team.
            </p>
          </div>

          <button className="text-sm font-medium text-[#6877ee] hover:text-[#7c3aed]">
            View all risks →
          </button>

        </div>

        <div className="divide-y divide-[#e8ebf2]">
          {risks.map((risk) => (
            <div
              key={risk.title}
              className="flex flex-col gap-4 p-6 transition hover:bg-[#fafaff] sm:flex-row sm:items-center sm:justify-between"
            >

              <div className="flex gap-4">

                <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-red-400" />

                <div>
                  <h3 className="font-medium text-[#182033]">
                    {risk.title}
                  </h3>

                  <p className="mt-1 max-w-2xl text-sm leading-6 text-[#8992a5]">
                    {risk.description}
                  </p>
                </div>

              </div>

              <span
                className={`w-fit rounded-full border px-3 py-1 text-xs font-medium ${
                  severityStyles[
                    risk.severity as keyof typeof severityStyles
                  ]
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
        <span className="text-[#8992a5]">
          {label}
        </span>

        <span className="font-medium text-[#6877ee]">
          {value}%
        </span>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full bg-[#e8ebf2]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#6877ee] to-[#9b6cff]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}