"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/*
  Color palette
  Primary Green : #0F6A36  -> buttons, main theme
  Dark Green    : #0B5429  -> headings, important text
  Yellow        : #F6E81E  -> highlights, accents
  White         : #FFFFFF  -> cards, background
*/

const ProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // লগইন না থাকলে সাইন ইন পেজে পাঠানো হবে
    useEffect(() => {
        if (!isPending && !user) router.push("/sign_in");
    }, [isPending, user, router]);

    const handleSignOut = async () => {
        await authClient.signOut();
        router.push("/");
    };

    if (isPending || !user) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 pt-24">
                <span className="loading loading-spinner loading-lg text-[#0F6A36]"></span>
                <p className="text-sm text-[#0B5429]">প্রোফাইল লোড হচ্ছে...</p>
            </div>
        );
    }

    const joinedAt = user.createdAt
        ? new Date(user.createdAt).toLocaleDateString("bn-BD", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : null;

    return (
        <div className="min-h-screen bg-white px-4 py-8 sm:py-12">
            <div className="mx-auto max-w-3xl space-y-6">
                {/* শিরোনাম */}
                <div>
                    <h1 className="text-3xl font-bold text-[#0B5429]">
                        আমার প্রোফাইল
                    </h1>
                    <div className="mt-2 h-1 w-14 rounded-full bg-[#F6E81E]" />
                    <p className="mt-3 text-sm text-gray-600">
                        আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন ও পরিচালনা করুন।
                    </p>
                </div>

                {/* প্রোফাইল কার্ড */}
                <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl">
                    {/* কভার */}
                    <div className="relative h-28 bg-[#0F6A36] sm:h-32">
                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#F6E81E]" />
                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
                        <div className="absolute right-16 top-10 h-16 w-16 rounded-full bg-white/10" />
                    </div>

                    <div className="px-6 pb-8 sm:px-8">
                        {/* ছবি + অ্যাকশন */}
                        <div className="-mt-12 flex flex-col gap-4 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    referrerPolicy="no-referrer"
                                    className="relative z-10 h-24 w-24 rounded-2xl border-4 border-white bg-white object-cover shadow-lg sm:h-28 sm:w-28"
                                />
                            ) : (
                                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-white bg-[#0B5429] text-4xl font-bold text-white shadow-lg sm:h-28 sm:w-28">
                                    {user.name?.charAt(0).toUpperCase()}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/profile/update"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#0F6A36] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0B5429] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z"
                                        />
                                    </svg>
                                    প্রোফাইল আপডেট করুন
                                </Link>

                                <button
                                    onClick={handleSignOut}
                                    className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-semibold text-red-600 transition-colors duration-200 hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                >
                                    সাইন আউট
                                </button>
                            </div>
                        </div>

                        {/* নাম ও ইমেইল */}
                        <div className="mt-5">
                            <h2 className="text-2xl font-bold text-[#0B5429]">
                                {user.name}
                            </h2>
                            <p className="mt-1 text-gray-600">{user.email}</p>
                        </div>

                        {/* তথ্যের তালিকা */}
                        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl border border-gray-100 border-l-4 border-l-[#0F6A36] bg-white p-4 shadow-sm">
                                <dt className="text-xs font-medium text-gray-500">
                                    পূর্ণ নাম
                                </dt>
                                <dd className="mt-1 font-semibold text-[#0B5429]">
                                    {user.name}
                                </dd>
                            </div>

                            <div className="rounded-2xl border border-gray-100 border-l-4 border-l-[#0F6A36] bg-white p-4 shadow-sm">
                                <dt className="text-xs font-medium text-gray-500">
                                    ইমেইল
                                </dt>
                                <dd className="mt-1 truncate font-semibold text-[#0B5429]">
                                    {user.email}
                                </dd>
                            </div>

                            {joinedAt && (
                                <div className="rounded-2xl border border-gray-100 border-l-4 border-l-[#F6E81E] bg-white p-4 shadow-sm sm:col-span-2">
                                    <dt className="text-xs font-medium text-gray-500">
                                        যোগদানের তারিখ
                                    </dt>
                                    <dd className="mt-1 font-semibold text-[#0B5429]">
                                        {joinedAt}
                                    </dd>
                                </div>
                            )}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;