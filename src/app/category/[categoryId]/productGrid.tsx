"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

export interface CategoryItemType {
    id: string;
    slug: string;
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    image: string;
    today: string;
    change: {
        dir: "up" | "down" | "neutral";
        pct: number;
    };
}

type SortKey = "default" | "price-asc" | "price-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
    { value: "default", label: "ডিফল্ট" },
    { value: "price-asc", label: "দাম: কম থেকে বেশি" },
    { value: "price-desc", label: "দাম: বেশি থেকে কম" },
];

const BN_DIGITS = "০১২৩৪৫৬৭৮৯";

/**
 * Converts a price to a real number, whether it arrives as "148", "১৪৮",
 * "১,২৫০" or "1,250.50". Returns NaN if it can't be read.
 */
const toNumber = (value: unknown): number => {
    const ascii = String(value ?? "")
        .replace(/[০-৯]/g, (d) => String(BN_DIGITS.indexOf(d)))
        .replace(/[,\s৳]/g, "");
    return ascii === "" ? NaN : Number(ascii);
};

const ProductGrid = ({ items }: { items: CategoryItemType[] }) => {
    const [sort, setSort] = useState<SortKey>("default");

    const sorted = useMemo(() => {
        if (sort === "default") return items;

        const dir = sort === "price-asc" ? 1 : -1;

        return [...items].sort((a, b) => {
            const pa = toNumber(a.today);
            const pb = toNumber(b.today);

            // Unreadable prices always go to the end
            if (Number.isNaN(pa) && Number.isNaN(pb)) return 0;
            if (Number.isNaN(pa)) return 1;
            if (Number.isNaN(pb)) return -1;

            return (pa - pb) * dir;
        });
    }, [items, sort]);

    return (
        <>
            {/* Sort bar */}
            <div className="mt-6 flex items-center justify-end gap-3 rounded-2xl border border-emerald-900/10 bg-white/80 px-6 py-4 shadow-[0_1px_2px_rgba(16,60,35,0.04)] backdrop-blur">
                <label htmlFor="sort" className="text-sm text-gray-500">
                    সাজান
                </label>

                <div className="relative">
                    <select
                        id="sort"
                        value={sort}
                        onChange={(e) => setSort(e.target.value as SortKey)}
                        className="h-9 cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white pl-3 pr-9 text-sm text-gray-800 transition hover:border-emerald-600/50 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/25"
                    >
                        {SORT_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                                {opt.label}
                            </option>
                        ))}
                    </select>

                    <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                    >
                        <path d="M5 7.5l5 5 5-5" />
                    </svg>
                </div>
            </div>

            <p className="mt-6 mb-4 text-sm text-gray-500">
                মোট {sorted.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {sorted.map((item: CategoryItemType) => (
                    <Link
                        href={`/product/${item.id}`}
                        key={item.id}
                        className="group block rounded-2xl border border-emerald-900/10 bg-white/90 p-5 shadow-[0_1px_2px_rgba(16,60,35,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-600/30 hover:shadow-[0_12px_32px_-12px_rgba(5,120,60,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
                    >

                        {/* Top: icon + name */}
                        <div className="flex items-center gap-3.5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50/70 ring-1 ring-emerald-900/5 transition-colors duration-300 group-hover:bg-emerald-100/70">
                                <span className="text-2xl leading-none">
                                    {item.image}
                                </span>
                            </div>

                            <div className="min-w-0">
                                <h3 className="truncate text-[17px] font-bold leading-snug text-gray-900">
                                    {item.nameBn}
                                </h3>
                                <p className="text-xs text-gray-500">
                                    প্রতি কেজি
                                </p>
                            </div>
                        </div>

                        {/* Bottom: price + change */}
                        <div className="mt-5 flex items-end justify-between gap-3">
                            <div>
                                <p className="text-xs text-gray-600">আজকের দাম</p>
                                <p className="mt-0.5 flex items-baseline gap-1.5 text-gray-900">
                                    <span className="text-[22px] font-extrabold leading-none tracking-tight">
                                        {toNumber(item.today).toLocaleString("bn-BD")}
                                    </span>
                                    <span className="text-sm font-medium text-gray-700">টাকা</span>
                                </p>
                            </div>

                            <span
                                title={
                                    item.change.dir === "up"
                                        ? "দাম বেড়েছে"
                                        : item.change.dir === "down"
                                        ? "দাম কমেছে"
                                        : "দাম অপরিবর্তিত"
                                }
                                className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${
                                    item.change.dir === "up"
                                        ? "bg-red-50 text-red-600"
                                        : item.change.dir === "down"
                                        ? "bg-emerald-50 text-emerald-700"
                                        : "bg-gray-100 text-gray-600"
                                }`}
                            >
                                <span aria-hidden="true" className="text-[10px]">
                                    {item.change.dir === "up"
                                        ? "▲"
                                        : item.change.dir === "down"
                                        ? "▼"
                                        : "—"}
                                </span>
                                {Number(item.change.pct).toLocaleString("bn-BD")}%
                            </span>
                        </div>

                    </Link>
                ))}

            </div>
        </>
    );
};

export default ProductGrid;