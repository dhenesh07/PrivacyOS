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
        <p className="text-sm font-medium text-[#6877ee]">
          Data Principal
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#182033]">
          Your data, explained.
        </h1>

        <p className="mt-2 max-w-2xl text-[#8992a5]">
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
      <section className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white shadow-sm">
        <div className="border-b border-[#e8ebf2] p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-[#6877ee]">
            Your data journey
          </p>

          <h2 className="mt-2 text-xl font-semibold text-[#182033]">
            Where does your data go?
          </h2>

          <p className="mt-1 text-sm text-[#8992a5]">
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
            <h2 className="text-lg font-semibold text-[#182033]">
              Personal data inventory
            </h2>

            <p className="mt-1 text-sm text-[#8992a5]">
              Select an item to understand exactly how it is being used.
            </p>
          </div>

          <span className="hidden text-sm text-[#8992a5] sm:block">
            {dataItems.length} shown
          </span>
        </div>

        <div className="space-y-3">
          {dataItems.map((item) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm transition hover:border-[#cfd3ff] hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f1ff]">
                      <Icon
                        size={19}
                        className="text-[#6877ee]"
                      />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-medium text-[#182033]">
                          {item.label}
                        </h3>

                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                            item.sensitivity === 'Sensitive'
                              ? 'bg-amber-50 text-amber-600'
                              : 'bg-[#f0f1ff] text-[#6877ee]'
                          }`}
                        >
                          {item.sensitivity}
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-[#8992a5]">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-3 lg:min-w-[600px]">
                    <InfoItem
                      label="Purpose"
                      value={item.purpose}
                    />

                    <InfoItem
                      label="Retention"
                      value={item.retention}
                    />

                    <InfoItem
                      label="Shared with"
                      value={item.sharedWith.join(', ')}
                    />
                  </div>

                  <button className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-[#e8ebf2] px-4 py-2 text-sm font-medium text-[#6877ee] transition hover:bg-[#f5f7fb]">
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
      <section className="rounded-2xl border border-[#dcdfff] bg-[#f5f3ff] p-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">

          <div>
            <p className="text-sm font-medium text-[#6877ee]">
              Your privacy rights
            </p>

            <h2 className="mt-1 text-lg font-semibold text-[#182033]">
              Want to take action on your data?
            </h2>

            <p className="mt-1 max-w-2xl text-sm text-[#8992a5]">
              You can request access, correction, or deletion of your personal
              data through PrivacyOS.
            </p>
          </div>

          <button className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#6877ee] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#7c3aed]">
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
    <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
        <Icon size={18} className="text-[#6877ee]" />
      </div>

      <p className="mt-4 text-3xl font-bold text-[#182033]">
        {value}
      </p>

      <p className="mt-1 font-medium text-[#182033]">
        {label}
      </p>

      <p className="mt-1 text-sm text-[#8992a5]">
        {description}
      </p>
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
      <p className="text-xs text-[#8992a5]">
        {label}
      </p>

      <p className="mt-1 text-sm leading-5 text-[#4f5870]">
        {value}
      </p>
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
          ? 'border-[#cfd3ff] bg-[#f0f1ff]'
          : 'border-[#e8ebf2] bg-white'
      }`}
    >
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5f7fb]">
        <Icon
          size={18}
          className={active ? 'text-[#6877ee]' : 'text-[#8992a5]'}
        />
      </div>

      <p className="mt-3 text-sm font-medium text-[#182033]">
        {title}
      </p>

      <p className="mt-1 text-xs text-[#8992a5]">
        {description}
      </p>
    </div>
  )
}

function JourneyArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="text-[10px] text-[#8992a5]">
        {label}
      </span>

      <ArrowRight
        size={18}
        className="text-[#6877ee]"
      />
    </div>
  )
}