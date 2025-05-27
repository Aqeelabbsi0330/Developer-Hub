import React from "react";
import Select from "react-select";
import group from "../../assets/public/btn-group.png";
import group2 from "../../assets/public/btn-group 2.png";
export default function Filter() {
  const items = [
    {
      value: "featured",
      label: (
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          Featured
        </span>
      ),
    },
    {
      value: "featured1",
      label: (
        <span style={{ display: "inline-flex", alignItems: "center" }}>
          Featured1
        </span>
      ),
    },
  ];
  const customStyles = () => ({
    control: (provided, state) => ({
      ...provided,
      border: state.isFocused ? "2px solid black" : "none",
      boxShadow: "none",
      "&:hover": {
        border: "1px solid gray",
      },
    }),
  });
  return (
    <div>
      <div className="filter w-[60%] mx-auto flex justify-between px-5 py-3 bg-gray-500 items-center">
        <div className="filter-Name outfit">
          <p>
            12,911 items in <b> Mobile accessory </b>
          </p>
        </div>
        <div className="filter-check flex items-center gap-2 outfit font-normal ">
          <label htmlFor="">
            <input type="checkbox" className="w-5" />
            <span> Verified Only</span>
          </label>
          <Select styles={customStyles()} options={items} />
          <div className="buttons flex border-gray-400 border-1 rounded-[6px]">
            <img src={group2} alt="" />
            <img src={group} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
