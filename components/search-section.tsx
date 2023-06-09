import type { NextPage } from "next";

const SearchSection: NextPage = () => {
  return (
    <input
      className="[border:none] font-miriam-libre text-xl bg-[transparent] absolute top-[52px] left-[684px] w-[717px] h-16"
      type="text"
      placeholder="Search items, collections, and accounts"
    />
  );
};

export default SearchSection;
