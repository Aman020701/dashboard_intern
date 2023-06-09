import type { NextPage } from "next";
import {GiHamburgerMenu} from "react-icons/gi"

const SidePanel1: NextPage = () => {
  return (
    // <nav className="fixed top-[80.35px] left-[30.51px] w-[285.99px] h-[819.65px] text-left text-[20.34px] text-darkslateblue-200 font-miriam-libre">
    //   <div className="absolute top-[188.96px] left-[0px] rounded-[10.17px] bg-blueviolet-100 w-[285.99px] h-[55.93px]" />
    //   <div className="absolute top-[202.94px] left-[33.05px] w-[143.76px] h-[30.51px] text-white">
    //     <img
    //       className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //       alt=""
    //       src="/review.svg"
    //     />
    //     <b className="absolute top-[1.27px] left-[45.76px]">Overview</b>
    //   </div>
    //   <div className="absolute top-[272.01px] left-[33.05px] w-[160.76px] h-[30.51px]">
    //     <img
    //       className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //       alt=""
    //       src="/product.svg"
    //     />
    //     <b className="absolute top-[1.27px] left-[45.76px]">NFT Details</b>
    //   </div>
    //   <div className="absolute top-[369.88px] left-[33.05px] w-[171.76px] h-[37.17px]">
    //     <img
    //       className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //       alt=""
    //       src="/bargraph.svg"
    //     />
    //     <b className="absolute top-[10.17px] left-[45.76px]">Ad Analytics</b>
    //   </div>
    //   <div className="absolute top-[477.92px] left-[33.05px] w-[168.76px] h-[30.51px]">
    //     <img
    //       className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
    //       alt=""
    //       src="/frame-11.svg"
    //     />
    //     <b className="absolute top-[1.27px] left-[45.76px]">Connect Ads</b>
    //   </div>
    //   <div className="absolute h-[4.89%] w-[31.08%] top-[70.01%] right-[57.85%] bottom-[25.1%] left-[11.07%]">
    //     <img
    //       className="absolute h-[76.44%] w-[32.89%] top-[23.56%] right-[67.11%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
    //       alt=""
    //       src="/support1.svg"
    //     />
    //     <b className="absolute top-[0px] left-[45.76px]">Help</b>
    //   </div>
    //   <div className="absolute h-[5.09%] w-[30.74%] top-[82.27%] right-[58.19%] bottom-[12.64%] left-[11.07%]">
    //     <img
    //       className="absolute h-[73.43%] w-[33.25%] top-[26.57%] right-[66.75%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
    //       alt=""
    //       src="/info11.svg"
    //     />
    //     <b className="absolute top-[0px] left-[45.76px]">FAQs</b>
    //   </div>
    //   <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[792.65px] left-[33.49px] text-[27.96px] font-miriam-libre text-mediumblue text-left inline-block">
    //     Sign out
    //   </button>
    //   <img
    //     className="absolute h-[6.87%] w-[62.58%] top-[0%] right-[20.81%] bottom-[93.13%] left-[16.61%] max-w-full overflow-hidden max-h-full"
    //     alt=""
    //     src="/group-1121.svg"
    //   />
    //   <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[796.47px] left-[158.06px] w-[30.51px] h-[30.51px] overflow-hidden">
    //     <img
    //       className="absolute h-[75.01%] w-[75.02%] top-[12.5%] right-[12.49%] bottom-[12.49%] left-[12.49%] max-w-full overflow-hidden max-h-full"
    //       alt=""
    //       src="/vector221.svg"
    //     />
    //   </button>
    //   <img
    //     className="absolute top-[17.65px] left-[272.49px] w-[26px] h-[26px]"
    //     alt=""
    //     src="/panelarrowleft.svg"
    //   />
    // </nav>
    <nav
        className="fixed top-[0px] left-[0px] bg-white w-[347px] h-[1058.79px] overflow-hidden "
        id="side panel"
      >
        <div className="absolute top-[188.96px] left-[30.51px] rounded-[10.17px] bg-purple-600 w-[285.99px] h-[55.93px]" />
        <div className="absolute top-[202.94px] left-[63.55px] w-[143.76px] h-[30.51px]">
          <img
            className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
            alt=""
            src="/review.svg"
          />
          <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-white text-left">
            Overview
          </b>
        </div>
        <div className="absolute top-[283.36px] left-[63.55px] w-[160.76px] h-[30.51px]">
          <img
            className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
            alt=""
            src="/product.svg"
          />
          <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
            NFT Details
          </b>
        </div>
        <div className="absolute top-[361.23px] left-[63.55px] w-[171.76px] h-[37.17px]">
          <img
            className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
            alt=""
            src="/bargraph.svg"
          />
          <b className="absolute top-[10.17px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
            Ad Analytics
          </b>
        </div>
        <div className="absolute top-[455.27px] left-[63.55px] w-[168.76px] h-[30.51px]">
          <img
            className="absolute top-[0px] left-[0px] w-[30.51px] h-[30.51px]"
            alt=""
            src="/frame-1.svg"
          />
          <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
            Connect Ads
          </b>
        </div>
        <div className="absolute h-[2.88%] w-[26.73%] top-[51.42%] right-[54.95%] bottom-[34.69%] left-[18.32%]">
          <img
            className="absolute h-full w-[32.89%] top-[0%] right-[67.11%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/support.svg"
          />
          <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
            Help
          </b>
        </div>
        <div className="absolute h-[2.88%] w-[26.44%] top-[60.03%] right-[55.24%] bottom-[25.09%] left-[18.32%]">
          <img
            className="absolute h-full w-[33.25%] top-[0%] right-[66.75%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/info.svg"
          />
          <b className="absolute top-[1.27px] left-[45.76px] text-[20.34px] font-miriam-libre text-lightslategray text-left">
            FAQs
          </b>
        </div>
        <div className="absolute top-[758.38px] left-[66.1px] text-[27.96px] font-miriam-libre text-purple-600 text-left font-semibold">
          Sign out
        </div>
        <img
          className="absolute h-[5.2%] w-[53.83%] top-[7.68%] right-[23.09%] bottom-[87.12%] left-[23.08%] max-w-full overflow-hidden max-h-full "
          alt=""
          src="/group-1121.svg"
        />
        <img
          className="absolute top-[762.19px] left-[190.66px] w-[30.51px] h-[30.51px] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
        {/* <img
          className="absolute top-[30px] left-[303px] w-[26px] h-[26px]"
          alt=""
          src="/menu.svg"
        /> */}
         <GiHamburgerMenu className="absolute top-[30px] left-[303px] w-[26px] h-[26px]" color="rgb(0 0 0)"/>
      </nav>
  );
};

export default SidePanel1;
