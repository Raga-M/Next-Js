import Link from "next/link"


const Product = () => {
    const productList=[{id:1},{id:2},{id:3},{id:4}]
  return (
    <>
    <h3 className="text-xl text-sky-500 font-bold">Productl List</h3>
    <ul>
        {productList.map((list)=>
        <li  key={list.id} className= "text-slate-600 hover:text-sky-500"><Link href={`/product/${list.id}`}>Product{list.id}</Link></li>
        )
        }
    </ul>
    </>
  )
}

export default Product