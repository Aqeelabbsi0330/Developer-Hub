import React from "react";
import { useState } from "react";
import upButton from "../../assets/public/up button.png";
import { Range } from "react-range";
import Button from "../../Components/Button/Button";
import rating5 from "../../assets/public/rating 5.png";
import rating4 from "../../assets/public/rating 4.png";
import rating3 from "../../assets/public/rating 3.png";
import rating2 from "../../assets/public/rating 2.png";

export default function Category() {
  const min = 200;
  const max = 1000;
  const step = 10;

  const [Values, setValues] = useState([200, 800]);
  const [Value, setValue] = useState(false);
  const [Show, setShow] = useState(false);
  const [Feature, setFeature] = useState(false);
  const [Price, setPrice] = useState(false);
  const [Rating, setRating] = useState(false);
  function showBar() {
    setValue(!Value);
  }
  function showBrand() {
    setShow(!Show);
  }
  function showFeature() {
    setFeature(!Feature);
  }
  function showPrice() {
    setPrice(!Price);
  }
  function showRating() {
    setRating(!Rating);
  }
  return (
    <div>
      <div
        className={`box w-[230px]  whitespace-nowrap transition-all duration-1000 relative   bg-gray-400 ${
          Value ? "h-[250px]" : "h-[35px]"
        } z-8  `}
      >
        <div className="bar flex items-center  gap-5 justify-between z-10 transition-all duration-500 overflow-hidden  ">
          <h4 className="font-black outfit p-2">Categroy</h4>
          <img className="p-2" onClick={showBar} src={upButton} lt="" />
        </div>
        <div
          className={`items transition-all duration-1000 absolute ${
            Value ? "top-[25px]" : "top-[-250px]"
          } z-0  `}
        >
          <ul className="outfit mt-4">
            <li className="p-2">Mobile Accessory </li>
            <li className="p-2">Electronics</li>
            <li className="p-2">SmartPhones</li>
            <li className="p-2">Modern Tech</li>
            <li className="text-blue-400 p-2">See All</li>
          </ul>
        </div>
      </div>
      <hr className="w-[230px] border-blue-800" />
      <div
        className={`box w-[230px]  whitespace-nowrap transition-all duration-1000 relative   bg-gray-400 ${
          Show ? "h-[290px]" : "h-[35px]"
        } z-6  `}
      >
        <div className="bar flex items-center  gap-5 justify-between z-10 transition-all duration-500 overflow-hidden  ">
          <h4 className="font-black outfit p-2">Brands</h4>
          <img className="p-2" onClick={showBrand} src={upButton} lt="" />
        </div>
        <div
          className={`items transition-all duration-1000 absolute ${
            Show ? "top-[25px]" : "top-[-260px]"
          }  `}
        >
          <ul className="outfit mt-4">
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Samsung</span>
              </label>{" "}
            </li>
            <li className="p-2">
              {" "}
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Apple</span>
              </label>{" "}
            </li>
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Huawai</span>
              </label>
            </li>
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Pocco</span>
              </label>
            </li>

            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Lenovo</span>
              </label>
            </li>

            <li className="text-blue-400 p-2">See All</li>
          </ul>
        </div>
      </div>
      <hr className="w-[230px] border-blue-800" />
      <div
        className={`box w-[230px]  whitespace-nowrap transition-all duration-1000 relative   bg-gray-400 ${
          Feature ? "h-[290px]" : "h-[35px]"
        } z-5  `}
      >
        <div className="bar flex items-center  gap-5 justify-between z-10 transition-all duration-500 overflow-hidden  ">
          <h4 className="font-black outfit p-2">Features</h4>
          <img className="p-2" onClick={showFeature} src={upButton} lt="" />
        </div>
        <div
          className={`items transition-all duration-1000 absolute ${
            Feature ? "top-[25px]" : "top-[-260px]"
          }  `}
        >
          <ul className="outfit mt-4">
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Metalic</span>
              </label>{" "}
            </li>
            <li className="p-2">
              {" "}
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Plastic Cover</span>
              </label>{" "}
            </li>
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">8 GB Ram</span>
              </label>
            </li>
            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Super Power</span>
              </label>
            </li>

            <li className="p-2">
              <label htmlFor="">
                <input type="checkbox" />
                <span className="ml-1.5">Larg Memory</span>
              </label>
            </li>

            <li className="text-blue-400 p-2">See All</li>
          </ul>
        </div>
      </div>
      <hr className="w-[230px] border-blue-800" />
      <div
        className={`box w-[230px]  whitespace-nowrap transition-all duration-1000 relative    bg-gray-400 ${
          Price ? "h-[250px]" : "h-[35px]"
        } z-4  `}
      >
        <div className="bar flex items-center  gap-5 justify-between z-10 transition-all duration-500 overflow-hidden  ">
          <h4 className="font-black outfit p-2">Price Range</h4>
          <img className="p-2" onClick={showPrice} src={upButton} lt="" />
        </div>
        <div
          className={`items transition-all duration-1000 absolute ${
            Price ? "top-[25px]" : "top-[-280px]"
          }  `}
        >
          <ul className="outfit mt-4 flex flex-col items-center">
            <div className=" ml-3.5">
              <Range
                step={step}
                min={min}
                max={max}
                values={Values}
                onChange={(vals) => setValues(vals)}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      height: "10px",
                      width: "200px",
                      backgroundColor: "red",
                      borderRadius: "2px",
                      textAlign: "center",
                      margin: "30px 0",
                      position: "relative",
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => (
                  <div
                    {...props}
                    style={{
                      height: "20px",
                      width: "20px",
                      position: "absolute",
                      transform: "translate(-50%, -50%)",
                      backgroundColor: "blue",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "0 0 2px #000",
                    }}
                  />
                )}
              />
            </div>
            <li>
              <div className="buttons flex gap-5 justify-center">
                <div className="min">
                  <span className="block text-center">MIN</span>
                  <Button text={Values[0]} />
                </div>
                <div className="max">
                  <span className=" block text-center">Max</span>
                  <Button text={Values[1]} />
                </div>
              </div>
            </li>
            <li>
              <div className="apply mt-3">
                <Button text="Apply" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr className="w-[230px] border-blue-800" />
      <div
        className={`box w-[230px]  whitespace-nowrap transition-all duration-1000 relative   bg-gray-400 ${
          Rating ? "h-[290px]" : "h-[35px]"
        } z-3 `}
      >
        <div className="bar flex items-center  gap-5 justify-between z-10 transition-all duration-500 overflow-hidden  ">
          <h4 className="font-black outfit p-2">Rating</h4>
          <img className="p-2" onClick={showRating} src={upButton} lt="" />
        </div>
        <div
          className={`items transition-all duration-1000 absolute ${
            Rating ? "top-[25px]" : "top-[-300px]"
          }  `}
        >
          <ul className="outfit mt-4">
            <li className="p-2 ">
              <label htmlFor="">
                <div className="flex">
                  <input type="checkbox" />
                  <span className="ml-1.5">
                    <img src={rating5} alt="" />
                  </span>
                </div>
              </label>
            </li>
            <li className="p-2">
              <label htmlFor="">
                <div className="flex">
                  <input type="checkbox" />
                  <span className="ml-1.5">
                    <img src={rating4} alt="" />
                  </span>
                </div>
              </label>
            </li>
            <li className="p-2">
              <label htmlFor="">
                <div className="flex">
                  <input type="checkbox" />
                  <span className="ml-1.5">
                    <img src={rating3} alt="" />
                  </span>
                </div>
              </label>
            </li>
            <li className="p-2">
              <label htmlFor="">
                <div className="flex">
                  <input type="checkbox" />
                  <span className="ml-1.5">
                    <img src={rating2} alt="" />
                  </span>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
