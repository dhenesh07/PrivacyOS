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
  { name: 'Overview', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Data', path: '/dashboard/my-data', icon: UserRound },
  { name: 'Data Flow', path: '/dashboard/data-flow', icon: GitBranch },
  { name: 'Consent', path: '/dashboard/consent', icon: ShieldCheck },
  { name: 'Requests', path: '/dashboard/requests', icon: FileText },
  { name: 'Risks', path: '/dashboard/risks', icon: AlertTriangle },
  { name: 'Evidence', path: '/dashboard/evidence', icon: BadgeCheck },
]

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-64 border-r border-white/10 bg-slate-950 md:flex md:flex-col">
          <div className="border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-slate-950">
                P
              </div>

              <div>
                <h1 className="font-semibold">PrivacyOS</h1>
                <p className="text-xs text-slate-400">
                  Understand. Control. Prove.
                </p>
              </div>
            </div>
          </div>

          <nav className="flex-1 space-y-1 px-3 py-5">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/dashboard'}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                      isActive
                        ? 'bg-emerald-500/10 text-emerald-400'
                        : 'text-slate-400 hover:bg-white/5 hover:text-white'
                    }`
                  }
                >
                  <Icon size={18} />
                  {item.name}
                </NavLink>
              )
            })}
          </nav>

          <div className="border-t border-white/10 p-4">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-xs text-slate-400">Privacy Trust Score</p>
              <p className="mt-1 text-2xl font-semibold text-emerald-400">
                87
                <span className="text-sm text-slate-500">/100</span>
              </p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 flex-1">
          <header className="flex h-16 items-center justify-between border-b border-white/10 px-6">
            <div>
              <p className="text-sm text-slate-400">PrivacyOS</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/10 text-sm font-semibold text-emerald-400">
                H
              </div>
            </div>
          </header>

          <div className="p-6 lg:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}