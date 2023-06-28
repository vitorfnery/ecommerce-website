import { Link } from "react-router-dom";
import ManImg from "~assets/man_hero.png";

const Hero = () => {
  return (
    <section
      className="
                h-[800px] bg-hero 
                bg-no-repeat bg-cover bg-center py-24
                "
    >
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <span>New Trend</span>
          </div>
          <div className="text-[70px] leading-[1.1] font-light mb-4">
            <h1>AUTUMN SALE</h1>
            <p>BE</p>
            <div className="font-semibold">YOURSELF</div>
          </div>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </Link>
        </div>

        <div className="hidden lg:block">
          <img className="-mt-[45%]" src={ManImg} alt="Man" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
