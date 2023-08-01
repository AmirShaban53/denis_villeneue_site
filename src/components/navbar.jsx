import { WhatsApp, ShoppingBagOutlined, Dehaze } from "@mui/icons-material";

import { useState, useEffect } from "react";
import { Container } from "./layout";

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    setMobileNav(false);
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) setNavBg(true);
      if (window.scrollY < 50) setNavBg(false);
    });

    return () => {
      window.removeEventListener("scroll", () => console.log("removed"));
    };
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 w-full transition duration-700 z-40 ${
          navBg ? `bg-zinc-950 text-zinc-300 shadow` : ` text-zinc-300`
        } ${mobileNav && "bg-zinc-950 text-black"}`}
      >
        <Container>
          <div className="justify-between mx-auto lg:max-w-7xl md:items-center md:flex">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                <a href="#home">
                  <p className="text-xl md:text-3xl font-bold ">Denis Villeneue</p>
                </a>
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    <Dehaze />
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className=" text-xl py-4 md:px-6 text-center border-b-2 md:border-b-0  border-white  md:hover:text-rose-500 hover:font-bold">
                    <a href="#history" onClick={() => setNavbar(!navbar)}>
                      History
                    </a>
                  </li>
                  <li className="text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 border-white  md:hover:text-rose-500 hover:font-bold">
                    <a href="#showcase" onClick={() => setNavbar(!navbar)}>
                      Showcase
                    </a>
                  </li>
                  <li className=" text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 border-white md:hover:text-rose-500 hover:font-bold">
                    <a href="#process" onClick={() => setNavbar(!navbar)}>
                      Process
                    </a>
                  </li>
                  <li className=" text-xl py-4 px-6 text-center  border-b-2 md:border-b-0 border-white md:hover:text-rose-500 hover:font-bold">
                    <a href="#actors" onClick={() => setNavbar(!navbar)}>
                      Actors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default NavBar;
