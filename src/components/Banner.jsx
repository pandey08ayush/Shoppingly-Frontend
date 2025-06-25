import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className="relative">
      {/* Big Screen */}
      <img
        src={assets.herosection}
        alt=""
        className="hidden md:block w-full"
      />
      {/* Small Screen */}
      <img
        src={assets.herosection_sm}
        alt=""
        className="md:hidden w-full max-h-[400px]"
      />
      <div className="absolute inset-0 flex flex-col md:items-start justify-end md:justify-center pb-10 font-bold 
        md:pb-0 md:pl-18 lg:pl-24 pl-10 
      ">
        {/* <h1 className="text-4xl md:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 leading-tight lg:leading-15"> */}
        <h1 className="max-md:hidden font-bold text-4xl max-lg:text-3xl max-md:text-2xl text-[#4B0082]" >
          Freshness You Can Trust, <br />Savings You will Love!
        </h1>

        <div className="flex items-center mt-6 font-medium gap-6 ">
          <Link
            to={"/products"}
            className="flex group items-center gap-2 px-7 rounded text-white  py-3 bg-primary"
          >
            Shop Now
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
          <Link
            to={"/products"}
            className="hidden md:flex group items-center gap-2 px-7 rounded text-white  py-3 bg-primary"
          >
            Explore Deals
            <img
              src={assets.white_arrow_icon}
              alt="arrow"
              className="md:hidden transition group-focus:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Banner;
