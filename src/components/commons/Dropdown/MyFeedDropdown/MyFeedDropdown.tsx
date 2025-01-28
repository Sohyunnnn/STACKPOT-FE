import { MeatballIcon } from "@assets/svgs";
import React, { useState, useRef, useEffect } from "react";
import {
  containerStyle,
  dropdownStyle,
  iconStyle,
} from "./MyFeedDropdown.style";

interface FeedDropdownProps {
  topMessage: string;
  bottomMessage: string;
  onTop: () => void;
  onBottom: () => void;
}

const MyFeedDropdown: React.FC<FeedDropdownProps> = ({
  topMessage,
  bottomMessage,
  onTop,
  onBottom,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <MeatballIcon css={iconStyle} onClick={toggleDropdown} />
      {isDropdownOpen && (
        <div css={dropdownStyle}>
          <div css={containerStyle(true)} onClick={onTop}>
            {topMessage}
          </div>
          <div css={containerStyle(false)} onClick={onBottom}>
            {bottomMessage}
          </div>
        </div>
      )}
    </div>
  );
};
export default MyFeedDropdown;
