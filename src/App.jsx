import Products from "./Products.jsx";
import products from './source.js'
import { useState } from "react";

const App = () => {
  let [product, setProduct]=useState(products.utils)
  let mensProducts=products.utils.filter((e)=> e.category=='mens')
  let womensProducts=products.utils.filter((e)=> e.category=='womens')
  let watchProducts=products.utils.filter((e)=> e.category=='watch')
  let kidsProducts=products.utils.filter((e)=> e.category=='kids')
  let shoesProducts=products.utils.filter((e)=> e.category=='shoes')

  return (
    <>
    <div className="h-[15vh] w-full flex justify-center items-center"></div>
    <div className="h-[15vh] w-full flex justify-center items-center fixed z-50 top-0">
      <div className="w-[70%] max-sm:w-[98vw] h-[70%] border flex justify-evenly rounded-3xl bg-[#cbd5e146]">
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(products.utils)}} >Home</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(mensProducts)}} >Mens</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(womensProducts)}} >Womens</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(watchProducts)}} >Watchs</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(kidsProducts)}} >Kids</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct(shoesProducts)}} >Shoes</button>
        <button className=" text-shadow font-bold text-sm" onClick={()=>{setProduct([])}} >Clear</button>
        </div></div>
    

      
        <Products data={product} />
      
    </>
  );
};
export default App;
