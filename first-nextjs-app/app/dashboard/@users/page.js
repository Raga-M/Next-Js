import Card from "@/app/component/Card"
import Link from "next/link"
function Users() {
    return (

      <Card>User List 
        <Link href="/dashboard/newuser" className="border border-sky-500 bg-sky-500 rounded-md text-white p-3 m-3">New user</Link>

      </Card>
    )
  }
  
  export default Users