import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ShieldAlert,
} from 'lucide-react'

const risks = [
  {
    id: 1,
    title: 'Undefined retention period',
    description:
      'Customer location data does not have a clearly defined retention period.',
    category: 'Data Governance',
    severity: 'High',
    status: 'Open',
    affectedAssets: 6,
  },
  {
    id: 2,
    title: 'Third-party sharing needs review',
    description:
      'Analytics provider receives customer information without documented purpose mapping.',
    category: 'Third-Party Risk',
    severity: 'Medium',
    status: 'Under Review',
    affectedAssets: 4,
  },
  {
    id: 3,
    title: 'Deletion workflow incomplete',
    description:
      'Automated deletion evidence is missing for one data processing activity.',
    category: 'Data Lifecycle',
    severity: 'Medium',
    status: 'Open',
    affectedAssets: 3,
  },
  {
    id: 4,
    title: 'Excessive data collection',
    description:
      'Some user profile fields are collected without a clearly documented business purpose.',
    category: 'Data Minimization',
    severity: 'Low',
    status: 'Monitoring',
    affectedAssets: 2,
  },
  {
    id: 5,
    title: 'Consent record mismatch',
    description:
      'A small number of consent records do not match the latest consent configuration.',
    category: 'Consent',
    severity: 'Medium',
    status: 'Under Review',
    affectedAssets: 5,
  },
  {
    id: 6,
    title: 'Privacy policy coverage gap',
    description:
      'One recently added processing activity is not yet reflected in the privacy policy.',
    category: 'Compliance',
    severity: 'Low',
    status: 'Resolved',
    affectedAssets: 1,
  },
]

const severityStyles = {
  High: 'border-red-200 bg-red-50 text-red-600',
  Medium: 'border-amber-200 bg-amber-50 text-amber-600',
  Low: 'border-[#dcdfff] bg-[#f0f1ff] text-[#6877ee]',
}

const statusStyles = {
  Open: 'text-red-500',
  'Under Review': 'text-amber-500',
  Monitoring: 'text-blue-500',
  Resolved: 'text-[#6877ee]',
}

export default function RisksPage() {
  const highRisks = risks.filter(
    (risk) => risk.severity === 'High',
  ).length

  const mediumRisks = risks.filter(
    (risk) => risk.severity === 'Medium',
  ).length

  const lowRisks = risks.filter(
    (risk) => risk.severity === 'Low',
  ).length

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
              Risk Management
            </h1>

            <p className="mt-2 max-w-2xl text-[#8992a5]">
              Identify, monitor, and manage privacy risks across your
              organization.
            </p>
          </div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="grid gap-4 sm:grid-cols-3">

        {/* High */}
        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
              <ShieldAlert
                size={20}
                className="text-red-500"
              />
            </div>

            <span className="text-xs text-[#a1a8b8]">
              Priority
            </span>
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            High Risk
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {highRisks}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Requires immediate attention
          </p>
        </div>

        {/* Medium */}
        <div className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50">
              <AlertTriangle
                size={20}
                className="text-amber-500"
              />
            </div>

            <span className="text-xs text-[#a1a8b8]">
              Monitoring
            </span>
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Medium Risk
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {mediumRisks}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Review recommended
          </p>
        </div>

        {/* Low */}
        <div className="rounded-2xl border border-[#e3e5ff] bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f1ff]">
              <CheckCircle2
                size={20}
                className="text-[#6877ee]"
              />
            </div>

            <span className="text-xs text-[#a1a8b8]">
              Low Priority
            </span>
          </div>

          <p className="mt-5 text-sm text-[#8992a5]">
            Low Risk
          </p>

          <p className="mt-1 text-3xl font-bold text-[#182033]">
            {lowRisks}
          </p>

          <p className="mt-2 text-xs text-[#a1a8b8]">
            Currently monitored
          </p>
        </div>

      </section>

      {/* Risk table */}
      <section className="overflow-hidden rounded-2xl border border-[#e8ebf2] bg-white shadow-sm">

        <div className="border-b border-[#e8ebf2] p-6">
          <h2 className="text-lg font-semibold text-[#182033]">
            Identified privacy risks
          </h2>

          <p className="mt-1 text-sm text-[#8992a5]">
            Dummy risk data for the current PrivacyOS assessment.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="border-b border-[#e8ebf2] text-left text-xs uppercase tracking-wider text-[#a1a8b8]">
                <th className="px-6 py-4 font-medium">
                  Risk
                </th>

                <th className="px-6 py-4 font-medium">
                  Category
                </th>

                <th className="px-6 py-4 font-medium">
                  Severity
                </th>

                <th className="px-6 py-4 font-medium">
                  Assets
                </th>

                <th className="px-6 py-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#e8ebf2]">

              {risks.map((risk) => (
                <tr
                  key={risk.id}
                  className="transition hover:bg-[#fafbfe]"
                >

                  {/* Risk */}
                  <td className="px-6 py-5">

                    <div className="flex gap-3">

                      <div className="mt-1">
                        <AlertTriangle
                          size={17}
                          className={
                            risk.severity === 'High'
                              ? 'text-red-500'
                              : risk.severity === 'Medium'
                                ? 'text-amber-500'
                                : 'text-[#6877ee]'
                          }
                        />
                      </div>

                      <div>
                        <p className="font-medium text-[#182033]">
                          {risk.title}
                        </p>

                        <p className="mt-1 max-w-xl text-sm leading-5 text-[#8992a5]">
                          {risk.description}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5 text-sm text-[#8992a5]">
                    {risk.category}
                  </td>

                  {/* Severity */}
                  <td className="px-6 py-5">

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        severityStyles[
                          risk.severity as keyof typeof severityStyles
                        ]
                      }`}
                    >
                      {risk.severity}
                    </span>

                  </td>

                  {/* Assets */}
                  <td className="px-6 py-5 text-sm text-[#8992a5]">
                    {risk.affectedAssets}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">

                    <div
                      className={`flex items-center gap-2 text-sm ${
                        statusStyles[
                          risk.status as keyof typeof statusStyles
                        ]
                      }`}
                    >
                      {risk.status === 'Resolved' ? (
                        <CheckCircle2 size={15} />
                      ) : risk.status === 'Under Review' ? (
                        <Clock3 size={15} />
                      ) : (
                        <AlertTriangle size={15} />
                      )}

                      {risk.status}
                    </div>

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