import React from "react";
import { MdSettings } from "react-icons/md";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { BsSunFill } from "react-icons/bs";

function Icons() {
  const icons = [MdSettings, RiAccountPinCircleFill, BsSunFill];
  return (
    <div>
      <ul className="py-4">
        {icons.map((Item, index) => {
          return (
            <li key={index}>
              <Item iconUrl={icons} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Icons;
