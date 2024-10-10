import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Logo from "@/public/LOGO.png";
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
import { AiFillMessage, AiTwotoneMessage } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import MessageNotification from "./MessageNotification";

export default function Navbar({
  hasNewMessages,
}: {
  hasNewMessages: boolean;
}) {
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
    if (!searchValue) {
      setFilteredItems([]); // Clear filtered items if searchValue is empty
      return;
    }

    fetch("http://localhost:3000/api/searchitem", options)
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
        console.log(searchResults);
      });
  }, [searchValue, setFilteredItems]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems, searchValue]);

  useEffect(() => {
    if (filteredItems && filteredItems.length > 0) {
      router.push("/products/product");
    }
  }, [filteredItems]);
  return (
    <nav>
      <div
        className={`${flexStyles} w-full top-0 z-30 fixed bg-custom-gradient`}
      >
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="logo"
              width={90}
              height={90}
              className="rounded-full  sm:w-20 sm:h-20 md:h-14 md:w-16"
            />
          </Link>
          <div className={`${flexStyles} w-full gap-6`}>
            {/**left side */}
            {/**put logo here  */}

            <div className={`${flexStyles} xl:text-xl gap-2`}>
              <Link href={"/"}>
                <h2 className="font-bold text-montserrat">KEMETIC</h2>
              </Link>
              <Link href={"/"}>
                <h2 className="font-bold   text-montserrat">AMEZAN</h2>
              </Link>
            </div>
            {/* Search */}

            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full text-montserrat gap-4`}>
                <div className={`${flexStyles}  text-sm gap-10 m-2 p-2`}>
                  <div>
                    <Link href={"/"}>
                      <h1 className="hover:text-orange-400">Home</h1>
                    </Link>
                  </div>
                  <div>
                    <Link href={"/products/product"}>
                      <h1 className="hover:text-orange-400">Products</h1>
                    </Link>
                  </div>

                  <div>
                    <Link href={"/service"}>
                      <h1 className="hover:text-orange-400">Services</h1>
                    </Link>
                  </div>

                  <div className="flex gap-2 items-center">
                    <Link
                      href={"/cart"}
                      className={`${flexStyles} gap-2 hover:text-orange-400 `}
                    >
                      Cart
                      <FaShoppingCart />
                      {cartQuantity > 0 && <span>{cartQuantity}</span>}
                    </Link>
                  </div>
                  <Link href={"/chat"}>
                    {/*  */}
                    <MessageNotification hasNewMessage={hasNewMessages} />
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
                  hasNewMessage={false}
                />
              </div>
            ) : (
              <div className="flex justify-end p-4">
                <button
                  className="rounded-full p-2 bg-secondary-gray-300 "
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <HiBars3 className="h-6 w-6 " />
                </button>
              </div>
            )}

            {/**Dashboard link */}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              // <div className=" bg-teal-200 fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 text-montserrat drop-shadow-xl">
              //   {/**close icon */}
              //   <div className="p-4 flex justify-end ">
              //     <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              //       <HiOutlineX className="h-6 w-6  " />
              //     </button>
              //   </div>
              //   <div className="mx-auto flex flex-col font-mono text-lg items-center font-bold justify-between gap-4">
              //     <div>
              //       <Link href={"/"}>
              //         <h1 className="hover:text-orange-400">Home</h1>
              //       </Link>
              //     </div>
              //     <div>
              //       <Link href={"/products/product"}>
              //         <h1 className="hover:text-orange-400">Products</h1>
              //       </Link>
              //     </div>
              //     <div>
              //       <Link href={"/service"}>
              //         <h1 className="hover:text-orange-400">Services</h1>
              //       </Link>
              //     </div>
              //     <div className="flex gap-2 items-center">
              //       <Link
              //         href={"/cart"}
              //         className={`${flexStyles} gap-2 hover:text-orange-400 `}
              //       >
              //         Cart
              //         <FaShoppingCart />
              //         {cartQuantity > 0 && <span>{cartQuantity}</span>}
              //       </Link>
              //     </div>
              //     <Link href={"/chat"}>
              //       {/*  */}
              //       <MessageNotification hasNewMessage={hasNewMessages} />
              //     </Link>
              //   </div>

              //   {session?.user && (
              //     <div className="mx-auto flex items-center justify-between flex-col gap-4">
              //       <p className="font-mono text-sm font-bold m-2 p-2">
              //         {session.user.name}
              //       </p>
              //       <p className="font-mono text-sm font-bold m-2 p-2">
              //         {session.user.email}
              //       </p>
              //       <NavbarLoggedIn
              //         isLoggedIn={isLoggedIn}
              //         onSignOut={handleSignOut}
              //         hasNewMessage={false}
              //       />
              //     </div>
              //   )}

              //   {/**menu items */}
              // </div>

              <div className="bg-white fixed right-0 bottom-0 h-full w-[300px] z-40 p-5 drop-shadow-lg transition-transform duration-300 ease-in-out transform translate-x-0">
                {/* Close icon */}
                <div className="p-4 flex justify-end">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <HiOutlineX className="h-6 w-6 text-gray-800 hover:text-red-500 transition duration-200" />
                  </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col items-center font-mono text-lg font-bold gap-6 mt-4">
                  {/* Home */}
                  <Link
                    href="/"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Home
                  </Link>

                  {/* Products */}
                  <Link
                    href="/products/product"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Products
                  </Link>

                  {/* Services */}
                  <Link
                    href="/service"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    Services
                  </Link>

                  {/* Cart */}
                  <Link
                    href="/cart"
                    className="text-gray-800 hover:text-orange-400 transition duration-200 flex items-center gap-2"
                  >
                    Cart
                    <FaShoppingCart className="h-5 w-5" />
                    {cartQuantity > 0 && (
                      <span className="bg-orange-400 text-white text-sm px-2 py-0.5 rounded-full">
                        {cartQuantity}
                      </span>
                    )}
                  </Link>

                  {/* Chat / Notification */}
                  <Link
                    href="/chat"
                    className="text-gray-800 hover:text-orange-400 transition duration-200"
                  >
                    <MessageNotification hasNewMessage={hasNewMessages} />
                  </Link>
                </div>

                {/* User Info and Logout */}
                {session?.user && (
                  <div className="mt-10 flex flex-col items-center text-center text-gray-800">
                    <p className="font-mono text-md font-bold">
                      {session.user.name}
                    </p>
                    <p className="font-mono text-sm">{session.user.email}</p>

                    <div className="mt-4 gap-4">
                      <NavbarLoggedIn
                        isLoggedIn={isLoggedIn}
                        onSignOut={handleSignOut}
                        hasNewMessage={false}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
