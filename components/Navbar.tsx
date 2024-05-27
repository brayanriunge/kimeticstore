import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/public/Logo.png";
import { HiOutlineX } from "react-icons/hi";
import { HiBars3 } from "react-icons/hi2";
import { product, productType } from "@/hooks/types";
import { useSearchContext } from "@/context/SearchContext";
import { signOut, useSession } from "next-auth/react";
import NavbarLoggedIn from "./Auth/NavbarLoggedIn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User } from "next-auth";
import DashboardButton from "./DashboardButton";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

type propUser = {
  user: User;
};

export default function Navbar({ user }: propUser) {
  const router = useRouter();
  const flexStyles = "flex items-center justify-between ";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const { filteredItems, setFilteredItems } = useSearchContext();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const { data: session } = useSession();
  const { cartQuantity } = useCart();

  // const session = await getServerSession(authOptions);
  // console.log(session);

  const handleSignOut = () => signOut();
  // if (session?.user.user.role) {
  //   console.log(session);
  // }

  useEffect(() => {
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    console.log(session?.user.role);
    console.log("name of user", session?.user.name);
  }, [session]);

  const options = {
    method: "GET",
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  // useEffect(() => {
  //   if (!searchValue) return; // No need to fetch if searchValue is empty

  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(
  //         `http://localhost:3000/api/search?query=${encodeURIComponent(
  //           searchValue
  //         )}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch");
  //       }
  //       const data = await response.json();
  //       setFilteredItems(data);
  //     } catch (error) {
  //       console.error("Error fetching items:", error);
  //     }
  //   };

  //   fetchItems();
  // }, [searchValue, setFilteredItems]);

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No need to manually call fetchItems here, useEffect will take care of it
  };

  const fetchItems = useCallback(() => {
    fetch("http://localhost:3000/api/search", options)
      .then((res) => res.json())
      .then((data) => {
        const searchResults = data
          .filter((item: product) => {
            return (
              searchValue && // prevent rendering when there is no input
              item &&
              item.name.toLowerCase().includes(searchValue.toLowerCase())
            );
          })
          .sort((a: product, b: product) => {
            if (
              searchValue && // check that the value is not null
              a.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return -1; // a comes first if it starts with the search value
            } else if (
              searchValue && // check that the value is not null
              b.name.toLowerCase().indexOf(searchValue.toLowerCase()) === 0
            ) {
              return 1; // b comes first if it starts with the search value
            } else {
              return 0; // keep the original order
            }
          });

        setFilteredItems(searchResults);
      });
  }, [searchValue, setFilteredItems]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems, searchValue]);

  useEffect(() => {
    if (filteredItems != null && filteredItems.length > 0) {
      router.push("/products/product");
    }
  }, [filteredItems]);
  return (
    <nav>
      <div
        className={`${flexStyles} w-full top-0 z-30 fixed  bg-teal-200 shadow`}
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          {/**put logo here  */}
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              height={90}
              className="rounded-full mx-auto"
            />
          </Link>

          <div className={`${flexStyles} w-full gap-2`}>
            {/**left side */}

            <h2 className="font-bold text-red-500 md:text-lg text-montserrat">
              KEMETIC AMEZAN {""}
            </h2>

            {/* Search */}

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full text-montserrat gap-4`}>
                <div className={`${flexStyles} text-sm `}>
                  <form onSubmit={handleSearchSubmit}>
                    <div id="search">
                      <input
                        id="search-navbar"
                        type="text"
                        placeholder="Search here"
                        value={searchValue}
                        onChange={handleFormChange}
                      />
                    </div>
                  </form>
                </div>
                <div>
                  <Link href={"/cart"}>
                    Cart
                    <FaShoppingCart />
                    {cartQuantity > 0 && <span>{cartQuantity}</span>}
                  </Link>
                </div>
                {session?.user && (
                  <>
                    <p className="font-mono text-sm font-bold">
                      {session.user.name}
                    </p>
                  </>
                )}

                {/* <DashboardButton /> */}

                <NavbarLoggedIn
                  isLoggedIn={isLoggedIn}
                  onSignOut={handleSignOut}
                />
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-gray-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <HiBars3 className="h-6 w-6 " />
              </button>
            )}

            {/**Dashboard link */}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div className=" bg-teal-200 fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 text-montserrat drop-shadow-xl">
                {/**close icon */}
                <div className="p-4 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6  " />
                  </button>
                </div>
                {session?.user && (
                  <div className="mx-auto">
                    <p className="font-mono text-sm font-bold m-2 p-2">
                      {session.user.name}
                    </p>
                    <p className="font-mono text-sm font-bold m-2 p-2">
                      {session.user.email}
                    </p>
                    <NavbarLoggedIn
                      isLoggedIn={isLoggedIn}
                      onSignOut={handleSignOut}
                    />
                  </div>
                )}

                {/**menu items */}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
