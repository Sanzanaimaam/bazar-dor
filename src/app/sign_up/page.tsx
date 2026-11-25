"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUp = () => {

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {
            name: string;
            email: string;
            password: string;
            confirmPassword: string;
        };

        if (user.password !== user.confirmPassword) {
            console.log("Password doesn't match");
            return;
        }

        const { confirmPassword, ...userInfo } = user;
        const { data, error } = await authClient.signUp.email({
            ...userInfo,
            callbackURL: "/"
        });

        if (data) {
            console.log(data);
            redirect("/");
        }

        if (error) {
            console.log(error);
        }
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-5">
                Create Account
            </h2>
            <form onSubmit={onSubmit} className="card bg-base-100 w-full max-w-sm shadow-xl p-6">

                {/* Name */}
                <div className="form-control mb-3">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                    />
                </div>

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
                <div className="form-control mb-3">
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

                {/* Confirm Password */}
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        className="input input-bordered w-full"
                    />
                </div>

                {/* Signup Button */}
                <button type="submit" className="btn btn-primary w-full">
                    Sign Up
                </button>

                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link href="/sing_in" className="link link-primary">
                        Sign In
                    </Link>
                </p>

            </form>
        </div>
    );
};

export default SignUp;
