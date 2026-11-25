import Link from "next/link";

const GREEN = "#0F6A36";
const GREEN_DARK = "#0B5429";
const YELLOW = "#F6E81E";

interface ProductType {
    id: number;
    slug: string;
    nameBn: string;
    categoryNameBn: string;
    categoryIcon: string;
    image: string;
    unit: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "same";
        pct: number;
    };
    markets: {
        market: string;
        division: string;
        min: number;
        max: number;
    }[];
}

const API = "https://openapi.programming-hero.com/api/bazardor/products";

const getProduct = async (param: string): Promise<ProductType | null> => {
    const value = decodeURIComponent(param);
    const res = await fetch(`${API}/${encodeURIComponent(value)}`);
    if (res.ok) {
        const data = await res.json();
        if (data?.markets) return data;
    }
    try {
        const listRes = await fetch(API);
        if (listRes.ok) {
            const raw = await listRes.json();
            const list: ProductType[] = Array.isArray(raw)
                ? raw
                : raw?.products ?? raw?.data ?? [];
            const found = list.find((p) => p.slug === value);

            if (found) {
                const detailRes = await fetch(`${API}/${found.id}`);
                if (detailRes.ok) {
                    const data = await detailRes.json();
                    if (data?.markets) return data;
                }
            }
        }
    } catch {
    }

    return null;
};

// Bangla number helpers: whole numbers stay plain, decimals show 2 digits (৬৩.৫০)
const bn = (n: number) => n.toLocaleString("bn-BD");
const bnPrice = (n: number) =>
    Number.isInteger(n)
        ? bn(n)
        : n.toLocaleString("bn-BD", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
          });

const ProductDetails = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const product = await getProduct(slug);

    if (!product) {
        return (
            <section className="max-w-6xl mx-auto px-4 py-16 text-center">
                <p className="text-lg font-semibold text-gray-700">
                    পণ্যটি পাওয়া যায়নি
                </p>
                <Link
                    href="/"
                    className="mt-4 inline-block rounded-full px-6 py-2.5 text-sm font-bold"
                    style={{ backgroundColor: GREEN, color: YELLOW }}
                >
                    হোমে ফিরে যান
                </Link>
            </section>
        );
    }

    const isUp = product.change.dir === "up";
    const isDown = product.change.dir === "down";
    const diff = Math.abs(product.today - product.yesterday);

    // Summary numbers, worked out from the market list
    const markets = product.markets;
    const hasMarkets = markets.length > 0;

    const lowest = hasMarkets
        ? markets.reduce((a, b) => (b.min < a.min ? b : a))
        : null;
    const highest = hasMarkets
        ? markets.reduce((a, b) => (b.max > a.max ? b : a))
        : null;
    const average = hasMarkets
        ? markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) /
          markets.length
        : 0;

    return (
        <section className="max-w-6xl mx-auto px-4 py-8 sm:py-10">

            {/* Breadcrumb */}
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#0F6A36] transition-colors">
                    হোম
                </Link>
                <span>›</span>
                <span className="font-semibold text-gray-800">{product.nameBn}</span>
            </nav>

            <div className="space-y-6">

                {/* Product header card */}
                <div className="flex flex-col gap-6 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between sm:p-7">

                    <div className="flex items-center gap-5">
                        <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F2F7F2] to-[#FFF9C4] text-6xl sm:h-28 sm:w-28">
                            {product.image}
                        </div>

                        <div>
                            <h1
                                className="text-2xl font-extrabold sm:text-4xl"
                                style={{ color: GREEN_DARK }}
                            >
                                {product.nameBn}
                            </h1>

                            <p className="mt-1 text-sm text-gray-500">
                                প্রতি {product.unit} · {product.categoryNameBn}
                            </p>

                            <p className="mt-2 text-sm text-gray-700">
                                {isUp || isDown ? (
                                    <>
                                        গতকালের তুলনায় আজ দাম{" "}
                                        <span
                                            className={`font-bold ${
                                                isUp ? "text-red-600" : "text-green-700"
                                            }`}
                                        >
                                            {isUp ? "বেড়েছে" : "কমেছে"}
                                        </span>{" "}
                                        · {bnPrice(diff)} টাকা
                                    </>
                                ) : (
                                    "গতকালের মতোই আছে"
                                )}
                            </p>
                        </div>
                    </div>

                    {/* Today's price box */}
                    <div
                        className="flex shrink-0 flex-col items-center rounded-2xl px-8 py-5 text-center"
                        style={{ backgroundColor: GREEN }}
                    >
                        <p className="text-sm text-green-100/80">আজকের দাম</p>

                        <p
                            className="mt-1 text-5xl font-extrabold leading-tight"
                            style={{ color: YELLOW }}
                        >
                            {bnPrice(product.today)}
                        </p>

                        <p className="text-sm text-green-100">
                            টাকা / {product.unit}
                        </p>

                        <span
                            className={`mt-3 rounded-full bg-white px-3 py-1 text-xs font-bold ${
                                isUp
                                    ? "text-red-600"
                                    : isDown
                                    ? "text-green-700"
                                    : "text-gray-500"
                            }`}
                        >
                            {isUp ? "▲" : isDown ? "▼" : "–"} {bn(product.change.pct)}%
                        </span>
                    </div>
                </div>

                {/* Summary and market table */}
                {hasMarkets && lowest && highest && (
                    <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:p-7">

                        {/* Summary */}
                        <h2
                            className="text-xl font-extrabold"
                            style={{ color: GREEN_DARK }}
                        >
                            দামের সারসংক্ষেপ
                        </h2>
                        <span
                            className="mt-2 block h-1 w-10 rounded-full"
                            style={{ backgroundColor: YELLOW }}
                        ></span>

                        <div className="mt-5 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-2xl border-l-4 border-green-600 bg-[#F7FAF7] p-4">
                                <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
                                <p className="mt-1 flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-green-700">
                                        {bnPrice(lowest.min)}
                                    </span>
                                    <span className="text-sm text-green-700">টাকা</span>
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    সবচেয়ে কম দামের বাজার
                                </p>
                                <p className="text-xs font-semibold text-gray-700">
                                    {lowest.market}
                                </p>
                            </div>

                            <div className="rounded-2xl border-l-4 border-red-500 bg-[#F7FAF7] p-4">
                                <p className="text-xs text-gray-500">সর্বাধিক দাম</p>
                                <p className="mt-1 flex items-baseline gap-1">
                                    <span className="text-3xl font-extrabold text-red-600">
                                        {bnPrice(highest.max)}
                                    </span>
                                    <span className="text-sm text-red-600">টাকা</span>
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    সবচেয়ে বেশি দামের বাজার
                                </p>
                                <p className="text-xs font-semibold text-gray-700">
                                    {highest.market}
                                </p>
                            </div>

                            <div
                                className="rounded-2xl border-l-4 bg-[#F7FAF7] p-4"
                                style={{ borderColor: YELLOW }}
                            >
                                <p className="text-xs text-gray-500">গড় দাম</p>
                                <p className="mt-1 flex items-baseline gap-1">
                                    <span
                                        className="text-3xl font-extrabold"
                                        style={{ color: GREEN_DARK }}
                                    >
                                        {bn(Math.round(average))}
                                    </span>
                                    <span
                                        className="text-sm"
                                        style={{ color: GREEN_DARK }}
                                    >
                                        টাকা
                                    </span>
                                </p>
                                <p className="mt-1 text-xs text-gray-500">
                                    প্রতি {product.unit}-এর হিসাবে
                                </p>
                            </div>
                        </div>

                        {/* Market table */}
                        <h2
                            className="mt-9 text-xl font-extrabold"
                            style={{ color: GREEN_DARK }}
                        >
                            বাজারভিত্তিক আজকের দাম
                        </h2>
                        <span
                            className="mt-2 block h-1 w-10 rounded-full"
                            style={{ backgroundColor: YELLOW }}
                        ></span>

                        <div className="mt-5 overflow-x-auto rounded-2xl ring-1 ring-black/5">
                            <table className="w-full min-w-[640px] text-sm">
                                <thead className="bg-[#F2F7F2] text-gray-600">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">বাজার</th>
                                        <th className="px-4 py-3 text-left font-semibold">বিভাগ</th>
                                        <th className="px-4 py-3 text-right font-semibold">সর্বনিম্ন</th>
                                        <th className="px-4 py-3 text-right font-semibold">সর্বাধিক</th>
                                        <th className="px-4 py-3 text-right font-semibold">গড়</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {markets.map((item, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-gray-200 odd:bg-white even:bg-[#F7FAF7] transition-colors hover:bg-[#FFF9C4]/60"
                                        >
                                            <td className="px-4 py-3 font-medium text-gray-800">
                                                {item.market}
                                            </td>
                                            <td className="px-4 py-3 text-gray-600">
                                                {item.division}
                                            </td>
                                            <td className="px-4 py-3 text-right text-gray-700">
                                                {bnPrice(item.min)} টাকা
                                            </td>
                                            <td className="px-4 py-3 text-right text-gray-700">
                                                {bnPrice(item.max)} টাকা
                                            </td>
                                            <td
                                                className="px-4 py-3 text-right font-bold"
                                                style={{ color: GREEN_DARK }}
                                            >
                                                {bnPrice((item.min + item.max) / 2)} টাকা
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductDetails;