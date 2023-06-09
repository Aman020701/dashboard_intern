import type { NextPage } from "next";
import { useCallback } from "react";
import PenguinSection from "../components/penguin-section";
import AdguinImage from "../components/adguin-image";
import CompaniesSection from "../components/companies-section";
import SearchBar from "../components/search-bar";
import  {useRouter}  from "next/router";
import ProfileSectionIcon from "../components/profile-section-icon";
import SidePanel from "../components/side-panel";

const MacBookPro1631: NextPage = () => {
  const router = useRouter();

  const onDarkModeButtonClick = useCallback(() => {
    router.push("/white-mode");
  }, [router]);

  return (
    <div className="relative bg-gray-400 w-full h-[2198px] overflow-hidden text-left text-[39.96px] text-white font-miriam-libre">
      <div className="absolute top-[218px] left-[437px] font-bold font-abandoned">
        Good Morning, Sud
      </div>
      <div className="absolute top-[652.6px] left-[454.48px] font-extrabold font-abandoned">
        <span>Your NFT</span>
        <span className="text-[32.47px]">s</span>
      </div>
      <div className="absolute top-[656.16px] left-[1674.93px] w-[88.01px] h-[30.35px] text-[16.18px]">
        <div className="absolute top-[0px] left-[0px] rounded-[4.05px] bg-thistle-400 [backdrop-filter:blur(101.16px)] w-[88.01px] h-[30.35px] opacity-[0.15]" />
        <b className="absolute top-[5.06px] left-[10.12px]">View all</b>
      </div>
      <PenguinSection />
      <div
        className="absolute top-[295.43px] left-[437px] w-[1350px] h-[269.75px] text-[32.47px]"
        id="main image"
      >
        <AdguinImage />
        <img
          className="absolute top-[119.89px] left-[37.76px] rounded-[8.74px] w-[57.99px] h-[53.7px] object-cover"
          alt=""
          src="/rectangle-140@2x.png"
        />
        <div className="absolute top-[194.82px] left-[40.46px] w-[147px] h-[23.73px] flex flex-row items-end justify-start gap-[2.5px]">
          <b className="relative [-webkit-text-stroke:0.4px_#fff]">Adguin</b>
          <img
            className="relative w-[19.98px] h-[19.98px]"
            alt=""
            src="/vector4.svg"
          />
        </div>
        <b className="absolute top-[233.53px] left-[40.46px] text-[14.99px] inline-block w-[147.93px]">
          By Adguin Pro
        </b>
        <div className="absolute top-[218.55px] left-[1188.16px] w-[134.87px] h-[32.47px] text-[19.98px]">
          <div className="absolute top-[0px] left-[0px] rounded-[7.49px] [background:linear-gradient(98.29deg,_rgba(0,_0,_0,_0.45),_rgba(0,_0,_0,_0.15))] [backdrop-filter:blur(2.5px)] w-[134.87px] h-[32.47px]" />
          <b className="absolute top-[2.5px] left-[35.06px] flex items-center w-[87.47px]">
            Minting
          </b>
          <div className="absolute top-[7.49px] left-[8.09px] rounded-[50%] [background:linear-gradient(#c9a2f8,_#c9a2f8),_#7808ff] w-[18.88px] h-[17.48px]" />
          <div className="absolute top-[11.24px] left-[12.14px] rounded-[50%] [background:linear-gradient(#b67aff,_#b67aff),_#7808ff] w-[10.79px] h-[9.99px]" />
          <div className="absolute top-[13.74px] left-[14.83px] rounded-[50%] [background:linear-gradient(#7808ff,_#7808ff),_#7808ff] w-[5.39px] h-[5px]" />
        </div>
      </div>
      <div className="absolute top-[1229.56px] left-[454.48px] font-extrabold font-abandoned">
        Companies in discussion
      </div>
      <b className="absolute top-[1323.22px] left-[463.23px] text-[17.48px] text-darkgray-200">
        COMPANIES
      </b>
      <b className="absolute top-[1323.22px] left-[1151.34px] text-[17.48px] text-darkgray-200">
        COMPANIES
      </b>
      <CompaniesSection />
      <SearchBar />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-33px] left-[1782px] w-[50px] h-[160.23px] overflow-hidden"
        onClick={onDarkModeButtonClick}
      >
        <img
          className="absolute top-[166.82px] left-[4.55px] w-[41.05px] h-[150px]"
          alt=""
          src="/light2.svg"
        />
        <img
          className="absolute top-[33px] left-[3.08px] w-[43.98px] h-[150px]"
          alt=""
          src="/dark.svg"
        />
      </button>
      <ProfileSectionIcon />
      <SidePanel />
    </div>
  );
};

export default MacBookPro1631;
