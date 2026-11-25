

const ProductCardSkeleton = () => (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
        {/* ছবি */}
        <div className="mb-4 h-32 rounded-xl bg-gray-200" />

        {/* নাম ও বিবরণ */}
        <div className="mb-3 h-5 w-3/4 rounded bg-gray-200" />
        <div className="mb-5 h-3 w-1/2 rounded bg-gray-200" />

        {/* দাম ও বাটন */}
        <div className="flex items-center justify-between">
            <div className="h-6 w-24 rounded bg-[#0F6A36]/15" />
            <div className="h-8 w-8 rounded-full bg-[#F6E81E]/60" />
        </div>
    </div>
);

const Loading = () => {
    return (
        <section
            className="mx-auto max-w-6xl animate-pulse px-4 py-8 md:py-10"
            aria-busy="true"
            aria-label="পেজ লোড হচ্ছে"
        >
            {/* ব্রেডক্রাম্ব */}
            <div className="mb-5 flex gap-3">
                <div className="h-4 w-12 rounded bg-gray-200" />
                <div className="h-4 w-20 rounded bg-gray-200" />
            </div>

            {/* ক্যাটাগরি হেডার */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                <div className="h-1.5 w-full bg-[#F6E81E]/60" />

                <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                    <div className="flex items-center gap-5">
                        <div className="h-20 w-20 rounded-2xl bg-[#0F6A36]/15" />

                        <div className="space-y-3">
                            <div className="h-7 w-32 rounded bg-gray-300" />
                            <div className="h-3 w-24 rounded bg-gray-200" />
                        </div>
                    </div>

                    {/* প্রোডাক্ট সংখ্যার বক্স */}
                    <div className="h-24 w-28 rounded-2xl bg-[#0F6A36]/15" />
                </div>
            </div>

            {/* প্রোডাক্ট কার্ড */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <ProductCardSkeleton key={item} />
                ))}
            </div>
        </section>
    );
};

export default Loading;