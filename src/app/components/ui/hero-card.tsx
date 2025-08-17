
export default function HeroCard() {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl dark:bg-gray-950">
                <img
                    src="/paisleyshawl_thumb.jpg"
                    alt="Product Image"
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
                <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold">Rugs</h3>
                    <p className="text-gray-500 dark:text-gray-400">Explore hand-crafted Adirondack rugs</p>
                </div>
            </div>
        </div>
    )
}