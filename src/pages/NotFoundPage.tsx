import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="mt-3 text-slate-400">Page not found.</p>

        <Link
          to="/"
          className="mt-6 inline-block text-emerald-400 hover:text-emerald-300"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}