
"use client"

import { useRouter } from "next/navigation"


const ProductList = ({params}) => {
    const router=useRouter()
    const productList=[{id:1,product:"mobile"},{id:2,product:"iPhone"},{id:3,product:"Tab"},{id:4,product:"SmartWatch"}]

  return (
    <>
    <div>Product{params.id}
    
    </div>
    <p >{productList[params.id -1].product}</p>
<button className="border px-3 py-2 m-2 bg-sky-500 text-white rounded hover:bg-sky-400 transition duration-300 " onClick={()=>router.back()}>Back</button>
    </>
  )
}

export default ProductList