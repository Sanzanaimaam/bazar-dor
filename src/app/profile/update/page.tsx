"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateProfilePage = () => {
    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // null = user hasn't typed yet, so we show the current name from the session
    const [editedName, setEditedName] = useState<string | null>(null);
    const name = editedName ?? user?.name ?? "";

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Not logged in -> go to sign in
    useEffect(() => {
        if (!isPending && !user) router.push("/sing_in");
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
            setError(error.message || "Could not update information");
            return;
        }

        router.push("/profile");
    };

    if (isPending || !user) {
        return (
            <div className="flex justify-center pt-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-start pt-20 px-4">
            <form
                onSubmit={handleUpdate}
                className="card bg-base-100 w-full max-w-sm border border-base-300 p-6"
            >
                <h2 className="text-2xl font-bold text-center mb-5">
                    Update Information
                </h2>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setEditedName(e.target.value)}
                        placeholder="Enter your name"
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {error && (
                    <p className="text-red-600 text-sm mb-3">{error}</p>
                )}

                <button
                    type="submit"
                    className="btn bg-green-700 text-white border-none hover:bg-green-800 w-full"
                    disabled={loading}
                >
                    {loading ? "Updating..." : "Update Information"}
                </button>

                <Link
                    href="/profile"
                    className="btn btn-ghost w-full mt-2"
                >
                    Cancel
                </Link>
            </form>
        </div>
    );
};

export default UpdateProfilePage;