import moment from "moment";
import Image from "next/image";
import React from "react";

interface AmountTransferTileProps {
  iconImage: string;
  amount: string;
  type: "debit" | "credit";
  timestamp: string;
  name: string;
}

const AmountTransferTile: React.FC<AmountTransferTileProps> = ({
  iconImage,
  amount,
  type,
  timestamp,
  name,
}) => {
  const formattedAmount = type === "debit" ? `-$${amount}` : `+$${amount}`;

  return (
    <div className="flex justify-between items-center my-7  space-x-10">
      <div className="flex justify-between items-center space-x-10">
        <Image
          src={iconImage}
          width={50}
          height={50}
          alt="user"
          className="rounded-full"
        />
        <div>
          <p className="text-lg font-semibold text-slate-950">{`${
            type === "debit" ? "From" : "To"
          } ${name}`}</p>
          <p className="text-md font-semibold text-slate-600">
            {moment(timestamp).calendar()}
          </p>
        </div>
      </div>
      <div className="px-4 py-2 bg-orange-100 rounded-lg">
        <p className={`text-lg font-bold ${
          type === "debit" ? "text-red-500" : "text-green-500"
        }`}>
          {formattedAmount}
        </p>
      </div>
    </div>
  );
};

export default AmountTransferTile;
