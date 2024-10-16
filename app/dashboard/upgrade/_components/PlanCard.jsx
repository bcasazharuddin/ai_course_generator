import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HiCheck } from "react-icons/hi2";

function PlanCard({ item }) {
  return (
    // <div className="w-[400px] h-[200px]">
      <Card className="w-full max-w-sm mx-auto border rounded-lg shadow-lg  hover:border-primary">
        <CardHeader>
          <CardTitle>
            <p className="text-2xl font-semibold text-center">{item?.name}</p>
          </CardTitle>
          <CardDescription className=" text-center">
            <span className="text-2xl font-bold">{item?.price}</span>
            {item.price == 'Free' ? '':"/month"}
          </CardDescription>
        </CardHeader>
    
       <CardContent>
          <div className="flex flex-col items-start p-2 "> {/* Changed to items-start for alignment */}
            {item?.features.map((feature, index) => (
              <div key={index} className="flex gap-1">
                <HiCheck  />
                <span className="text-wrap">{feature}</span> {/* Keep text-wrap class */}
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#"
            >
              Get Started
            </a>
          </div>
        </CardFooter>
      </Card>
    // </div>
  );
}

export default PlanCard;
