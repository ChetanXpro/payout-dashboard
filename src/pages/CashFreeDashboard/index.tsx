import {
  DownloadIcon,
  InfoIcon,
  PathDownIcon,
  SortIcon,
  TriangleIcon,
} from "../../assets/Icons/Icons";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/CashFree/Pagination";

const CashFreeDashboard = () => {
  const ordersData = [
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },
    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    {
      orderId: "#281209",
      orderDate: "7 July, 2023",
      orderAmount: "₹1,278.23",
      transactionFees: "₹22",
    },

    // Add more orders as needed
  ];
  return (
    <div className=" flex flex-col px-3 gap-4    h-full ">
      <div className="flex justify-between items-center">
        <p className="text-xl">Overview</p>
        <div className="text-base cursor-pointer  bg-white  border border-[#D9D9D9] py-1.5 px-3 text-[#4D4D4D] font-normal rounded-md flex gap-2 items-center">
          <p>Last Month</p>
          <PathDownIcon />
        </div>
      </div>
      <div className=" flex flex-col md:flex-row justify-between gap-4 ">
        <div className="flex rounded-md bg-white gap-2 flex-1 flex-col justify-center pl-4 p-[20px]">
          <p className="text-[#4D4D4D] text-base">Online orders</p>
          <p className="text-3xl font-medium">231</p>
        </div>
        <div className="flex rounded-md bg-white gap-2 flex-1 flex-col justify-center pl-4 p-[20px]">
          <p className="text-[#4D4D4D] text-base">Amount received</p>
          <p className="text-3xl font-medium">₹23,92,312.19</p>
        </div>
      </div>
      <div className="flex text-lg items-center">
        <p className="">Transactions</p>
        <div className="custom-vertical-bar mx-2"></div>
        <p>This Month</p>
      </div>
      <div className="bg-white   rounded-md h-[100%] p-3 overflow-y-auto flex flex-col  gap-3">
        <div className="flex w-full items-center  justify-between">
          <div className="w-[15rem]">
            <SearchBar
              inputClassName="bg-white"
              className="border bg-white p-1 "
              placeholder="Search by order ID..."
            />
          </div>
          <div className="flex gap-2 ">
            <div className="flex gap-2 text-[#4D4D4D]  font-normal cursor-pointer border-[#D9D9D9] border px-3 py-1 rounded-md items-center">
              <p>Sort</p>
              <SortIcon />
            </div>
            <div className="flex items-center justify-center p-2 rounded-md cursor-pointer font-base border-[#D9D9D9] border">
              <DownloadIcon />
            </div>
          </div>
        </div>
        <div className="  overflow-y-auto  h-full   ">
          <table className="w-full overflow-y-auto  h-[100%]    ">
            <thead className="   rounded-lg">
              <tr className="  rounded-md  bg-[#F2F2F2] ">
                <th className="py-[11px] rounded-s-md   px-4  font-medium text-[#4D4D4D] text-sm  text-start ">
                  Order ID
                </th>
                <th className="py-2 px-4  font-medium text-[#4D4D4D] text-sm flex    ">
                  <div className="flex gap-1 items-center ">
                    <p>Order date</p>
                    <TriangleIcon />
                  </div>
                </th>
                {/* <div className="w-[10rem]"></div> */}
                <th className="py-2 px-5   font-medium text-[#4D4D4D] text-sm text-end  ">
                  Order amount
                </th>
                <th className="py-2 px-4 rounded-e-md  font-medium flex gap-1 items-center text-[#4D4D4D] text-sm text-start">
                  <div className="flex gap-1 rounded-e-md items-center justify-end w-full">
                    <p>Transaction fees</p>
                    <InfoIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className=" overflow-y-auto ">
              {ordersData.map((order) => (
                <tr className=" p-3  text-sm px-10 rounded-md     ">
                  <td className="py-[12px]  px-4  text-sm border-b     text-[#146EB4]  ">
                    {order.orderId}
                  </td>
                  <td className="py-[12px] px-4 text-sm border-b  text-[#1A181E]  ">
                    {order.orderDate}
                  </td>
                  <td className="py-[12px] px-4 text-sm border-b  text-[#1A181E]  text-end   ">
                    {order.orderAmount}
                  </td>
                  <td className="py-[12px] px-4  text-sm border-b  text-[#1A181E]  text-end ">
                    {order.transactionFees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination section */}
        <div className="flex items-center justify-center">
          <div className="flex items-center w-[60%] justify-center  ">
            <Pagination
              totalItems={18}
              itemsPerPage={5}
              currentPage={1}
              onPageChange={() => {}}
            />
          </div>
        </div>
        <div className="bg-[]"></div>
      </div>
    </div>
  );
};

export default CashFreeDashboard;
