
import Link from "next/link";
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

    const data = await res.json();
    const allProducts = data;

    return (
        <section className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-5">
                সব পণ্য
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {allProducts.map((item: ProductType) => (
                    <Link
                        href={`/product/${item.slug}`}
                        key={item.id}
                        className="border p-4 rounded-lg hover:shadow-md transition"
                    >
                        <div className="text-6xl text-center mb-4">
                            {item.image}
                        </div>

                        <h3 className="font-bold text-lg">
                            {item.nameBn}
                        </h3>

                        <p className="text-gray-500 text-sm">
                            প্রতি কেজি
                        </p>

                        <p className="mt-3">
                            আজকের দাম:{" "}
                            {Number(item.today).toLocaleString("bn-BD")} টাকা
                        </p>

                        <p className={`mt-2 text-sm font-semibold ${
                            item.change.dir === "up"
                                ? "text-green-600"
                                : item.change.dir === "down"
                                ? "text-red-600"
                                : "text-gray-500"
                        }`}>
                            {item.change.dir === "up"
                                ? "▲ দাম বেড়েছে"
                                : item.change.dir === "down"
                                ? "▼ দাম কমেছে"
                                : "— দাম অপরিবর্তিত"
                            }

                            {" "}
                            {Number(item.change.pct).toLocaleString("bn-BD")}%
                        </p>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
