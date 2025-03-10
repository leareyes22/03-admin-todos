import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
} from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";
import { v6 } from "uuid";

const menuItems = [
  {
    icon: <IoCalendarOutline size={30} />,
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: <IoCheckboxOutline size={30} />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline size={30} />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <IoCodeWorkingOutline size={30} />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoBasketOutline size={30} />,
    title: "Productos",
    path: "/dashboard/products",
  },
];

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4 flex items-center justify-center">
          <Link href="/dashboard" title="home">
            <Image
              src="https://static-00.iconduck.com/assets.00/nextjs-icon-1024x1024-5et230l7.png"
              alt="tailus logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src="https://img.freepik.com/vector-premium/diseno-avatar-persona_24877-38131.jpg"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            width={150}
            height={150}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            Leandro N. Reyes
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.length
            ? menuItems.map((item) => <SidebarItem key={v6()} {...item} />)
            : null}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
};
