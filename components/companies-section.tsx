import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

const CompaniesSection: NextPage = () => {
  const router = useRouter();

  const onMoreVerticalUndefinedGlClick = useCallback(() => {
    router.push("/companies-info");
  }, [router]);

  return (
    <div className="absolute top-[1384.42px] left-[463.23px] w-[1151.43px] h-[362.16px] text-left text-[27.47px] text-darkgray-200 font-miriam-libre">
      <img
        className="absolute top-[0px] left-[54.95px] rounded-[16.23px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-158@2x.png"
      />
      <img
        className="absolute top-[274.74px] left-[54.95px] rounded-[8.74px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-159@2x.png"
      />
      <img
        className="absolute top-[137.37px] left-[734.32px] rounded-[8.74px] w-[87.42px] h-[87.42px] object-cover"
        alt=""
        src="/rectangle-160@2x.png"
      />
      <div className="absolute top-[137.37px] left-[54.95px] w-[87.42px] h-[87.42px]">
        <div className="absolute top-[0px] left-[0px] rounded-[8.74px] bg-white w-[87.42px] h-[87.42px]" />
        <img
          className="absolute top-[11.24px] left-[11.24px] w-[64.94px] h-[64.94px] object-cover"
          alt=""
          src="/rectangle-1632@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[734.32px] w-[87.42px] h-[87.42px]">
        <div className="absolute top-[0px] left-[0px] rounded-[8.74px] bg-white w-[87.42px] h-[87.42px]" />
        <img
          className="absolute top-[7.77px] left-[7.77px] w-[71.88px] h-[71.88px] object-cover"
          alt=""
          src="/rectangle-1631@2x.png"
        />
      </div>
      <img
        className="absolute top-[174.84px] left-[629.42px] rounded-[8.74px] w-[287.23px] h-[287.23px] object-cover"
        alt=""
        src="/rectangle-161@2x.png"
      />
      <b className="absolute top-[23.73px] left-[0px]">1</b>
      <b className="absolute top-[23.73px] left-[688.11px]">4</b>
      <b className="absolute top-[162.35px] left-[0px]">2</b>
      <b className="absolute top-[162.35px] left-[688.11px]">5</b>
      <b className="absolute top-[300.97px] left-[0px]">3</b>
      <b className="absolute top-[300.97px] left-[688.11px]">6</b>
      <div className="absolute top-[31.22px] left-[192.32px] w-[186.08px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[163.6px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector16.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">The North...</b>
      </div>
      <div className="absolute top-[29.97px] left-[871.69px] w-[154.86px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[132.38px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector17.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Domino’s</b>
      </div>
      <div className="absolute top-[167.34px] left-[192.32px] w-[102.4px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[79.93px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector18.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Beats</b>
      </div>
      <div className="absolute top-[167.34px] left-[871.69px] w-[108.65px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[86.17px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector19.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Dyson</b>
      </div>
      <div className="absolute top-[307.21px] left-[192.32px] w-[176.09px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[153.61px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector20.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">McDonalds</b>
      </div>
      <div className="absolute top-[305.97px] left-[871.69px] w-[147.36px] h-[22.5px] text-white">
        <img
          className="absolute top-[0px] left-[124.88px] w-[22.48px] h-[22.48px]"
          alt=""
          src="/vector21.svg"
        />
        <b className="absolute top-[2.5px] left-[0px]">Pepsi Co.</b>
      </div>
      <img
        className="absolute top-[28.72px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden cursor-pointer"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
        onClick={onMoreVerticalUndefinedGlClick}
      />
      <img
        className="absolute top-[28.72px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
      />
      <img
        className="absolute top-[164.85px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
      />
      <img
        className="absolute top-[164.85px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
      />
      <img
        className="absolute top-[300.97px] left-[442.09px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
      />
      <img
        className="absolute top-[300.97px] left-[1121.46px] w-[29.97px] h-[29.97px] overflow-hidden"
        alt=""
        src="/more-vertical--undefined--glyph-undefined.svg"
      />
    </div>
  );
};

export default CompaniesSection;
