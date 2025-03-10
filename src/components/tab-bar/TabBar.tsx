"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v6 } from "uuid";

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  tabOptions = [1, 2, 3, 4],
  currentTab = 1,
}: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", String(tab));
    router.refresh();
  };

  return (
    <div
      className={`grid w-full grid-cols-${tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}
    >
      {tabOptions.map((tab) => {
        return (
          <div key={v6()}>
            <input
              checked={selected === tab}
              onChange={() => {}}
              type="radio"
              id={String(tab)}
              className="peer hidden"
            />
            <label
              onClick={() => onTabSelected(tab)}
              className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            >
              {tab}
            </label>
          </div>
        );
      })}
    </div>
  );
};
