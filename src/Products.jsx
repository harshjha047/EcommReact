import { useState } from "react";

const Products = (props) => {
  let { data } = props;

  let [arr, setArr] = useState([]);
  let [tog, setTog] = useState(true);
  let [show, setShow] = useState(false);

  const remove = (id) => {
    setArr(() => arr.filter((e) => e.id !== id));
  };

  return (
    <>
      {show ? (
        <div className=" fixed w-1/4 h-[10vh] text-lg  rounded-xl flex justify-center items-center font-semibold bottom-4 left-4 z-40 bg-green-400 text-white">
          Added to Cart
        </div>
      ) : (
        <div className="absolute hidden"></div>
      )}
      <div className="flex flex-wrap">
        {data.map((val) => {
          return (
            <div
              key={val.id}
              onClick={() => {
                setArr([...arr, val]);
                setShow(true);
                setTimeout(() => {
                  setShow(false);
                }, 1000);
              }}
              className="w-[25%] h-[70vh] p-3"
            >
              <div className="shadow-md w-full h-full rounded-[35px] overflow-hidden transition duration-300 ease-in-out  hover:scale-[1.01] hover:shadow-2xl atc">
                <img
                  src={val.Img}
                  className="h-2/3 w-full object-cover relative -z-10"
                  alt=""
                />
                <div className="h-1/3 w-full p-5 shadow-rap relative">
                  <div className=" absolute h-full w-full top-0 left-0 cursor-pointer bg-[#08DF57] flex justify-center items-center atcc">
                    <h2 className="font-semibold text-2xl h text-[#fffff9] cursor-pointer">
                      Add to Cart
                    </h2>
                  </div>
                  <h2 className="font-semibold text-2xl ">{val.title}</h2>
                  <div className="">{val.rating} ★</div>
                  <h3 className="font-semibold text-2xl text-blue-500">
                    ${val.price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" fixed bottom-10 right-10 flex items-end flex-col z-50 ">
        <div
          onClick={() => {
            setTog(!tog);
          }}
          className="h-[10vh] w-[10vh] rounded-3xl relative bg-slate-300 cursor-pointer flex justify-center items-center font-semibold text-sm"
        >
          <div className=" absolute top-0 left-0 bg-[#08DF57] px-2 rounded-lg">
            {arr.length}
          </div>
          {tog ? "Cart" : "Close"}
        </div>
        {/* {tog?"":<Cart res={arr} fn={remove}/>} */}
        {tog ? (
          ""
        ) : (
          <>
            <div className="max-h-[50vh] ovg">
              {arr.map((val, ind) => {
                let count = "1";

                return (
                  <div
                    key={ind}
                    className="w-[23vw] h-[10vh]  shadow-2xl rounded-md overflow-hidden flex justify-between items-center relative my-1 bg-slate-100"
                  >
                    <div className=" absolute bottom-[2px] left-[2px] px-2 text-sm font-medium bg-white">
                      {"1"}
                    </div>
                    <img src={val.Img} alt="" className="h-[10vh] w-[20%] " />
                    <div className=" h-[10vh] w-[50%] ">
                      <div className=" h-1/2 w-full flex items-center justify-start p-1">
                        {val.title}
                      </div>
                      <div className=" h-1/2 w-full flex items-center justify-start p-1">
                        ${val.price}
                      </div>
                    </div>
                    <div className=" h-[10vh] w-[30%]  flex ">
                      <div
                        className="h-full w-1/2  flex justify-center items-center cursor-pointer text-white bg-[#BD0826]"
                        onClick={() => {
                          remove(val.id);
                        }}
                      >
                        -
                      </div>
                      <div
                        className="h-full w-1/2  flex justify-center items-center cursor-pointer bg-[#08E655]"
                        onClick={() => setArr([...arr, val])}
                      >
                        +
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Products;
