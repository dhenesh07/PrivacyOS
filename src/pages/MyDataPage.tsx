import {
  ArrowRight,
  Building2,
  Database,
  MapPin,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from 'lucide-react'

const dataItems = [
  {
    label: 'Full Name',
    value: 'Harish Kumar',
    category: 'Identity',
    icon: User,
    purpose: 'Account identification',
    source: 'Account registration',
    retention: 'Until account deletion',
    sharedWith: ['Internal systems'],
    sensitivity: 'Standard',
  },
  {
    label: 'Email Address',
    value: 'harish@example.com',
    category: 'Contact',
    icon: Mail,
    purpose: 'Communication and account recovery',
    source: 'Account registration',
    retention: 'Until account deletion',
    sharedWith: ['Email provider'],
    sensitivity: 'Standard',
  },
  {
    label: 'Phone Number',
    value: '+91 ••••••7821',
    category: 'Contact',
    icon: Phone,
    purpose: 'Account verification',
    source: 'Profile',
    retention: 'Until account deletion',
    sharedWith: ['Verification provider'],
    sensitivity: 'Standard',
  },
  {
    label: 'Location',
    value: 'Hyderabad, India',
    category: 'Location',
    icon: MapPin,
    purpose: 'Regional service personalization',
    source: 'Device permission',
    retention: '90 days',
    sharedWith: ['Analytics provider'],
    sensitivity: 'Sensitive',
  },
]

export default function MyDataPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section>
        <p className="text-sm font-medium text-emerald-400">
          Data Principal
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Your data, explained.
        </h1>

        <p className="mt-2 max-w-2xl text-slate-400">
          PrivacyOS gives you a clear view of what personal data is being
          processed, why it is used, who receives it, and how long it is kept.
        </p>
      </section>

      {/* Privacy summary */}
      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          icon={Database}
          value="12"
          label="Data elements"
          description="Currently being processed"
        />

        <SummaryCard
          icon={Building2}
          value="4"
          label="Third parties"
          description="Receive some of your data"
        />

        <SummaryCard
          icon={ShieldCheck}
          value="87%"
          label="Visibility"
          description="Processing you can understand"
        />
      </section>

      {/* Data journey */}
      <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
        <div className="border-b border-white/10 p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-emerald-400">
            Your data journey
          </p>

          <h2 className="mt-2 text-xl font-semibold">
            Where does your data go?
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Follow your information from collection to processing and sharing.
          </p>
        </div>

        <div className="overflow-x-auto p-6">
          <div className="flex min-w-[720px] items-center justify-between gap-4">
            <JourneyNode
              icon={User}
              title="You"
              description="Data Principal"
              active
            />

            <JourneyArrow label="Provide" />

            <JourneyNode
              icon={Database}
              title="Application"
              description="Collection"
            />

            <JourneyArrow label="Process" />

            <JourneyNode
              icon={Building2}
              title="Processors"
              description="3 parties"
            />

            <JourneyArrow label="Retain" />

            <JourneyNode
              icon={ShieldCheck}
              title="Controls"
              description="Protected"
            />
          </div>
        </div>
      </section>

      {/* Data inventory */}
      <section>
        <div className="mb-4 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-semibold">Personal data inventory</h2>

            <p className="mt-1 text-sm text-slate-500">
              Select an item to understand exactly how it is being used.
            </p>
          </div>

          <span className="hidden text-sm text-slate-500 sm:block">
            {dataItems.length} shown
          </span>
        </div>

        <div className="space-y-3">
          {dataItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-emerald-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5">
                      <Icon size={19} className="text-slate-300" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium">{item.label}</h3>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            item.sensitivity === 'Sensitive'
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'bg-slate-500/10 text-slate-400'
                          }`}
                        >
                          {item.sensitivity}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[600px]">
                    <InfoItem label="Purpose" value={item.purpose} />
                    <InfoItem label="Retention" value={item.retention} />
                    <InfoItem
                      label="Shared with"
                      value={item.sharedWith.join(', ')}
                    />
                  </div>

                  <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-emerald-500/30 hover:text-white">
                    Details
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Actions */}
      <section className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <p className="text-sm font-medium text-emerald-400">
              Your privacy rights
            </p>

            <h2 className="mt-1 text-lg font-semibold">
              Want to take action on your data?
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-slate-500">
              You can request access, correction, or deletion of your personal
              data through PrivacyOS.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Manage my requests
            <ArrowRight size={16} />
          </button>
        </div>
      </section>
    </div>
  )
}

function SummaryCard({
  icon: Icon,
  value,
  label,
  description,
}: {
  icon: typeof Database
  value: string
  label: string
  description: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
        <Icon size={18} className="text-emerald-400" />
      </div>

      <p className="mt-4 text-3xl font-bold">{value}</p>

      <p className="mt-1 font-medium">{label}</p>

      <p className="mt-1 text-sm text-slate-500">{description}</p>
    </div>
  )
}

function InfoItem({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p className="text-xs text-slate-600">{label}</p>
      <p className="mt-1 text-sm leading-5 text-slate-400">{value}</p>
    </div>
  )
}

function JourneyNode({
  icon: Icon,
  title,
  description,
  active = false,
}: {
  icon: typeof User
  title: string
  description: string
  active?: boolean
}) {
  return (
    <div
      className={`min-w-[130px] rounded-2xl border p-4 text-center ${
        active
          ? 'border-emerald-500/30 bg-emerald-500/10'
          : 'border-white/10 bg-white/[0.03]'
      }`}
    >
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/5">
        <Icon
          size={18}
          className={active ? 'text-emerald-400' : 'text-slate-400'}
        />
      </div>

      <p className="mt-3 text-sm font-medium">{title}</p>
      <p className="mt-1 text-xs text-slate-500">{description}</p>
    </div>
  )
}

function JourneyArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] text-slate-600">{label}</span>
      <ArrowRight size={18} className="text-slate-600" />
    </div>
  )
}