

const Child =(props)=>{
let {data} = props



    return(
        <>
        <div className="flex-wrap flex">
            {data.map((val,ind)=>{
                console.log(ind,val)
                return(
                    <article key={ind} className=" w-1/4 border p-1">
                        <img src={val.image} alt="" className="w-full h-[40vh] object-cover bg-center"/>
                        <p>{val.title}</p>
                        <h1>{val.price}</h1>
                    </article>
                )
            })}
        </div>
        </>
    )
}
export default Child