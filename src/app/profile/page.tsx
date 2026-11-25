"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // login না থাকলে sign in page-এ পাঠাও
    useEffect(() => {
        if (!isPending && !user) router.push("/sing_in");
    }, [isPending, user, router]);

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    if (isPending || !user) {
        return (
            <div className="flex justify-center pt-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-4 space-y-4">

            {/* Heading */}
            <div>
                <h1 className="text-2xl font-bold">আমার প্রোফাইল</h1>
                <p className="text-sm opacity-70">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
            </div>

            {/* User Card */}
            <div className="card bg-base-100 border border-base-300">
                <div className="card-body flex-row items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="avatar">
                            <div className="w-20 rounded-xl">
                                {user.image ? (
                                    <img
                                        src={user.image}
                                        alt={user.name}
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <div className="bg-green-800 text-white flex items-center justify-center text-3xl font-bold w-20 h-20">
                                        {user.name?.charAt(0).toUpperCase()}
                                    </div>
                                )}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="opacity-70">{user.email}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        {/* Goes to the update route */}
                        <Link
                            href="/profile/update"
                            className="btn bg-green-700 text-white border-none hover:bg-green-800 btn-sm"
                        >
                            Update Profile
                        </Link>

                        <button
                            onClick={handleSignOut}
                            className="btn btn-outline btn-error btn-sm"
                        >
                            সাইন আউট
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;