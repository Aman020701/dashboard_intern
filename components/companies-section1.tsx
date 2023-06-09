import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CompaniesSection1: NextPage = () => {
  const router = useRouter();

  const onMoreVerticalUndefinedGlClick = useCallback(() => {
    router.push("/companies-info1");
  }, [router]);

  return (
    <div className="absolute top-[1323.72px] left-[463.23px] w-[1151.43px] h-[423.36px] text-left text-[27.47px] text-dimgray-700 font-miriam-libre">
      <img
        className="absolute top-[61.19px] left-[54.95px] rounded-[16.23px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-1581@2x.png"
      />
      <img
        className="absolute top-[335.94px] left-[54.95px] rounded-[8.74px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-1591@2x.png"
      />
      <img
        className="absolute top-[198.57px] left-[734.32px] rounded-[8.74px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-1601@2x.png"
      />
      <div className="absolute top-[198.57px] left-[54.95px] w-[87.42px] h-[87.42px]">
        <div className="absolute top-[0px] left-[0px] rounded-[8.74px] bg-white shadow-[-4.995357513427734px_0px_99.91px_rgba(0,_0,_0,_0.15)] box-border w-[87.42px] h-[87.42px] border-[1.2px] border-solid border-thistle-500" />
        <img
          className="absolute top-[11.24px] left-[11.24px] w-[64.94px] h-[64.94px] object-cover"
          alt=""
          src="/rectangle-1632@2x.png"
        />
      </div>
      <div className="absolute top-[61.19px] left-[734.32px] w-[87.42px] h-[87.42px]">
        <div className="absolute top-[-0.62px] left-[-0.62px] rounded-[8.74px] bg-white shadow-[-4.995357513427734px_0px_99.91px_rgba(0,_0,_0,_0.15)] box-border w-[88.67px] h-[88.67px] border-[1.2px] border-solid border-thistle-500" />
        <img
          className="absolute top-[7.77px] left-[7.77px] w-[71.88px] h-[71.88px] object-cover"
          alt=""
          src="/rectangle-1633@2x.png"
        />
      </div>
      <img
        className="absolute top-[236.03px] left-[629.42px] rounded-[8.74px] w-[287.23px] h-[287.23px] object-cover"
        alt=""
        src="/rectangle-1611@2x.png"
      />
      <b className="absolute top-[0px] left-[0px] text-[17.48px]">COMPANIES</b>
      <b className="absolute top-[0px] left-[688.11px] text-[17.48px]">
        COMPANIES
      </b>
      <b className="absolute top-[84.92px] left-[0px]">1</b>
      <b className="absolute top-[84.92px] left-[688.11px]">4</b>
      <b className="absolute top-[223.54px] left-[0px]">2</b>
      <b className="absolute top-[223.54px] left-[688.11px]">5</b>
      <b className="absolute top-[362.16px] left-[0px]">3</b>
      <b className="absolute top-[362.16px] left-[688.11px]">6</b>
      <div className="absolute top-[92.41px] left-[192.32px] w-[186.08px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[163.6px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector16.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">The North...</b>
      </div>
      <div className="absolute top-[91.17px] left-[871.69px] w-[154.86px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[132.38px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector17.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Domino’s</b>
      </div>
      <div className="absolute top-[228.54px] left-[192.32px] w-[102.4px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[79.93px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector18.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Beats</b>
      </div>
      <div className="absolute top-[228.54px] left-[871.69px] w-[108.65px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[86.17px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector19.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Dyson</b>
      </div>
      <div className="absolute top-[368.41px] left-[192.32px] w-[176.09px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[153.61px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector20.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">McDonalds</b>
      </div>
      <div className="absolute top-[367.16px] left-[871.69px] w-[147.36px] h-[22.5px] text-black">
        <img
          className="absolute top-[0px] left-[124.88px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector21.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Pepsi Co.</b>
      </div>
      <img
        className="absolute top-[89.92px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden cursor-pointer"
        alt=""
        src="/more-vertical--undefined--glyph-undefined6.svg"
        onClick={onMoreVerticalUndefinedGlClick}
      />
      <img
        className="absolute top-[89.92px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined7.svg"
      />
      <img
        className="absolute top-[226.04px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined8.svg"
      />
      <img
        className="absolute top-[226.04px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined9.svg"
      />
      <img
        className="absolute top-[362.16px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined10.svg"
      />
      <img
        className="absolute top-[362.16px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined11.svg"
      />
    </div>
  );
};

export default CompaniesSection1;
