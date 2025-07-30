

const Card =(props)=>{
let {catagory, data} = props



    return(
        <>
        <h1 className="p-2 text-lg font-bold">{catagory}</h1>
        <div className="w-full flex">
            {data.map((val,ind)=>{
                console.log(ind,val)
                return(
                    <article key={ind} className="flex-1 border p-1">
                        <img src={val.Img} alt="" className="w-full h-[40vh] object-cover bg-center"/>
                        <p>{val.title}</p>
                        <h1>{val.price} onwards</h1>
                        <h2>Free Delivery</h2>
                        <h3>{val.rating}*</h3>
                    </article>
                )
            })}
        </div>
        </>
    )
}
export default Card