import WhatWeDo from "./WhatWeDo";
import WhoWeAre from "./WhoWeAre";
import WhyWeDo from "./WhyWeDo";

function AboutContainer() {
  return (
    <div className="w-full mb-15">
      <div className="w-[80%] mx-auto">
        <h1 className="text-[30px] text-center uppercase text-black my-10 font-bold">
          Về Hardmode®
        </h1>
        <div className="flex flex-col items-center justify-center mb-5">
          <span className="text-[24px] text-black font-semibold">HARDMODE</span>
          <span className="text-[20px] text-black font-bold">
            Everyday Urban Streetwear
          </span>
        </div>
        <div className="flex flex-col gap-10">
          <WhoWeAre />
          <WhatWeDo />
          <WhyWeDo />
        </div>
      </div>
    </div>
  );
}

export default AboutContainer;
