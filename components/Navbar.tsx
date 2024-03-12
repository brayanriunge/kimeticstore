import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Logo from "@/public/Logo.png";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";

export default function Navbar() {
  const router = useRouter();
  const flexStyles = "flex items-center justify-between ";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${flexStyles} w-full top-0 z-30 fixed py-2  bg-teal-200 shadow`}
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          {/**put logo here  */}
          <Image
            src={Logo}
            alt="logo"
            width={90}
            height={90}
            className="rounded-full m-4"
          />
          <div className={`${flexStyles} w-full gap-10`}>
            {/**left side */}

            <h2 className="font-bold text-red-500 text-2xl text-montserrat">
              KEMETIC AMEZAN {""}
            </h2>

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full text-montserrat font-sans`}>
                <div
                  className={`${flexStyles} text-sm text-primary-gray-500  gap-8`}
                >
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/agricultural"}>
                    <a
                      className={`${
                        router.pathname === "/agricultural"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Agriculture Produce
                    </a>
                  </Link>
                  <Link legacyBehavior href="/art">
                    <a
                      className={`${
                        router.pathname === "/art"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Art
                    </a>
                  </Link>

                  <Link legacyBehavior href="/land">
                    <a
                      className={`${
                        router.pathname === "/land"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Land
                    </a>
                  </Link>
                  <Link legacyBehavior href="/gems">
                    <a
                      className={`${
                        router.pathname === "/gems"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Gems
                    </a>
                  </Link>
                  <Link legacyBehavior href="/cars">
                    <a
                      className={`${
                        router.pathname === "/cars"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Cars
                    </a>
                  </Link>
                  <Link legacyBehavior href="/herbs">
                    <a
                      className={`${
                        router.pathname === "/herbs"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Herbs
                    </a>
                  </Link>
                  <Link legacyBehavior href="/houses">
                    <a
                      className={`${
                        router.pathname === "/houses"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Houses
                    </a>
                  </Link>
                  <Link legacyBehavior href="/cigarettes">
                    <a
                      className={`${
                        router.pathname === "/cigarettes"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Cigarettes
                    </a>
                  </Link>
                  <Link legacyBehavior href="/construction">
                    <a
                      className={`${
                        router.pathname === "/construction"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Construction Materials
                    </a>
                  </Link>
                </div>
                {/** left side */}
                {/* {status === "authenticated" && data !== null && (
                <>
                 <p>Welcome {data.user.name}</p>
                </>
               )} */}
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-gray-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="h-6 w-6 " />
              </button>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div className=" bg-teal-200 fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 text-montserrat drop-shadow-xl">
                {/**close icon */}
                <div className="p-4 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6  " />
                  </button>
                </div>
                {/**menu items */}
                <div className=" flex flex-col gap-6 items-center text-justify text-2xl ">
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/agricultural"}>
                    <a
                      className={`${
                        router.pathname === "/agricultural"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Agriculture Produce
                    </a>
                  </Link>
                  <Link legacyBehavior href="/art">
                    <a
                      className={`${
                        router.pathname === "/art"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Art
                    </a>
                  </Link>

                  <Link legacyBehavior href="/land">
                    <a
                      className={`${
                        router.pathname === "/land"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Land
                    </a>
                  </Link>
                  <Link legacyBehavior href="/gems">
                    <a
                      className={`${
                        router.pathname === "/gems"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Gems
                    </a>
                  </Link>
                  <Link legacyBehavior href="/cars">
                    <a
                      className={`${
                        router.pathname === "/cars"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Cars
                    </a>
                  </Link>
                  <Link legacyBehavior href="/herbs">
                    <a
                      className={`${
                        router.pathname === "/herbs"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Herbs
                    </a>
                  </Link>
                  <Link legacyBehavior href="/houses">
                    <a
                      className={`${
                        router.pathname === "/houses"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Houses
                    </a>
                  </Link>
                  <Link legacyBehavior href="/cigarettes">
                    <a
                      className={`${
                        router.pathname === "/cigarettes"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Cigarettes
                    </a>
                  </Link>
                  <Link legacyBehavior href="/construction">
                    <a
                      className={`${
                        router.pathname === "/construction"
                          ? "text-red-800"
                          : "text-gray-20"
                      } hover:text-red-600`}
                    >
                      Construction Materials
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
