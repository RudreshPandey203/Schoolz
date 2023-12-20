import Link from "next/link"
export default function Home() {
  return (
    <main className="flex flex-col text-center justify-center">
      hello
      <Link className='p-32 w-48 text-center outline bg-red-400' href='/student/'>Student Dashboard</Link>
      <Link className='p-32 w-48 text-center outline bg-green-400' href='/teacher'>Teacher Form</Link>
    </main>
  )
}
