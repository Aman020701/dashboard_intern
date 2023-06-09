import type { NextPage } from "next";
import { useCallback } from "react";
import  {useRouter}  from "next/router";
import SidePanel1 from "../components/side-panel1";
import PenguinSection1 from "../components/penguin-section1";
import CompaniesSection1 from "../components/companies-section1";

const WhiteMode: NextPage = () => {
  const router = useRouter();

  const onDarkModeButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-aliceblue-100 w-full h-[2198px] overflow-hidden text-left text-[39.96px] text-gray-2000 font-miriam-libre">
      <b className="absolute top-[216px] left-[437px] font-abandoned">
        Good Morning, Sud
      </b>
      <div className="absolute top-[654.34px] left-[454.48px] font-extrabold font-abandoned">
        <span>Your NFT</span>
        <span className="text-[32.47px]">s</span>
      </div>
      <div className="absolute top-[1230.06px] left-[454.48px] font-extrabold font-abandoned">
        Companies in discussion
      </div>
      <div className="absolute top-[297.17px] left-[437px] w-[1331.11px] h-[287.23px] text-[34.57px] text-white">
        <img
          className="absolute top-[0px] left-[0px] rounded-[31.91px] w-[1331.11px] h-[287.23px] object-cover"
          alt=""
          src="/rectangle-128@2x.png"
        />
        <img
          className="absolute top-[127.66px] left-[37.23px] rounded-[9.31px] w-[57.18px] h-[57.18px] object-cover"
          alt=""
          src="/rectangle-1401@2x.png"
        />
        <div className="absolute top-[207.45px] left-[39.89px] w-[144.95px] h-[25.27px] flex flex-row items-end justify-start gap-[2.66px]">
          <b className="relative [-webkit-text-stroke:0.4px_#fff]">Adguin</b>
          <img
            className="relative w-[21.28px] h-[21.28px]"
            alt=""
            src="/vector11.svg"
          />
        </div>
        <b className="absolute top-[248.67px] left-[39.89px] text-[15.96px]">
          By Adguin Pro
        </b>
        <div className="absolute top-[232.71px] left-[1171.54px] w-[132.98px] h-[34.57px] text-[21.28px]">
          <div className="absolute top-[0px] left-[0px] rounded-[7.98px] [background:linear-gradient(98.29deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.15))] [backdrop-filter:blur(2.66px)] w-[132.98px] h-[34.57px]" />
          <b className="absolute top-[2.66px] left-[34.57px]">Minting</b>
          <div className="absolute top-[7.98px] left-[7.98px] rounded-[50%] [background:linear-gradient(#c9a2f8,_#c9a2f8),_#7808ff] w-[18.62px] h-[18.62px]" />
          <div className="absolute top-[11.97px] left-[11.97px] rounded-[50%] [background:linear-gradient(#b67aff,_#b67aff),_#7808ff] w-[10.64px] h-[10.64px]" />
          <div className="absolute top-[14.63px] left-[14.63px] rounded-[50%] [background:linear-gradient(#7808ff,_#7808ff),_#7808ff] w-[5.32px] h-[5.32px]" />
        </div>
      </div>
      <div className="absolute top-[656.65px] left-[1674.93px] w-[88.01px] h-[30.35px] text-[16.18px]">
        <div className="absolute top-[0px] left-[0px] rounded-8xs bg-plum-300 [backdrop-filter:blur(124.88px)] w-[88.01px] h-[30.35px] opacity-[0.15]" />
        <b className="absolute top-[5.06px] left-[10.12px]">View all</b>
      </div>
      <PenguinSection1/>
      <CompaniesSection1/>
      <input
        className="[border:none] font-miriam-libre text-xl bg-[transparent] absolute top-[52px] left-[684px] w-[717px] h-16"
        type="text"
        placeholder="Search items, collections, and accounts"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-49px] left-[1782px] w-[50px] h-[238px] overflow-hidden"
        onClick={onDarkModeButtonClick}
      >
        <img
          className="absolute top-[49px] left-[3.08px] w-[43.98px] h-[150px]"
          alt=""
          src="/light1.svg"
        />
        <img
          className="absolute top-[-152.27px] left-[4.55px] w-[41.05px] h-[150px]"
          alt=""
          src="/dark1.svg"
        />
      </button>
      <img
        className="absolute top-[54px] left-[1441px] w-[233px] h-[60px]"
        alt=""
        src="/profile-section1.svg"
      />
      <SidePanel1/>
    </div>
  );
};

export default WhiteMode;
