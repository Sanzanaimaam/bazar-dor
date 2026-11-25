"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UserInformation = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        toast.success("সফলভাবে সাইন আউট হয়েছে");
        router.push("/");
    };

    // লোডিং অবস্থায় লেআউট যেন না লাফায়
    if (isPending) {
        return (
            <div className="flex items-center gap-3" aria-hidden="true">
                <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />
                <div className="hidden h-4 w-24 animate-pulse rounded bg-gray-200 sm:block" />
            </div>
        );
    }

    return (
        <div>
            {user ? (
                <div className="dropdown dropdown-end">
                    {/* প্রোফাইল ছবি ও নাম */}
                    <div
                        tabIndex={0}
                        role="button"
                        aria-label="প্রোফাইল মেনু খুলুন"
                        className="group flex cursor-pointer items-center gap-3 rounded-full border border-gray-200 bg-white py-1 pl-1 pr-4 shadow-sm transition-all duration-200 hover:border-[#0F6A36] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6A36]"
                    >
                        {user.image ? (
                            <img
                                src={user.image}
                                alt={user.name}
                                referrerPolicy="no-referrer"
                                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#F6E81E]"
                            />
                        ) : (
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F6A36] text-lg font-bold text-white ring-2 ring-[#F6E81E]">
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                        )}

                        <span className="hidden max-w-[140px] truncate text-sm font-semibold text-[#0B5429] sm:block">
                            {user.name}
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="hidden h-4 w-4 text-[#0F6A36] sm:block"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>

                    {/* প্রোফাইল ড্রপডাউন */}
                    <div
                        tabIndex={0}
                        className="dropdown-content z-50 mt-3 w-72 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl"
                    >
                        {/* হেডার */}
                        <div className="relative bg-[#0F6A36] px-5 pb-6 pt-5">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-[#F6E81E]" />
                            <div className="flex items-center gap-3">
                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        referrerPolicy="no-referrer"
                                        className="h-14 w-14 rounded-full object-cover ring-2 ring-[#F6E81E]"
                                    />
                                ) : (
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl font-bold text-[#0B5429] ring-2 ring-[#F6E81E]">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                                <div className="min-w-0">
                                    <p className="truncate text-base font-bold text-white">
                                        {user.name}
                                    </p>
                                    <p className="truncate text-xs text-white/80">
                                        {user.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* মেনু আইটেম */}
                        <ul className="p-2">
                            <li>
                                <Link
                                    href="/profile"
                                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#0B5429] transition-colors hover:bg-[#0F6A36]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0F6A36]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-5 w-5 text-[#0F6A36]"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.5-1.632z"
                                        />
                                    </svg>
                                    প্রোফাইল দেখুন
                                </Link>
                            </li>

                            <li className="my-1 border-t border-gray-100" />

                            <li>
                                <button
                                    onClick={handleSignOut}
                                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-red-600 transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                                        />
                                    </svg>
                                    সাইন আউট
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Link
                        href="/sing_in"
                        className="rounded-full border border-[#0F6A36] px-5 py-2 text-sm font-semibold text-[#0F6A36] transition-all duration-200 hover:bg-[#0F6A36] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6A36]"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign_up"
                        className="rounded-full bg-[#0F6A36] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0B5429] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E]"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInformation;