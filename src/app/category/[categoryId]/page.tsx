import ProductGrid, { CategoryItemType } from "./productGrid";

const Category = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    const category: CategoryItemType[] = await res.json();

    return (
        <section className="max-w-[1120px] mx-auto px-4 py-8 md:py-10">

            {/* Category header */}
            <div className="flex items-center gap-4 rounded-2xl border border-emerald-900/10 bg-white/80 px-6 py-6 shadow-[0_1px_2px_rgba(16,60,35,0.04)] backdrop-blur">
                <span className="text-5xl leading-none drop-shadow-sm">
                    {category[0]?.categoryIcon}
                </span>

                <div>
                    <h1 className="text-2xl md:text-[28px] font-bold leading-tight tracking-tight text-gray-900">
                        {category[0]?.categoryNameBn ?? categoryId}
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        {category.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>
                </div>
            </div>

            {/* Sort bar + count + grid (client component) */}
            <ProductGrid items={category} />
        </section>
    );
};

export default Category;