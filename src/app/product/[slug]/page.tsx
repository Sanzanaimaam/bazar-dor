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

const ProductDetails = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    const product = await getProduct(slug);

    if (!product) {
        return <p className="text-center py-10">Product পাওয়া যায়নি!</p>;
    }

    return (
        <section className="max-w-6xl mx-auto px-4 py-10">

            {/* Product Information */}
            <div className="border rounded-xl p-6">
                <div className="text-7xl mb-4">
                    {product.image}
                </div>

                <h1 className="text-3xl font-bold">
                    {product.nameBn}
                </h1>

                <p className="text-gray-500 mt-2">
                    {product.categoryIcon} {product.categoryNameBn}
                </p>

                <p className="text-xl font-bold mt-4">
                    আজকের দাম: {product.today} টাকা
                </p>

                <p className="text-gray-500 mt-2">
                    প্রতি {product.unit}
                </p>
            </div>

            {/* Market Prices */}
            <h2 className="text-2xl font-bold mt-10 mb-5">
                বাজারভিত্তিক দাম
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
                {product.markets.map((item, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-4"
                    >
                        <h3 className="font-bold text-lg">
                            {item.market}
                        </h3>

                        <p className="text-gray-500">
                            {item.division}
                        </p>

                        <p className="mt-3">
                            সর্বনিম্ন: {item.min} টাকা
                        </p>

                        <p>
                            সর্বোচ্চ: {item.max} টাকা
                        </p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ProductDetails;