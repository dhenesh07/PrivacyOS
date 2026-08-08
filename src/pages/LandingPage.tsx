import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
          PrivacyOS
        </p>

        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          Understand.
          <br />
          Control.
          <br />
          <span className="text-emerald-400">Prove.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          An intelligent privacy platform helping people understand their
          personal data and organizations demonstrate responsible data
          processing.
        </p>

        <Link
          to="/dashboard"
          className="mt-8 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Explore PrivacyOS
        </Link>
      </div>
    </main>
  )
}