import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-3xl font-bold">Home</h1>

      <Link
        to="/nazifa1"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg"
      >
        Profile Nazifa
      </Link>

      <Link
        to="/abdullah"
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Profile Abdullah
      </Link>
      <Link
        to="/ikhsan"
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Profile Ikhsan
      </Link>
    </div>
  )
}