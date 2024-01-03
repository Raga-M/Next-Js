"use client"
import { useRouter } from "next/navigation";

import Card from "../../component/Card";

export default  function Login() { 
  const router=useRouter()

const handleSubmit=(e)=>{
e.preventDefault();
router.push("/dashboard")
}
  return (
<>
<h1 className="text-4xl p-6 text-center font-bold text-sky-500">Log In</h1>
<div className="flex justify-center">
<Card>
  <form className="grid  gap-6" onSubmit={()=>{handleSubmit(event)}}>
<label htmlFor="name" className="flex flex-col">
 <span className="text-slate-700">Name</span>
  <input type="text" id="name" className=" border border-slate-500 focus:outline-none  focus:border-sky-500 px-3 py-1 rounded placeholder:text-slate-400 "  placeholder="Enter your Name" required/>
</label>
<label htmlFor="password" className="flex flex-col">
 <span className="text-slate-700"> Password</span>
  <input type="password" id="password" className="border border-slate-500 focus:outline-none focus:border-sky-500  px-3 py-1 rounded placeholder:text-slate-400"  placeholder="Enter your Password" required/>

</label>
<button className="bg-sky-600 text-white rounded-md inline p-2">Login</button>
</form>
</Card>
</div>
</>
  )
}

