
import banner from "../assets/banner-stack.png"
import CardTitle from "./Card-title";
const Banner = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900">
            Build Your Ideal
            <br />

            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-7 text-slate-600">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="flex gap-3 mt-8">

            <button className="btn bg-gradient-to-r from-orange-500 to-pink-500 border-none text-white">
              Explore Technologies
            </button>

            <button className="btn btn-outline px-8">
              Learn More
            </button>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
      <img
        src={banner}
        alt="Development stack"
        className="w-[350px] md:w-[420px] object-contain"
      />
    </div>

      </div>
    <CardTitle/>
    </section>

    
  );
};

export default Banner;

