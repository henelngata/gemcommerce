import Image from "next/image"
import React from "react"
export default function Nutrition() {
    /**
     * Key Points Data Array
     * Each key point contains a percentage and description.
     * Used to render the list of key points in the Nutrition component.
     * Helps keep the component DRY and scalable.
     */
    const keyPoints = [
        {
            percentage: '97%',
            description: 'Dogs choose our dog food over leading brands because of its real functional ingredients and delicious flavor.',
        },
        {
            percentage: '84%',
            description: 'Our dog food provides superior nutrition and a patented probiotic for optimal nutrient absorption.',
        },
        {
            percentage: '92%',
            description: 'Our dog food\'s high protein and fat digestibility contribute to ideal stool quality.',
        },
    ]

    return (
        <section className="bg-[#F8F8F8] p-20">

            <div className="m-auto flex  w-[80%] my-10">
                {/* Left Column */}
                <div className="  w-[55%] p-3 mr-6">
                    {/* Header Section - use a semantic header for the block */}
                    <header className="mb-8">
                        <h2 className="text-[40px] font-semibold text-gray-900 leading-tight mb-2">
                            Nutrition is the foundation for longer, healthier lives in dogs.
                        </h2>
                        <p className="text-base leading-tight font-normal text-[#424153]">
                            Invest in your dog&apos;s future with our scientifically formulated superfood-powered supplements. Give them the nutrition they deserve and watch them thrive with vitality, energy, and the joy of a longer, healthier life.
                        </p>
                    </header>

                    {/* Key Points Section - semantic section and list */}
                    <section>
                        <h3 className="text-xl mb-4 font-bold text-gray-900">Key Points:</h3>
                        <ul className="mb-8 space-y-6">
                            {keyPoints.map((point, index) => (
                                // Each key point is an item in a list; use <li> for semantics
                                <li key={index} className="flex gap-6">
                                    <div className="shrink-0">
                                        <span className="text-[33px] font-bold text-(--primary)">{point.percentage}</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 text-base leading-relaxed">{point.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* Full Width Button */}
                        <button className="w-full bg-(--primary) text-base px-6 py-3 font-semibold rounded-lg text-white transition-colors hover:bg-orange-600">
                            Give your furry friend the gift of wholesome nutrition
                        </button>
                    </section>
                </div>

                {/* Right Column - Image as a figure for semantics */}
                <figure className="flex items-center justify-center">
                    <Image
                        src="/happy-dog.svg"
                        alt="Happy dog"

                        width={570}
                        height={570}
                    />
                </figure>
            </div>

        </section>
    )
}
