import { useState } from "react"

const Cart =(props)=>{
    let {res,fn}=props
    const [data,setdata]=useState(res)
    return(<>
    <div className="max-h-[50vh] ovg">
    {data.map((val,ind)=>{
    const [count, setCount] = useState(1)

        return(<div key={ind} className="w-[23vw] h-[10vh]  shadow-2xl rounded-md overflow-hidden flex justify-between items-center relative my-1 bg-slate-100">
        <div className=" absolute bottom-[2px] left-[2px] px-2 text-sm font-medium bg-white"> {count}</div>
        <img src={val.Img} alt="" className="h-[10vh] w-[20%] "/>
        <div className=" h-[10vh] w-[50%] ">
            <div className=" h-1/2 w-full flex items-center justify-start p-1">{val.title}</div>
            <div className=" h-1/2 w-full flex items-center justify-start p-1">${val.price}</div>
        </div>
        <div className=" h-[10vh] w-[30%]  flex ">
            <div className="h-full w-1/2  flex justify-center items-center text-white bg-[#BD0826]" 
            onClick={()=>{count<=1? fn(val.id):setCount(count-1)}}
            >-</div>
            <div className="h-full w-1/2  flex justify-center items-center bg-[#08E655]" onClick={()=>{setCount(count+1)}}>+</div>
        </div>
    </div>)
    })}
    
    </div></>)
}
export default Cart