"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const GREEN = "#0F6A36";
const YELLOW = "#F6E81E";

// Sawtooth edge on the right side of the green panel
const zigzagRight = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='40' viewBox='0 0 20 40'%3E%3Cpath d='M0 0L20 20L0 40Z' fill='%230F6A36'/%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "20px 40px",
};

const inputClass =
    "w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0F6A36] focus:ring-2 focus:ring-[#0F6A36]/20";

const SignIn = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/",
        });

        setLoading(false);

        if (error) {
            console.log("Login Error:", error);
            toast.error(error.message || "সাইন ইন করা যায়নি!");
            return;
        }

        if (data) {
            toast.success("সফলভাবে সাইন ইন হয়েছে");
            router.push("/");
            router.refresh();
        }
    };

    const signInGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    const signInGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/",
        });
    };

    return (
        <div className="flex justify-center px-4 py-10 md:py-16">

            <div className="grid w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 md:grid-cols-2">

                {/* Left green panel (desktop only) */}
                <div
                    className="relative z-10 hidden flex-col justify-between p-10 md:flex"
                    style={{ backgroundColor: GREEN }}
                >
                    <div className="pointer-events-none absolute -left-16 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

                    {/* Sawtooth edge */}
                    <div
                        className="absolute inset-y-0 -right-5 w-5"
                        style={zigzagRight}
                    ></div>

                    <Link href="/" className="relative flex items-center gap-3">
                        <div className="rounded-xl bg-white/15 p-1.5 ring-1 ring-white/20">
                            <Image
                                src="/Stack.png"
                                alt="বাজার দর logo"
                                width={40}
                                height={40}
                            />
                        </div>
                        <span className="text-xl font-extrabold text-white">
                            বাজার দর
                        </span>
                    </Link>

                    <div className="relative">
                        <h2
                            className="text-4xl font-extrabold leading-[1.3]"
                            style={{ color: YELLOW }}
                        >
                            ফিরে এসেছেন, <br />
                            স্বাগতম
                        </h2>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-green-50/80">
                            সাইন ইন করে প্রতিদিনের বাজারদর দেখুন আর দাম কমা-বাড়ার খবর
                            এক জায়গায় পান।
                        </p>
                    </div>
                </div>

                {/* Right form side */}
                <div className="p-6 sm:p-10">

                    <h1 className="text-3xl font-extrabold text-[#0B5429]">
                        সাইন ইন
                    </h1>
                    <span
                        className="mt-2 block h-1 w-10 rounded-full"
                        style={{ backgroundColor: YELLOW }}
                    ></span>
                    <p className="mt-3 text-sm text-gray-500">
                        আপনার অ্যাকাউন্টে প্রবেশ করুন
                    </p>

                    <form onSubmit={onSubmit} className="mt-6 space-y-4">

                        {/* Email */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                ইমেইল
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="আপনার ইমেইল লিখুন"
                                className={inputClass}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-1.5 block text-sm font-medium text-gray-700">
                                পাসওয়ার্ড
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                                    className={`${inputClass} pr-20`}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#0F6A36] hover:underline"
                                >
                                    {showPassword ? "লুকান" : "দেখুন"}
                                </button>
                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <Link
                                href="/forgot_password"
                                className="text-sm font-medium text-[#0F6A36] hover:underline"
                            >
                                পাসওয়ার্ড ভুলে গেছেন?
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[#0F6A36] py-3 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-[#0B5429] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading ? "সাইন ইন হচ্ছে..." : "সাইন ইন"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3 text-xs text-gray-400">
                        <span className="h-px flex-1 bg-gray-200"></span>
                        অথবা
                        <span className="h-px flex-1 bg-gray-200"></span>
                    </div>

                    {/* Social buttons */}
                    <div className="space-y-3">
                        <button
                            type="button"
                            onClick={signInGoogle}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg active:translate-y-0"
                        >
                            <svg viewBox="0 0 48 48" className="h-5 w-5">
                                <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.7-.4-3.9z" />
                                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                                <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.7-.4-3.9z" />
                            </svg>
                            Google দিয়ে সাইন ইন করুন
                        </button>

                        <button
                            type="button"
                            onClick={signInGithub}
                            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg active:translate-y-0"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                            </svg>
                            GitHub দিয়ে সাইন ইন করুন
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        অ্যাকাউন্ট নেই?{" "}
                        <Link
                            href="/sign_up"
                            className="font-bold text-[#0F6A36] hover:underline"
                        >
                            সাইন আপ করুন
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;