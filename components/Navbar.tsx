import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <div className="flex items-center"> {/* Container for Logo */}
          <Link href="/">
              <Image
                src={"/logo.svg"}
                alt="Car Hub Logo"
                width={118}
                height={18}
                className="object-contain"
              />
          </Link>
        </div>
        <div> {/* Container for Sign In Button */}
          <CustomButton
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
