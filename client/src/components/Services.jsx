/* eslint-disable max-len */
import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";
import logo1 from "../assets/headphone.jpeg";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start  p-3 m-2 cursor-pointer hover:shadow-xl text-justify">
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-xl">{title}</h3>
      <p className="text-justify mt-1 text-white text-sm md:w-11/12">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services = () => (
  <div className="flex w-full justify-center items-center bg-gray-100">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start mx-1 sm:mx-10">
        <h1 className="text-black text-3xl sm:text-5xl py-2 ">
          Items To Recycle To Save Our Planet
          <br /> <br />
        </h1>
        <p className="text-left my-2 text-black font-light md:w-11/12 w-11/12 text-2xl text-justify">
          Disposable waste is bad for the environment, plain and simple. Most of the products we purchase come with packaging and materials that end up in landfills, or worse (like the stomachs of wildlife or our water sources). Sometimes the over-reliance on recycling encourages people to live less sustainably. Even though the main purpose of a recycling program is to reduce or eliminate waste.
        </p>
        <br />
        <p className="text-left my-2 text-black font-light md:w-11/12 w-11/12 text-2xl text-justify">
          Despite this problem, there are still many environmental benefits of recycling. CleanRiver recycling solutions has over 30 years of experience helping our clients improve their recycling habits. Sometimes it’s as simple as teaching people which items are recyclable
        </p>
        <br />
        <div className="md:flex-[0.8] flex-initial justify-left items-center">

          <img src={logo1} alt="welcome" className="w-100 cursor-pointer" />
        </div>

      </div>

      <div className="flex-1 flex flex-col justify-start items-center text-2xl">
        <ServiceCard
          color="bg-[#2952E3]"
          title="1. Plastics"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="While so many plastic products are disposable, plastic lasts forever in the environment. It was the plastics industry that offered recycling as a solution."
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="2. Paper"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Paper waste isn’t necessarily as bad for the environment as plastic, but the benefits of recycling paper are worth the effort. Books, newspapers, and even glossy magazines can be recycled."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="3. Glass"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="If you didn’t already know this, glass is made from sand. Now that may seem redundant but the world is actually running out of sand. The whole point of recycling recycling is to help the environment and reduce resource consumption. So what better way to save sand than to conserve it via glass recycling? It’s also one of the easier materials to recycle! Don’t throw out those empty beer bottles."
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="4. Metals"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle=" The good news is most metals can be recycled together as recycling plants will sort them for you. Some local businesses can recycle scrap metal for you as well if needed. "
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="5. Batteries"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Technically batteries can be considered e-waste, and metal waste. The difference is batteries don’t go in the recycling bin OR the garbage bin. That doesn’t mean batteries can’t be recycled though. The chemicals that can leak out of them are extremely harmful to the planet, and can contaminate other waste that would otherwise be recyclable. Therefore they need to be recycled separately from all other forms of waste."
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="6. Clothing"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Textile recycling is less common than one would hope, which is unfortunate for the environment because they take several hundred years to break down. "
        />
        <ServiceCard
          color="bg-[#2952E3]"
          title="7. Organic Materials"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Organic waste is actually good for the planet and rarely harms it. That being said, the environmental benefits of recycling biodegradable waste (like food) in a specific container is worthwhile. Making compost is simple, all it requires is an organic waste bin and time. Then that compost can be used for planting, gardening, and more! "
        />

      </div>
    </div>
  </div>
);

export default Services;
