import Link from "next/link";

const GREEN = "#0F6A36";
const GREEN_DARK = "#0B5429";
const YELLOW = "#F6E81E";

interface ProductType {
    id: string;
    slug: string;
    image: string;
    nameBn: string;
    today: number;
    change: {
        dir: "up" | "down" | "same";
        pct: number;
    };
}

const AllProducts = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const allProducts: ProductType[] = await res.json();

    return (
        <section id="সব-পণ্য" className="max-w-6xl mx-auto px-4 py-10 scroll-mt-16">

            {/* Heading */}
            <div className="mb-6 flex items-end justify-between">
                <div>
                    <h2
                        className="text-2xl sm:text-3xl font-extrabold"
                        style={{ color: GREEN_DARK }}
                    >
                        সব পণ্য
                    </h2>
                    <span
                        className="mt-2 block h-1 w-10 rounded-full"
                        style={{ backgroundColor: YELLOW }}
                    ></span>
                </div>

                <p className="text-sm text-gray-600">
                    {allProducts.length.toLocaleString("bn-BD")}টি পণ্য
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                {allProducts.map((item) => {
                    const isUp = item.change.dir === "up";
                    const isDown = item.change.dir === "down";

                    // up = red, down = green, same = gray
                    const badgeColor = isUp
                        ? "bg-red-50 text-red-600"
                        : isDown
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-500";

                    const statusText = isUp
                        ? "দাম বেড়েছে"
                        : isDown
                            ? "দাম কমেছে"
                            : "দাম অপরিবর্তিত";

                    return (
                        <Link
                            href={`/product/${item.slug}`}
                            key={item.id}
                            className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#0F6A36]/40"
                        >
                            {/* Yellow line that slides in on hover */}
                            <span
                                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                style={{ backgroundColor: YELLOW }}
                            ></span>

                            {/* Image panel */}
                            <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#F2F7F2] to-[#FFF9C4]">
                                <div
                                    className="absolute h-24 w-24 rounded-full opacity-60 blur-xl"
                                    style={{ backgroundColor: `${YELLOW}80` }}
                                ></div>

                                <span className="relative text-7xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                                    {item.image}
                                </span>

                                {/* Price change badge */}
                                <span
                                    className={`absolute left-2 top-2 rounded-full px-2 py-0.5 text-xs font-bold ${badgeColor}`}
                                >
                                    {isUp ? "▲" : isDown ? "▼" : "–"}{" "}
                                    {Number(item.change.pct).toLocaleString("bn-BD")}%
                                </span>
                            </div>

                            {/* Details */}
                            <div className="flex flex-1 flex-col px-1 pt-3">
                                <h3 className="line-clamp-1 text-lg font-bold text-gray-800">
                                    {item.nameBn}
                                </h3>

                                <p className="text-xs text-gray-500">প্রতি কেজি</p>

                                <p className="mt-3 flex items-baseline gap-1">
                                    <span
                                        className="text-2xl font-extrabold"
                                        style={{ color: GREEN }}
                                    >
                                        {Number(item.today).toLocaleString("bn-BD")}
                                    </span>
                                    <span className="text-sm text-gray-600">টাকা</span>
                                </p>

                                <p
                                    className={`mt-1 text-xs font-semibold ${isUp
                                            ? "text-red-600"
                                            : isDown
                                                ? "text-green-700"
                                                : "text-gray-500"
                                        }`}
                                >
                                    {statusText}
                                </p>

                                <span
                                    className="mt-4 flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold text-[#0F6A36] ring-1 ring-[#0F6A36]/25 transition-colors duration-300 group-hover:bg-[#0F6A36] group-hover:text-white group-active:bg-[#0B5429] group-active:text-white"
                                >
                                    বিস্তারিত দেখুন
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default AllProducts;