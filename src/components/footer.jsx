import { Container } from "./layout";
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className=" bg-zinc-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-3">
            <a href="/">
              <p className="text-4xl uppercase cursor-pointer font-bold text-zinc-500">
                Denis <br /> Villeneue
              </p>
            </a>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className=" text-zinc-500">
            In total, Villeneuve's films have grossed nearly $1.1 billion worldwide. His next film, Dune: Part Two (2023), is set to be released on November 3, 2023, by Warner Bros. Pictures.
            </p>
          </div>

          <div className="col-span-12 sm:col-span-6 md:col-span-4  sm:pl-8">
            <h2 className="font-bold text-xl capitalize mb-2">Explore</h2>
            <ul className="flex justify-around text-zinc-500 ">
              <li className=" mb-2 mx-4 hover:text-rose-500 sm:mx-0 capitalize">
                <a href="#home">Home</a>
              </li>
              <li className="mb-2 mx-4 hover:text-rose-500 sm:mx-0 capitalize">
                <a href="#showcase">Showcase</a>
              </li>
              <li className="mb-2 mx-4 hover:text-rose-500 sm:mx-0 capitalize">
                <a href="#process">Process</a>
              </li>
              <li className="mb-2 mx-4 hover:text-rose-500 sm:mx-0 capitalize">
                <a href="#actors">Actors</a>
              </li>
            </ul>
          </div>

         
        </div>
        <div className="border-t border-zinc-500 pt-8 mt-5 flex justify-between">
          <p className="text-zinc-500 text-sm">
            @{new Date().getFullYear()} all copyright reserved
          </p>
          <div className="text-xs flex gap-4">
            <Twitter />
            <Facebook />
            <Instagram />
            <Pinterest />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
