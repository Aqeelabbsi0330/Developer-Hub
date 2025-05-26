import React from "react";
import { Link } from "react-router-dom";
import rating4 from "../../assets/public/rating 4.png";
import mobile1 from "../../assets/public/tech/1.jpg";

export default function Cards() {
  return (
    <div>
      <div className="main mr-2.5 ml-2.5 w-[60%] border-2 border-black rounded-[5px] px-4 py-3 max-[1024px]:w-[65%] max-[890px]:w-[75%] max-[800px]:w-[80%] max-[768px]:px-1 max-[768px]:py-1  max-[680px]:w-[90%] max-[680px]:mx-auto">
        <div className="card flex max-[680px]:items-center">
          <div className="mobile ">
            <img
              src={mobile1}
              alt=""
              className="w-fit h-auto object-contain max-h-[200px] "
            />
          </div>
          <div className="m-info">
            <p>Canon Cmera EOS 2000, Black 10x zoom</p>
            <p className="mt-3">
              <span className="outfit text-[20px] leading-7">$998.00</span>
              <span className="ml-3 text-gray-500">
                <s>$1128.00</s>
              </span>
            </p>
            <div className="rating flex items-center gap-1.5 max-[768px]:flex-wrap ">
              <img src={rating4} alt="" />
              <span>7.5</span>
              <ul className="flex gap-7 list-disc pl-8 ">
                <li>154 orders</li>
                <li className=" text-[#00B517] ">Free Shipping</li>
              </ul>
            </div>
            <div className="description mt-3.5 leading-6 max-[680px]:hidden">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <div className="text-[#0D6EFD] text-[16px] mt-1 mb-3 max-[768px]:hidden">
              <Link to="/Header">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
