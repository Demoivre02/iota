import React from "react";
import { Book } from "./book";
import { HistotyTable } from "./dashboardHistory";
import { useAuth } from "../../../contexts";

export function Main() {
  const { currentUser } = useAuth();

  console.log(currentUser);

  return (
    <div className="lg:ml-[302px] md:ml-[70px] pb-10 ml-[20px] mr-[20px]">
      <div>
        <p className="fomt-mulish font-[600] text-[15px] text-[#333]">
          Dashboard Overview
        </p>
        <p className="text-[#898991] font-mulish text-[12px] font-[600] mt-[10px]">
          Welcome {currentUser.displayName} 👋
        </p>
      </div>
      <Book />
      <HistotyTable />
    </div>
  );
}
