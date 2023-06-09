import type { NextPage } from "next";
import { useState } from "react";


const SidePanel: NextPage = () => {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Overview", src:"review.svg" },
    { title: "NFT Details", src:"product.svg"},
    { title: "Ad Analytics", src:"bargraph.svg"},
    { title: "Connect Ads", src:"frame-1.svg"},
    { title: "Help", src:"support.svg" },
    { title: "FAQs", src:"info.svg" },
  ];
   const renderMenuItems = Menus.map((item) => (
    <li
      key={item.title}
      className={`text-gray-300 text-xl flex items-center gap-x-4 cursor-pointer hover:bg-[#8F3EEC] rounded-md mt-12 font-semibold justify-start p-4 `}
    >
      <img src={`/${item.src}`} alt={item.title} />
      <span
        className={`${!open ? "hidden" : "block"} text-white`}
      >
        {item.title}
      </span>
    </li>
  ));
  return (
     <div className="flex">
      <div
        className={`${
          open ? "w-64" : "w-20"
        } h-screen bg-[#191523] fixed p-5 pt-8 duration-300`}
      >
        <img
          src="/group-47479.svg"
          alt="control"
          className={`absolute cursor-pointer  right-3 top-7 w-7 `}
          onClick={() => setOpen((prevState) => !prevState)}
        />
        <div className="flex gap-x-4 items-center mt-24 justify-center">
          <img
            src={` ${open ? '/group-112.svg' : '/group-112 - Copy.svg'}`}
            alt="logo"
            className={`cursor-pointer`}
          />
        </div>
        <ul className="p-0 ml-3">{renderMenuItems}</ul>
        {open && (
           <div className="flex items-center justify-start gap-2 w-full px-7 cursor-pointer">
           <p className="text-[1.75rem] text-blue inline-block">Sign out</p>
             <img
             className=""
             alt=""
             src="/frame.svg"
           />
           </div>
        )}     
      </div>
      <div className="p-7 text-2xl font-semibold flex-1 h-screen">
      </div>
    </div>
    // <nav
    //     className="fixed top-[0px] left-[0px] bg-gray-300 w-[347px] h-[1058.79px] overflow-hidden "
    //     id="side panel"
    //   >
    //     <div className="absolute top-[188.96px] left-[30.51px] rounded-[10.17px] bg-purple-600 w-[285.99px] h-[55.93px]" />
    //     <div className="absolute top-[202.94px] left-[63.55px] w-[143.76px] h-[30.51px]">
    //       <img
    //         className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //         alt=""
    //         src="/review.svg"
    //       />
    //       <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-white text-left">
    //         Overview
    //       </b>
    //     </div>
    //     <div className="absolute top-[283.36px] left-[63.55px] w-[160.76px] h-[30.51px]">
    //       <img
    //         className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //         alt=""
    //         src="/product.svg"
    //       />
    //       <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
    //         NFT Details
    //       </b>
    //     </div>
    //     <div className="absolute top-[361.23px] left-[63.55px] w-[171.76px] h-[37.17px]">
    //       <img
    //         className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //         alt=""
    //         src="/bargraph.svg"
    //       />
    //       <b className="absolute top-[10.17px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
    //         Ad Analytics
    //       </b>
    //     </div>
    //     <div className="absolute top-[455.27px] left-[63.55px] w-[168.76px] h-[30.51px]">
    //       <img
    //         className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //         alt=""
    //         src="/frame-1.svg"
    //       />
    //       <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
    //         Connect Ads
    //       </b>
    //     </div>
    //     <div className="absolute h-[2.88%] w-[26.73%] top-[51.42%] right-[54.95%] bottom-[34.69%] left-[18.32%]">
    //       <img
    //         className="absolute h-full w-[32.89%] top-[0%] right-[67.11%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
    //         alt=""
    //         src="/support.svg"
    //       />
    //       <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
    //         Help
    //       </b>
    //     </div>
    //     <div className="absolute h-[2.88%] w-[26.44%] top-[60.03%] right-[55.24%] bottom-[25.09%] left-[18.32%]">
    //       <img
    //         className="absolute h-full w-[33.25%] top-[0%] right-[66.75%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
    //         alt=""
    //         src="/info.svg"
    //       />
    //       <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
    //         FAQs
    //       </b>
    //     </div>
        // <div className="absolute top-[758.38px] left-[66.1px] text-[27.96px] font-miriam-libre text-blue text-left">
        //   Sign out
        // </div>
        // <img
        //   className="absolute h-[5.2%] w-[53.83%] top-[7.68%] right-[23.09%] bottom-[87.12%] left-[23.08%] max-w-full overflow-hidden max-h-full"
        //   alt=""
        //   src="/group-112.svg"
        // />
    //     <img
    //       className="absolute top-[762.19px] left-[190.66px] w-[30.51px] h-[30.51px] overflow-hidden"
    //       alt=""
    //       src="/frame.svg"
    //     />
    //     <GiHamburgerMenu className="absolute top-[30px] left-[303px] w-[26px] h-[26px]" color="rgb(255 255 255)"/>
    //   </nav>
  );
};

export default SidePanel;
