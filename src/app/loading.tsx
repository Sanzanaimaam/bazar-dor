

const ProductCardSkeleton = () => (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
        {/* ছবি */}
        <div className="aspect-square w-full rounded-xl bg-gray-200" />

        <div className="space-y-2.5 pt-4">
            {/* নাম */}
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-3 w-1/2 rounded bg-gray-200" />

            {/* দাম ও বাটন */}
            <div className="flex items-center justify-between pt-2">
                <div className="h-5 w-16 rounded bg-[#0F6A36]/15" />
                <div className="h-8 w-8 rounded-full bg-[#F6E81E]/60" />
            </div>
        </div>
    </div>
);

const Loading = () => {
    return (
        <section
            className="mx-auto max-w-6xl animate-pulse px-4 py-6 md:py-8"
            aria-busy="true"
            aria-label="পেজ লোড হচ্ছে"
        >
            {/* ব্যানার */}
            <div className="relative h-44 overflow-hidden rounded-3xl bg-[#0F6A36]/15 sm:h-60 md:h-72">
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#F6E81E]/60" />
                <div className="absolute bottom-8 left-6 space-y-3 sm:left-10">
                    <div className="h-6 w-40 rounded bg-white/70 sm:h-8 sm:w-64" />
                    <div className="h-4 w-28 rounded bg-white/60 sm:w-44" />
                    <div className="h-9 w-28 rounded-full bg-white/80" />
                </div>
            </div>

            {/* মারকিউ স্ট্রিপ */}
            <div className="mt-5 h-9 w-full rounded-full bg-gray-200" />

            {/* সেকশন শিরোনাম */}
            <div className="mb-5 mt-10 flex items-end justify-between">
                <div className="space-y-2">
                    <div className="h-6 w-44 rounded bg-gray-300" />
                    <div className="h-1 w-12 rounded-full bg-[#F6E81E]/70" />
                </div>
                <div className="h-4 w-16 rounded bg-gray-200" />
            </div>

            {/* ক্যাটাগরি */}
            <div className="mb-8 flex gap-3 overflow-hidden">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-10 w-24 shrink-0 rounded-full bg-gray-200"
                    />
                ))}
            </div>

            {/* প্রোডাক্ট গ্রিড */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                ))}
            </div>
        </section>
    );
};

export default Loading;