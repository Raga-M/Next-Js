import Link from "next/link"
import Card from "@/app/component/Card"

function NewUser() {
    return (
        <>
      <Card>
        New Users List

      <Link href="/dashboard" className="border border-sky-500 bg-sky-500 rounded-md text-white p-3 m-3">Back to user</Link>
      </Card>

      </>
    )
  }
  
  export default NewUser