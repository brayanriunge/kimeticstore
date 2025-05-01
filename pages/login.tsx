// import Image from "next/image";
// import Link from "next/link";
// import google from "@/public/google.png";
// import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
// import { FormEvent, useState } from "react";
// import { signIn, useSession } from "next-auth/react";
// import { useRouter } from "next/router";
// import toast, { Toaster } from "react-hot-toast";
// import Head from "next/head";

// export default function Login() {
//   const [show, setShow] = useState(false);

//   const router = useRouter();
//   const [serverErrors, setServerErrors] = useState("");

//   // if (session) {
//   //   router.replace("/");
//   //   return null;
//   // }

//   async function handleSubmit(e: FormEvent) {
//     e.preventDefault();
//     const form = new FormData(e.target as HTMLFormElement);
//     try {
//       const response = await signIn("credentials", {
//         email: form.get("email") as string,
//         password: form.get("password") as string,
//         redirect: false, // Set this to true if you want to redirect after successful login
//       });

//       if (response?.status === 401) {
//         setServerErrors("Invalid Password or Email Does Not Exist");
//       }
//       if (response?.ok) {
//         toast.success("login successfully");
//         <Toaster />;
//       }

//       if (response?.error) {
//         // Handle login error
//         console.error(response.error);
//       } else {
//         router.push("/");
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   //google handler function
//   async function handleGoogleSignin() {
//     signIn("google", { callbackUrl: "/" });
//   }

//   return (
//     <>
//       <Head>
//         <title>Login </title>
//         <meta property="og:title" content="My page title" key="title" />
//         <link rel="icon" href="/LOGO.png" />
//       </Head>
//       <div className="flex min-h-full bg-custom-gradient gap-16 py-10 mb-0 md:h-full md:pb-20">
//         <div className="  bg-slate-50 m-auto  h-3/4 rounded-md mx-auto p-6  max-w-md w-full  mt-10  mb-40">
//           {/* Login form */}
//           <div className=" flex flex-col text-center gap-10 h-full rounded-md">
//             <div className="m-auto px-4 py-4">
//               <div>
//                 <h1 className="font-bold text-4xl text-gray-800 font-montserrat py-4">
//                   {" "}
//                   Login
//                 </h1>
//               </div>
//               {serverErrors && (
//                 <div
//                   className="mb-4 rounded-lg border border-red-600 bg-red-50 p-4 text-sm text-red-800"
//                   role="alert"
//                 >
//                   {serverErrors}
//                 </div>
//               )}
//               <form className="flex flex-col gap-5 " onSubmit={handleSubmit}>
//                 <div className="flex border border-gray-400  rounded-md relative">
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none "
//                   />
//                   <span className="icon flex items-center px-4 ">
//                     <HiAtSymbol className="h-[25px] w-[25px]" />
//                   </span>
//                 </div>
//                 <div className="flex border border-gray-400  rounded-md relative ">
//                   <input
//                     type={`${show ? "text" : "password"}`}
//                     name="password"
//                     placeholder="Password"
//                     className="w-full px-6 py-4 rounded-xl bg-slate-50 focus:outline-none border-none"
//                   />
//                   <span
//                     className="icon flex items-center px-4  "
//                     onClick={() => setShow(!show)}
//                   >
//                     <HiFingerPrint className="h-[25px] w-[25px]" />
//                   </span>
//                 </div>
//                 <div className="">
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-blue-500 rounded-md to-indigo-500 py-3 text-gray-50 text-lg
//                             hover:bg-gradient-to-r  hover:from-gray-50 hover:to-gray-100 hover:border-blue-500 hover:text-gray-700 hover:border"
//                   >
//                     Login
//                   </button>
//                 </div>
//                 {/* <div className="">
//                   <button
//                     type="button"
//                     onClick={handleGoogleSignin}
//                     className="w-full py-3 border flex justify-between items-center gap-4  rounded-lg hover:bg-gray-300"
//                   >
//                     <p className="text-montserrat ml-2">Sign in with Google</p>
//                     <Image
//                       src={google}
//                       height={30}
//                       width={30}
//                       alt="google"
//                       className="rounded-full"
//                     />
//                   </button>
//                 </div> */}
//               </form>
//               <p>
//                 Not yet Registered
//                 <Link
//                   legacyBehavior
//                   href={"/signup"}
//                   className="text-center text-gray-400"
//                 >
//                   <a className="text-blue-700"> Sign Up</a>
//                 </Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function Login() {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [serverErrors, setServerErrors] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    try {
      const response = await signIn("credentials", {
        email: form.get("email") as string,
        password: form.get("password") as string,
        redirect: false,
      });

      if (response?.status === 401) {
        setServerErrors("Invalid Password or Email Does Not Exist");
      }
      if (response?.ok) {
        toast.success("Login successfully");
        <Toaster />;
      }

      if (response?.error) {
        console.error(response.error);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta property="og:title" content="Login page" key="title" />
        <link rel="icon" href="/LOGO.jpg" />
      </Head>
      <div className="min-h-screen flex bg-custom-gradient items-center justify-center bg-gray-100">
        <div className="w-full max-w-xs md:max-w-sm p-4 bg-white rounded-md shadow-lg">
          <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
            Login
          </h1>

          {serverErrors && (
            <div className="mb-2 rounded-md bg-red-50 border border-red-600 p-2 text-sm text-red-800">
              {serverErrors}
            </div>
          )}

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <span className="absolute right-2 top-2 text-gray-500">
                <HiAtSymbol className="h-5 w-5" />
              </span>
            </div>

            <div className="relative">
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <span
                className="absolute right-2 top-2 text-gray-500 cursor-pointer"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint className="h-5 w-5" />
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Not yet registered?{" "}
            <Link href="/signup">
              <button className="text-blue-500 hover:underline">Sign Up</button>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
