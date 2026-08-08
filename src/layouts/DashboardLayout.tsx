import { Outlet, NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  UserRound,
  GitBranch,
  ShieldCheck,
  FileText,
  AlertTriangle,
  BadgeCheck,
} from 'lucide-react'

const navigation = [
  {
    name: 'Overview',
    path: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'My Data',
    path: '/dashboard/my-data',
    icon: UserRound,
  },
  {
    name: 'Data Flow',
    path: '/dashboard/data-flow',
    icon: GitBranch,
  },
  {
    name: 'Consent',
    path: '/dashboard/consent',
    icon: ShieldCheck,
  },
  {
    name: 'Requests',
    path: '/dashboard/requests',
    icon: FileText,
  },
  {
    name: 'Risks',
    path: '/dashboard/risks',
    icon: AlertTriangle,
  },
  {
    name: 'Evidence',
    path: '/dashboard/evidence',
    icon: BadgeCheck,
  },
]

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#182033]">
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside className="flex w-64 flex-col border-r border-[#e8ebf2] bg-white">

          {/* Logo */}
          <div className="border-b border-[#e8ebf2] px-5 py-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#6877ee] to-[#9b6cff] text-lg font-bold text-white shadow-sm">
                P
              </div>

              <div>
                <h1 className="font-semibold text-[#182033]">
                  PrivacyOS
                </h1>

                <p className="text-xs text-[#8992a5]">
                  Understand. Control. Prove.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-3 py-5">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-[#eef0ff] text-[#6877ee]'
                        : 'text-[#7b8497] hover:bg-[#f5f7fb] hover:text-[#6877ee]'
                    }`
                  }
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </NavLink>
              )
            })}
          </nav>

          {/* Privacy Score */}
          <div className="border-t border-[#e8ebf2] p-4">
            <div className="rounded-xl bg-[#f5f7fb] p-4">
              <p className="text-xs text-[#8992a5]">
                Privacy Trust Score
              </p>

              <p className="mt-1 text-2xl font-semibold text-[#6877ee]">
                87
                <span className="text-sm text-[#8992a5]">
                  /100
                </span>
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">

          {/* Header */}
          <header className="flex h-[75px] items-center justify-between border-b border-[#e8ebf2] bg-white/90 px-6 backdrop-blur">
            <div>
              <p className="text-sm font-medium text-[#182033]">
                Privacy Dashboard
              </p>

              <p className="mt-1 text-xs text-[#8992a5]">
                Your personal data, clearly understood.
              </p>
            </div>

            {/* User */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eef0ff] text-sm font-semibold text-[#6877ee]">
              H
            </div>
          </header>

          {/* Page */}
          <div className="p-6 lg:p-8">
            <Outlet />
          </div>

        </main>
      </div>
    </div>
  )
}