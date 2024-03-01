"use client"
import React from "react";
import { CustomButtonProps } from "@/types";

const CustomButton = ({ title, containerStyles , handleClick , btnType }: CustomButtonProps) => {
  

    return (
        <button
            disabled={false}
            type={"button" || btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick} // Handle click event within CustomButton component
        >
            
            <span className="flex-1">{title}</span>
        </button>
    );
};

export default CustomButton;
