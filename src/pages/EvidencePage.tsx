import {
  CheckCircle2,
  Clock3,
  FileCheck2,
  FileText,
  AlertCircle,
} from 'lucide-react'

const evidence = [
  {
    id: 1,
    name: 'Data Inventory',
    description:
      'Complete inventory of personal data assets and their processing purposes.',
    source: 'Privacy Database',
    coverage: 100,
    status: 'Verified',
    updated: 'Today',
  },
  {
    id: 2,
    name: 'Consent Records',
    description:
      'Records showing user consent collection and consent preferences.',
    source: 'Consent Manager',
    coverage: 92,
    status: 'Verified',
    updated: 'Today',
  },
  {
    id: 3,
    name: 'Third-Party Mapping',
    description:
      'Documentation of external processors receiving organizational data.',
    source: 'Processor Registry',
    coverage: 88,
    status: 'Verified',
    updated: 'Yesterday',
  },
  {
    id: 4,
    name: 'Retention Controls',
    description:
      'Evidence showing how long personal data is retained across systems.',
    source: 'Data Governance',
    coverage: 64,
    status: 'Needs Review',
    updated: '2 days ago',
  },
  {
    id: 5,
    name: 'Deletion Evidence',
    description:
      'Records confirming that deletion requests are completed successfully.',
    source: 'Deletion Workflow',
    coverage: 76,
    status: 'Pending',
    updated: '3 days ago',
  },
  {
    id: 6,
    name: 'Privacy Policy Coverage',
    description:
      'Evidence that documented processing activities are reflected in privacy notices.',
    source: 'Policy Repository',
    coverage: 95,
    status: 'Verified',
    updated: 'Today',
  },
]

const statusStyles = {
  Verified: 'border-[#dcdfff] bg-[#f0f1ff] text-[#6877ee]',
  Pending: 'border-amber-200 bg-amber-50 text-amber-600',
  'Needs Review': 'border-orange-200 bg-orange-50 text-orange-600',
}

export default function EvidencePage() {
  const verified = evidence.filter(
    (item) => item.status === 'Verified',
  ).length

  const pending = evidence.filter(
    (item) => item.status === 'Pending',
  ).length

  const review = evidence.filter(
    (item) => item.status === 'Needs Review',
  ).length

  const averageCoverage = Math.round(
    evidence.reduce((sum, item) => sum + item.coverage, 0) /
      evidence.length,
  )

  return (
    <div className="space-y-8">

      {/* Header */}
      <section>
        <p className="text-sm font-medium text-[#6877ee]">
          Privacy Management
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-[#182033]">
              Evidence
            </h1>

            <p className="mt-2 max-w-2xl text-[#8992a5]">
              Review the evidence supporting your organization's privacy
              controls and compliance posture.
            </p>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {/* Coverage */}
        <div className="rounded-2xl border border-[#e8ebf2] bg-white p-5 shadow-sm">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
            <FileCheck2
              size={20}
              className="text-[#6877ee]"
            />
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Evidence Coverage
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {averageCoverage}%
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Across tracked controls
          </p>
        </div>

        {/* Verified */}
        <div className="rounded-2xl border border-[#e3e5ff] bg-white p-5 shadow-sm">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
            <CheckCircle2
              size={20}
              className="text-[#6877ee]"
            />
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Verified
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {verified}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Evidence items verified
          </p>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
            <Clock3
              size={20}
              className="text-amber-500"
            />
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Pending
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {pending}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Awaiting validation
          </p>
        </div>

        {/* Needs Review */}
        <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
            <AlertCircle
              size={20}
              className="text-orange-500"
            />
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Needs Review
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {review}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Requires attention
          </p>
        </div>

      </section>

      {/* Evidence table */}
      <section className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white shadow-sm">

        <div className="border-b border-[#e8ebf2] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
              <FileText
                size={20}
                className="text-[#6877ee]"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-[#182033]">
                Evidence repository
              </h2>

              <p className="mt-1 text-sm text-[#8992a5]">
                Dummy evidence data for the current PrivacyOS assessment.
              </p>
            </div>

          </div>
        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>
              <tr className="border-b border-[#e8ebf2] text-left text-xs uppercase tracking-wider text-[#a1a8b8]">

                <th className="px-6 py-4 font-medium">
                  Evidence
                </th>

                <th className="px-6 py-4 font-medium">
                  Source
                </th>

                <th className="px-6 py-4 font-medium">
                  Coverage
                </th>

                <th className="px-6 py-4 font-medium">
                  Status
                </th>

                <th className="px-6 py-4 font-medium">
                  Updated
                </th>

              </tr>
            </thead>

            <tbody className="divide-y divide-[#e8ebf2]">

              {evidence.map((item) => (
                <tr
                  key={item.id}
                  className="transition hover:bg-[#fafbfe]"
                >

                  {/* Evidence */}
                  <td className="px-6 py-5">

                    <div className="flex gap-3">

                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f0f1ff]">
                        <FileCheck2
                          size={16}
                          className="text-[#6877ee]"
                        />
                      </div>

                      <div>
                        <p className="font-medium text-[#182033]">
                          {item.name}
                        </p>

                        <p className="mt-1 max-w-xl text-sm leading-5 text-[#8992a5]">
                          {item.description}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Source */}
                  <td className="px-6 py-5 text-sm text-[#8992a5]">
                    {item.source}
                  </td>

                  {/* Coverage */}
                  <td className="px-6 py-5">

                    <div className="w-36">

                      <div className="mb-2 flex justify-between text-xs">

                        <span className="text-[#a1a8b8]">
                          Coverage
                        </span>

                        <span className="text-[#4f5870]">
                          {item.coverage}%
                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-[#eef0f5]">

                        <div
                          className={`h-full rounded-full ${
                            item.coverage >= 90
                              ? 'bg-[#6877ee]'
                              : item.coverage >= 75
                                ? 'bg-amber-400'
                                : 'bg-orange-400'
                          }`}
                          style={{
                            width: `${item.coverage}%`,
                          }}
                        />

                      </div>

                    </div>

                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        statusStyles[
                          item.status as keyof typeof statusStyles
                        ]
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* Updated */}
                  <td className="px-6 py-5 text-sm text-[#8992a5]">
                    {item.updated}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>

    </div>
  )
}