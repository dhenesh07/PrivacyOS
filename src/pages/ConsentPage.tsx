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
    description:
      'Use approximate location to personalize regional content.',
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
        <p className="text-sm font-medium text-[#6877ee]">
          Privacy Controls
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#182033]">
          Consent, made understandable.
        </h1>

        <p className="mt-2 max-w-2xl text-[#8992a5]">
          See what you've agreed to, why it exists, and withdraw optional
          permissions whenever you choose.
        </p>
      </section>

      {/* Consent health */}
      <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr_1fr]">

        <div className="rounded-2xl border border-[#dcdfff] bg-[#f5f3ff] p-6">
          <div className="flex items-start justify-between">

            <div>
              <p className="text-sm text-[#8992a5]">
                Consent health
              </p>

              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-bold text-[#182033]">
                  92
                </span>

                <span className="mb-1 text-[#8992a5]">
                  /100
                </span>
              </div>

              <p className="mt-2 text-sm text-[#6877ee]">
                Your choices are clearly recorded.
              </p>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <ShieldCheck
                className="text-[#6877ee]"
                size={22}
              />
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
      <section className="flex gap-4 rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm">

        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#f0f1ff]">
          <Clock3
            size={18}
            className="text-[#6877ee]"
          />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#182033]">
            Every consent decision is recorded
          </h2>

          <p className="mt-1 text-sm leading-6 text-[#8992a5]">
            PrivacyOS maintains a traceable history of consent decisions so
            both people and organizations can understand what happened and
            when.
          </p>
        </div>

      </section>

      {/* Consent list */}
      <section>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-[#182033]">
            Your consent choices
          </h2>

          <p className="mt-1 text-sm text-[#8992a5]">
            Review each purpose separately instead of accepting one blanket
            permission.
          </p>
        </div>

        <div className="space-y-3">
          {consents.map((item) => (
            <ConsentCard
              key={item.title}
              item={item}
            />
          ))}
        </div>

      </section>
    </div>
  )
}

function ConsentCard({
  item,
}: {
  item: ConsentItem
}) {
  const Icon = item.icon
  const granted = item.status === 'Granted'

  return (
    <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm transition hover:border-[#cfd3ff] hover:shadow-md">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

        {/* Icon + title */}
        <div className="flex min-w-0 flex-1 items-start gap-4">

          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
              granted
                ? 'bg-[#f0f1ff]'
                : 'bg-[#f5f7fb]'
            }`}
          >
            <Icon
              size={19}
              className={
                granted
                  ? 'text-[#6877ee]'
                  : 'text-[#8992a5]'
              }
            />
          </div>

          <div className="min-w-0">

            <div className="flex flex-wrap items-center gap-2">

              <h3 className="font-medium text-[#182033]">
                {item.title}
              </h3>

              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                  granted
                    ? 'bg-[#f0f1ff] text-[#6877ee]'
                    : 'bg-[#f5f7fb] text-[#8992a5]'
                }`}
              >
                {item.status}
              </span>

            </div>

            <p className="mt-1 text-sm text-[#8992a5]">
              {item.description}
            </p>

          </div>
        </div>

        {/* Information */}
        <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[480px]">

          <Info
            label="Purpose"
            value={item.purpose}
          />

          <Info
            label="Provider"
            value={item.provider}
          />

          <Info
            label="Last updated"
            value={item.updated}
          />

        </div>

        {/* Action */}
        <button
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition ${
            granted
              ? 'border border-[#e8ebf2] text-[#6877ee] hover:bg-[#f5f7fb]'
              : 'bg-[#6877ee] text-white hover:bg-[#7c3aed]'
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
    <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm">

      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
        <Icon
          size={19}
          className="text-[#6877ee]"
        />
      </div>

      <p className="mt-5 text-3xl font-bold text-[#182033]">
        {value}
      </p>

      <p className="mt-1 text-sm text-[#8992a5]">
        {label}
      </p>

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
      <p className="text-xs text-[#8992a5]">
        {label}
      </p>

      <p className="mt-1 text-sm text-[#4f5870]">
        {value}
      </p>
    </div>
  )
}