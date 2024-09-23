"use client";
import React from "react";

export function StickyNav() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);


  return (
    <div className="-m-6 overflow-hidden">
      <nav className="sticky top-0 z-10 max-w-full rounded-none px-4 py-2 lg:px-20 lg:py-4 bg-black shadow-md">
        <div className="flex items-center justify-between text-neutral-400 mt-4">
          <a href="#" className="mr-4 cursor-pointer py-3 font-bold">
            LOGO
          </a>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <button className="hidden lg:inline-block bg-transparent text-md px-4 py-2 font-bold">
                Login
              </button>
              <button className="hidden lg:inline-block bg-gradient-to-r from-neutral-500 to-gray-700 text-sm px-4 py-2 text-white rounded-xl">
                Join Now
              </button>
            </div>
            <button
              className="ml-auto h-6 w-6 text-inherit lg:hidden"
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {openNav && (
          <div className="block lg:hidden">
            <div className="flex items-center gap-x-1">
              <button className="w-full bg-transparent text-sm px-4 py-2">
                Log In
              </button>
              <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-sm px-4 py-2 text-white rounded">
                Sign in
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
