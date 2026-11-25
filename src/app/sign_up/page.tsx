"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignUp = () => {
    const router = useRouter();

    const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();

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
            router.push("/");
        }

        if (error) {
            console.log(error);
        }
    };

    const signUpGoogle = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/"
        });
    };

    const signUpGithub = async () => {
        await authClient.signIn.social({
            provider: "github",
            callbackURL: "/"
        });
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold text-center mb-5">
                Create Account
            </h2>

            <form
                onSubmit={onSubmit}
                className="card bg-base-100 w-full max-w-sm shadow-xl p-6"
            >
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
                        required
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
                        required
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
                        required
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
                        required
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

            <button className="btn mt-3" onClick={signUpGoogle}>
                Sign up with Google
            </button>

            <button className="btn mt-3" onClick={signUpGithub}>
                Sign up with Github
            </button>
        </div>
    );
};

export default SignUp;