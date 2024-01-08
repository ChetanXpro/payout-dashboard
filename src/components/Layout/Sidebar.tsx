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
  },
  {
    name: "Products",
    icon: <HomeIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Products",
    icon: <ProductsIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Delivery",
    icon: <DeliveryIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Marketing",
    icon: <MarketingIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Analytics",
    icon: <AnalyticsIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Payouts",
    icon: <PayoutsIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Tools",
    icon: <ToolsIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Discouts",
    icon: <DiscountsIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Audience",
    icon: <AudienceIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Appearance",
    icon: <AppearanceIcon />,
    link: "/",
    children: [],
  },
  {
    name: "Plugins",
    icon: <PluginsIcon />,
    link: "/",
    children: [],
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  onButtonClick,
  selectedComponent,
}) => {
  return (
    <aside className="w-64 px-4 flex flex-col justify-between bg-[#1E2640] text-white">
      <div className=" py-3 ">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 text-base">
            <img src="/Navbar/Image.png" alt="" />
            <div>
              <p className="font-medium">Nisham</p>
              <a href="#" className="underline text-gray-400 text-sm">
                Visit store
              </a>
            </div>
          </div>
          <ArrowDownIcon />
        </div>
      </div>
      {/* Sidebar content goes here */}
      <div className="py-5 px-1  h-full">
        <ul className="flex flex-col gap-1">
          {SideBarItems.map((item, index) => (
            <div>
              <li
                key={index}
                className={`flex ${
                  item?.children?.length !== 0 ? "flex-col " : "flex"
                }   items-center hover:bg-[#FFFFFF1A] rounded-md p-2 px-3 
               gap-2 cursor-pointer `}
                onClick={() => onButtonClick(item.name)}
              >
                <div className="flex  w-full gap-3">
                  {item.icon}
                  <a href="#" className="text-sm">
                    {item.name}
                  </a>
                </div>
              </li>
              {item?.children?.length !== 0 &&
                (selectedComponent === item.name ||
                  item.children.some((i) => i.name === selectedComponent)) && (
                  <ul className="flex flex-col   ml-8 ">
                    <div>
                      {item?.children?.map((child, index) => (
                        <li
                          key={index}
                          className={`flex items-center hover:bg-[#FFFFFF1A] rounded-md p-2 px-3 
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
      <div className="flex gap-5  items-center ">
        <div>
          <WalletIcon />
        </div>
        <div>
          <p className="text-sm text-gray-400">Availabe credits</p>
          <p className="text-base font-normal">222.10</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
