import DashboardHeader from "@/components/dashboardHeader/DashboardHeader";
import Leftnavbar from "@/components/leftnavbar/LeftnavBar";
import ProfitLossTransactions from "@/components/profitLossTransactions/Main";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex bg-slate-200">
      <Leftnavbar />
      <div className="p-10 flex-1 flex  w-10/12 flex-col items-end ">
        <DashboardHeader />
        <ProfitLossTransactions />
      </div>
    </div>
  );
}
