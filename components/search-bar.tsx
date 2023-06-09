import type { NextPage } from "next";

const SearchBar: NextPage = () => {
  return (
    <input
      className="[border:none] font-miriam-libre text-xl bg-[transparent] absolute top-[52px] left-[684px] w-[721px] h-16 flex flex-col items-start justify-between hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] text-whitesmoke"
      type="text"
      placeholder="Search items, collections, and accounts"
    />
  );
};

export default SearchBar;
