"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

/*
  Color palette
  Primary Green : #0F6A36  -> buttons, main theme
  Dark Green    : #0B5429  -> headings, important text
  Yellow        : #F6E81E  -> highlights, accents
  White         : #FFFFFF  -> cards, background
*/

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // null = ইউজার এখনো কিছু টাইপ করেনি, তাই সেশনের বর্তমান নাম দেখানো হবে
    const [editedName, setEditedName] = useState<string | null>(null);
    const name = editedName ?? user?.name ?? "";

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // লগইন না থাকলে সাইন ইন পেজে পাঠানো হবে
    useEffect(() => {
        if (!isPending && !user) router.push("/sign_in");
    }, [isPending, user, router]);

    const handleUpdate = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        // better-auth: https://better-auth.com/docs/concepts/users-accounts#update-user
        const { error } = await authClient.updateUser({
            name: name,
        });

        setLoading(false);

        if (error) {
            setError(error.message || "তথ্য আপডেট করা যায়নি। আবার চেষ্টা করুন।");
            return;
        }

        router.push("/profile");
    };

    if (isPending || !user) {
        return (
            <div className="flex flex-col items-center justify-center gap-3 pt-24">
                <span className="loading loading-spinner loading-lg text-[#0F6A36]"></span>
                <p className="text-sm text-[#0B5429]">লোড হচ্ছে...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white px-4 py-10 sm:py-16">
            <div className="mx-auto w-full max-w-md">
                <form
                    onSubmit={handleUpdate}
                    className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl"
                >
                    {/* হেডার */}
                    <div className="relative bg-[#0F6A36] px-6 pb-8 pt-7 text-center">
                        <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#F6E81E]" />
                        <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />

                        <div className="relative z-10 mx-auto mb-3 w-fit">
                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    referrerPolicy="no-referrer"
                                    className="h-20 w-20 rounded-full border-4 border-white object-cover shadow-lg"
                                />
                            ) : (
                                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#0B5429] text-3xl font-bold text-white shadow-lg">
                                    {user.name?.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>

                        <h2 className="relative z-10 text-2xl font-bold text-white">
                            প্রোফাইল আপডেট করুন
                        </h2>
                        <p className="relative z-10 mt-1 text-sm text-white/80">
                            আপনার নাম পরিবর্তন করে সংরক্ষণ করুন।
                        </p>
                    </div>

                    {/* ফর্ম */}
                    <div className="space-y-5 p-6 sm:p-8">
                        <div>
                            <label
                                htmlFor="name"
                                className="mb-2 block text-sm font-semibold text-[#0B5429]"
                            >
                                আপনার নাম
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setEditedName(e.target.value)}
                                placeholder="আপনার নাম লিখুন"
                                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 placeholder-gray-400 transition-colors focus:border-[#0F6A36] focus:outline-none focus:ring-2 focus:ring-[#0F6A36]/25"
                                required
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm font-semibold text-[#0B5429]">
                                ইমেইল
                            </label>
                            <input
                                type="email"
                                value={user.email}
                                disabled
                                className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-500"
                            />
                            <p className="mt-1.5 text-xs text-gray-500">
                                ইমেইল এখান থেকে পরিবর্তন করা যায় না।
                            </p>
                        </div>

                        {error && (
                            <div
                                role="alert"
                                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                            >
                                {error}
                            </div>
                        )}

                        <div className="space-y-3 pt-1">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0F6A36] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#0B5429] hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F6E81E] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading && (
                                    <span className="loading loading-spinner loading-xs"></span>
                                )}
                                {loading ? "আপডেট হচ্ছে..." : "তথ্য সংরক্ষণ করুন"}
                            </button>

                            <Link
                                href="/profile"
                                className="flex w-full items-center justify-center rounded-full border border-gray-200 px-6 py-3 text-sm font-semibold text-[#0B5429] transition-colors duration-200 hover:border-[#0F6A36] hover:bg-[#0F6A36]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F6A36]"
                            >
                                বাতিল করুন
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfilePage;