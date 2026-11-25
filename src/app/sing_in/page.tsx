

import Link from "next/link";

const SignIn = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">

            <form className="card bg-base-100 w-full max-w-sm shadow-xl p-6">

                <h2 className="text-2xl font-bold text-center mb-5">
                    Sign In
                </h2>

                {/* Email */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Password */}
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Forgot Password */}
                <div className="text-right mb-4">
                    <Link
                        href="/forgot_password"
                        className="link link-primary text-sm"
                    >
                        Forgot Password?
                    </Link>
                </div>

                {/* Sign In Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Sign In
                </button>

                {/* Sign Up Link */}
                <p className="text-center mt-4 text-sm">
                    Do not have an account?{" "}
                    <Link href="/sign_up" className="link link-primary">
                        Sign Up
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default SignIn;





// import Link from "next/link";

// const SignIn = () => {
//     return (
//         <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10">

//             {/* Heading */}
//             <div className="text-center mb-7">
//                 <h1 className="text-2xl font-bold text-black mb-2">
//                     স্বাগতম ফিরে আসার জন্য!
//                 </h1>
//                 <p className="text-sm text-gray-400">
//                     আপনার অ্যাকাউন্টে লগইন করে সকল সুবিধা উপভোগ করুন
//                 </p>
//             </div>

//             {/* Sign In Card */}
//             <div className="w-full max-w-md bg-[#f8faf8] rounded-2xl p-6 sm:p-8 shadow-xl">

//                 <form className="space-y-5">

//                     {/* Email */}
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-2">
//                             ইমেইল
//                         </label>
//                         <input
//                             type="email"
//                             name="email"
//                             id="email"
//                             placeholder="you@example.com"
//                             className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 text-sm text-gray-800"
//                         />
//                     </div>

//                     {/* Password */}
//                     <div>
//                         <label htmlFor="password" className="block text-sm font-medium text-gray-800 mb-2">
//                             পাসওয়ার্ড
//                         </label>
//                         <input
//                             type="password"
//                             name="password"
//                             id="password"
//                             placeholder="আপনার পাসওয়ার্ড লিখুন"
//                             className="w-full px-3 py-3 border border-gray-200 rounded-lg outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 text-sm text-gray-800"
//                         />
//                     </div>

//                     {/* Forgot Password */}
//                     <div className="text-right">
//                         <Link
//                             href="/forgot_password"
//                             className="text-sm text-green-700 hover:underline"
//                         >
//                             পাসওয়ার্ড ভুলে গেছেন?
//                         </Link>
//                     </div>

//                     {/* Sign In Button */}
//                     <button
//                         type="submit"
//                         className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg shadow-md transition duration-200"
//                     >
//                         সাইন ইন করুন
//                     </button>

//                     {/* Divider */}
//                     <div className="flex items-center gap-4 py-1">
//                         <div className="h-px bg-gray-200 flex-1"></div>
//                         <span className="text-sm text-gray-500">অথবা</span>
//                         <div className="h-px bg-gray-200 flex-1"></div>
//                     </div>

//                     {/* Social Login */}
//                     <div className="grid grid-cols-2 gap-2">

//                         <button
//                             type="button"
//                             className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
//                         >
//                             <span className="text-lg font-bold text-blue-600">G</span>
//                             Google
//                         </button>

//                         <button
//                             type="button"
//                             className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-3 text-sm font-semibold text-gray-800 hover:bg-gray-100 transition"
//                         >
//                             <span className="text-lg">●</span>
//                             GitHub
//                         </button>

//                     </div>

//                     {/* Sign Up Link */}
//                     <p className="text-center text-sm text-gray-600 pt-2">
//                         অ্যাকাউন্ট নেই?{" "}
//                         <Link
//                             href="/sign_up"
//                             className="text-green-700 font-semibold hover:underline"
//                         >
//                             অ্যাকাউন্ট তৈরি করুন
//                         </Link>
//                     </p>

//                 </form>
//             </div>

//             {/* Back Home */}
//             <Link
//                 href="/"
//                 className="text-gray-500 hover:text-green-500 text-sm mt-7 transition"
//             >
//                 ← হোম পেজে ফিরে যান
//             </Link>

//         </main>
//     );
// };

// export default SignIn;
