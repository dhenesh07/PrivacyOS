import {
  Bell,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Eye,
  Mail,
  ShieldCheck,
  Smartphone,
  XCircle,
} from 'lucide-react'

type ConsentItem = {
  title: string
  description: string
  purpose: string
  provider: string
  updated: string
  status: 'Granted' | 'Withdrawn'
  icon: typeof Mail
}

const consents: ConsentItem[] = [
  {
    title: 'Service communications',
    description: 'Receive important account and service notifications.',
    purpose: 'Account management',
    provider: 'PrivacyOS',
    updated: '2 days ago',
    status: 'Granted',
    icon: Mail,
  },
  {
    title: 'Product analytics',
    description: 'Allow usage data to improve product experience.',
    purpose: 'Product improvement',
    provider: 'Analytics Provider',
    updated: '12 days ago',
    status: 'Granted',
    icon: Eye,
  },
  {
    title: 'Location personalization',
    description: 'Use approximate location to personalize regional content.',
    purpose: 'Personalization',
    provider: 'PrivacyOS',
    updated: '1 month ago',
    status: 'Granted',
    icon: Smartphone,
  },
  {
    title: 'Promotional notifications',
    description: 'Receive optional product updates and offers.',
    purpose: 'Marketing',
    provider: 'PrivacyOS',
    updated: '3 months ago',
    status: 'Withdrawn',
    icon: Bell,
  },
]

export default function ConsentPage() {
  const grantedCount = consents.filter(
    (item) => item.status === 'Granted',
  ).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <p className="text-sm font-medium text-emerald-400">
          Privacy Controls
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Consent, made understandable.
        </h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          See what you've agreed to, why it exists, and withdraw optional
          permissions whenever you choose.
        </p>
      </section>

      {/* Consent health */}
      <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr]">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-slate-400">Consent health</p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-bold">92</span>
                <span className="mb-1 text-slate-500">/100</span>
              </div>

              <p className="mt-2 text-sm text-emerald-400">
                Your choices are clearly recorded.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
              <ShieldCheck className="text-emerald-400" size={22} />
            </div>
          </div>
        </div>

        <SummaryCard
          icon={CheckCircle2}
          value={String(grantedCount)}
          label="Active consents"
        />

        <SummaryCard
          icon={XCircle}
          value={String(consents.length - grantedCount)}
          label="Withdrawn"
        />
      </section>

      {/* Notice */}
      <section className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5">
          <Clock3 size={18} className="text-slate-400" />
        </div>

        <div>
          <h2 className="text-sm font-semibold">
            Every consent decision is recorded
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            PrivacyOS maintains a traceable history of consent decisions so
            both people and organizations can understand what happened and
            when.
          </p>
        </div>
      </section>

      {/* Consent list */}
      <section>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Your consent choices</h2>

          <p className="mt-1 text-sm text-slate-500">
            Review each purpose separately instead of accepting one blanket
            permission.
          </p>
        </div>

        <div className="space-y-3">
          {consents.map((item) => (
            <ConsentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

function ConsentCard({ item }: { item: ConsentItem }) {
  const Icon = item.icon
  const granted = item.status === 'Granted'

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-white/20">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
            granted ? 'bg-emerald-500/10' : 'bg-white/5'
          }`}
        >
          <Icon
            size={19}
            className={granted ? 'text-emerald-400' : 'text-slate-500'}
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-medium">{item.title}</h3>

            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                granted
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-slate-500/10 text-slate-400'
              }`}
            >
              {item.status}
            </span>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            {item.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[480px]">
          <Info label="Purpose" value={item.purpose} />
          <Info label="Provider" value={item.provider} />
          <Info label="Last updated" value={item.updated} />
        </div>

        <button
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            granted
              ? 'border border-white/10 text-slate-300 hover:bg-white/5'
              : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
          }`}
        >
          {granted ? 'Manage' : 'Review'}
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}

function SummaryCard({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof CheckCircle2
  value: string
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Icon size={19} className="text-slate-400" />

      <p className="mt-5 text-3xl font-bold">{value}</p>

      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  )
}

function Info({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p className="text-xs text-slate-600">{label}</p>
      <p className="mt-1 text-sm text-slate-400">{value}</p>
    </div>
  )
}