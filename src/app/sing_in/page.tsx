
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
const SignIn = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const user = Object.fromEntries(formData.entries()) as {
            email: string;
            password: string;
        };

        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password,
            callbackURL: "/"
        });

        if (data) {
            console.log(data);
            redirect("/");
        }

        if (error) {
            console.log("Login Error:", error);
            console.log("Error Message:", error.message);

            toast.error(error.message || "Login failed!");
        }
    };

    const signInGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    const signInGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/"
        });
    };

    return (
        <div className="flex justify-center items-start pt-20">

            <form
                onSubmit={onSubmit}
                className="card bg-base-100 w-full max-w-sm shadow-xl p-6"
            >

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
                        required
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
                        required
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
            <button className="btn" onClick={signInGoogle}>
                Sign In with Google
            </button>
            <button className="btn" onClick={signInGithub}>
                Sign In with Github
            </button>
        </div>
    );
};

export default SignIn;
