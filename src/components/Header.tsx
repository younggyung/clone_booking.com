/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#013B94]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <img
              className="h-1 w-auto"
              src="https://rail.cc/img/logos/bookingcom-color.svg"
              alt=""
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
