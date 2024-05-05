'usec client';

import React from "react";
import PrimaryButton from "../buttons/primaryButton/PrimaryButton";
import TertiaryButton from "../buttons/tertiaryButton/TertiaryButton";
import Image from "next/image";
import { BG_IMG } from "@/assests/imageContstant";

const Trial = ()=>{
    return (
        <div className="w-11/12 flex justify-between bg-slate-50 p-10 my-10 rounded-2xl space-x-10">
        <div className="w-4/12 flex flex-col justify-between pb-10">
            <p className="text-4xl font-bold"> Try Aurora Plus now!</p>
            <p className="text-md  font-medium text-slate-600">
            Enter in this creative world. Aurora Plus is the best product for your business.
            </p>
            <div className="flex justify-start space-x-5">
                <PrimaryButton buttonText={"Try for free"} leftIcon={null} rightIcon={null} onPress={()=>{}}/>
                <TertiaryButton buttonText={"Skip"} leftIcon={null} rightIcon={null} onPress={()=>{}}/>
            </div>
        </div>
        <div>
            <Image src={BG_IMG} width={300} height={300} alt="bg"/>
        </div>
        </div>
    )
}

export default Trial