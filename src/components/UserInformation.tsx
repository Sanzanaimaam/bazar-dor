
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UserInformation = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const router = useRouter();

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    return (
        <div>
            {user ? (
                <div className="dropdown dropdown-end">

                    {/* Profile Picture and Name */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="flex items-center gap-3 cursor-pointer"
                    >
                        <div className="avatar">
                            <div className="w-10 h-10 rounded-full">

                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                    />
                                ) : (
                                    <div className="bg-green-800 text-white flex items-center justify-center text-xl font-bold w-10 h-10 rounded-full">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}

                            </div>
                        </div>

                        <span className="font-semibold">
                            {user.name}
                        </span>

                    </div>

                    {/* Profile Dropdown */}
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-50 w-64 p-3 shadow-xl border border-base-300 mt-3"
                    >

                        {/* User Information */}
                        <li className="pointer-events-none">
                            <div className="flex flex-col items-start gap-1">
                                <span className="font-bold text-base">
                                    {user.name}
                                </span>

                                <span className="text-sm opacity-60">
                                    {user.email}
                                </span>
                            </div>
                        </li>

                        <div className="divider my-1"></div>

                        {/* View Profile */}
                        <li>
                            <Link href="/profile">
                                View Profile
                            </Link>
                        </li>

                        {/* Sign Out */}
                        <li>
                            <button
                                onClick={handleSignOut}
                                className="text-red-600"
                            >
                                Sign Out
                            </button>
                        </li>

                    </ul>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Link
                        href="/sing_in"
                        className="btn btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white"
                    >
                        সাইন ইন
                    </Link>

                    <Link
                        href="/sign_up"
                        className="btn bg-green-800 text-white border-none hover:bg-green-900"
                    >
                        সাইন আপ
                    </Link>
                </div>
            )}
        </div>
    );
};

export default UserInformation;
