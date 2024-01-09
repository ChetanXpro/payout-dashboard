// components/Sidebar.tsx

import React from "react";
import {
  AnalyticsIcon,
  AppearanceIcon,
  ArrowDownIcon,
  AudienceIcon,
  DeliveryIcon,
  DiscountsIcon,
  HomeIcon,
  MarketingIcon,
  OrdersIcon,
  PayoutsIcon,
  PluginsIcon,
  ProductsIcon,
  ToolsIcon,
  WalletIcon,
} from "../../assets/Icons/Icons";

interface SidebarProps {
  onButtonClick: (component: string) => void;
  selectedComponent: string;
}

const SideBarItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Orders",
    icon: <OrdersIcon />,
    link: "/orders",
    children: [
      {
        name: "All Orders (301)",
        link: "/orders/all",
      },
      {
        name: "Returns (2)",
        link: "/orders/returns",
      },
      {
        name: "Abandoned (122)",
        link: "/orders/abondoned",
      },
    ],
    totalNotifications: 3,
  },

  {
    name: "Products",
    icon: <ProductsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Delivery",
    icon: <DeliveryIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Marketing",
    icon: <MarketingIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Analytics",
    icon: <AnalyticsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Payments",
    icon: <PayoutsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Tools",
    icon: <ToolsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Discouts",
    icon: <DiscountsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Audience",
    icon: <AudienceIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
  {
    name: "Appearance",
    icon: <AppearanceIcon />,
    link: "/",
    totalNotifications: 0,
    children: [],
  },
  {
    name: "Plugins",
    icon: <PluginsIcon />,
    link: "/",
    children: [],
    totalNotifications: 0,
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  onButtonClick,
  selectedComponent,
}) => {
  return (
    <aside className="w-56 pb-4 px-1 flex flex-col justify-between bg-[#1E2640] text-white">
      <div className=" py-3 px-2 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-base">
            <img
              src="/Navbar/image@2x.png"
              className="w-[40px] rounded-lg h-[44px]"
              alt=""
            />
            <div>
              <p className="font-medium">Nishyan</p>
              <a href="#" className="underline text-gray-300 text-[13px]">
                Visit store
              </a>
            </div>
          </div>
          <div className="cursor-pointer">
            <ArrowDownIcon />
          </div>
        </div>
      </div>
      {/* Sidebar content goes here */}
      <div className="py-5 px-1  h-full">
        <ul className="flex flex-col text-[14px] gap-1">
          {SideBarItems.map((item, index) => (
            <div>
              <li
                key={index}
                style={{
                  borderRadius: "4px",
                }}
                className={`flex ${
                  item?.children?.length !== 0 ? "flex-col " : "flex"
                }  ${
                  selectedComponent === item.name
                    ? "bg-[#FFFFFF1A] text-white"
                    : "text-gray-300"
                } items-center hover:bg-[#FFFFFF1A]   p-2 px-3 
               gap-2 cursor-pointer `}
                onClick={() => onButtonClick(item.name)}
              >
                <div className="flex items-center  w-full gap-3">
                  {item.totalNotifications === 0 ? (
                    <div className="flex items-center w-ful gap-3">
                      {item.icon}
                      <a href="#" className={`text-sm`}>
                        {item.name}
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center w-ful gap-3">
                        {item.icon}
                        <a href="#" className={`text-sm`}>
                          {item.name}
                        </a>
                      </div>
                      <p className="text-xs text-white bg-[#EE741F] flex items-center justify-center  rounded-full w-7 h-6">
                        {item.totalNotifications}
                      </p>
                    </div>
                  )}
                </div>
              </li>
              {item?.children?.length !== 0 &&
                (selectedComponent === item.name ||
                  item.children.some((i) => i.name === selectedComponent)) && (
                  <ul className="flex flex-col items-center   ml-8 ">
                    <div>
                      {item?.children?.map((child, index) => (
                        <li
                          key={index}
                          className={`flex items-center text-[13px]  hover:bg-[#FFFFFF1A] rounded-md p-2 px-3 
                                 cursor-pointer`}
                          onClick={() => onButtonClick(child.name)}
                        >
                          <a href="#" className="text-sm">
                            {child.name}
                          </a>
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
            </div>
          ))}
        </ul>
      </div>
      <div
        style={{
          borderRadius: "4px",
        }}
        className="flex cursor-pointer  gap-3 py-[6px] px-3 mx-2 bg-[#353C53]  items-center "
      >
        <div
          style={{
            borderRadius: "4px",
          }}
          className="bg-[#FFFFFF1A] p-2 "
        >
          <WalletIcon />
        </div>
        <div className="">
          <p className="text-sm text-gray-400">Availabe credits</p>
          <p className="text-base font-normal">222.10</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
