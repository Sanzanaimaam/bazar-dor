import Link from "next/link";
import ProductGrid, { CategoryItemType } from "./productGrid";

const GREEN = "#0F6A36";
const GREEN_DARK = "#0B5429";
const YELLOW = "#F6E81E";

const Category = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
    const { categoryId } = await params;

    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${categoryId}`
    );

    const category: CategoryItemType[] = await res.json();

    const categoryName = category[0]?.categoryNameBn ?? categoryId;

    return (
        <section className="max-w-6xl mx-auto px-4 py-8 md:py-10">

            {/* Breadcrumb */}
            <nav className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-600">
                <Link href="/" className="hover:text-[#0F6A36] transition-colors">
                    হোম
                </Link>
                <span>›</span>
                <span className="font-semibold text-gray-800">{categoryName}</span>
            </nav>

            {/* Category header */}
            <div className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between sm:p-7">

                <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F2F7F2] to-[#FFF9C4] text-5xl drop-shadow-sm">
                        {category[0]?.categoryIcon}
                    </div>

                    <div>
                        <h1
                            className="text-2xl font-extrabold leading-tight tracking-tight md:text-4xl"
                            style={{ color: GREEN_DARK }}
                        >
                            {categoryName}
                        </h1>
                        <span
                            className="mt-2 block h-1 w-10 rounded-full"
                            style={{ backgroundColor: YELLOW }}
                        ></span>
                        <p className="mt-2 text-sm text-gray-500">
                            আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                {/* Product count */}
                <div
                    className="flex shrink-0 flex-col items-center rounded-2xl px-8 py-4 text-center"
                    style={{ backgroundColor: GREEN }}
                >
                    <p
                        className="text-4xl font-extrabold leading-tight"
                        style={{ color: YELLOW }}
                    >
                        {category.length.toLocaleString("bn-BD")}
                    </p>
                    <p className="text-sm text-green-100">টি পণ্য</p>
                </div>
            </div>

            {/* Sort bar + count + grid (client component) */}
            <ProductGrid items={category} />
        </section>
    );
};

export default Category;