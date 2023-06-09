import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Links from "./Links";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30
       w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} gap-16 pr-32`}>
            {/* {LEFT SIDE} */}
            <img src={Logo} alt="logo" />
          </div>

          {/* {RIGHT SIDE} */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full `}>
              <div className={`${flexBetween} text-md  gap-10 `}>
                <Links
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Links
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8 `}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member!
                </ActionButton>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <Bars3Icon className="h-6 w-6 text-white"></Bars3Icon>
            </button>
          )}
        </div>
      </div>
      {/* {MOBILE MENU MODAL} */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* {CLOSE ICON} */}
          <div className=" flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-8 w-8 text-gray-400"></XMarkIcon>
            </button>
          </div>
          <div className=" items-left ml-[33%] flex h-32 flex-col gap-10 text-2xl">
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
