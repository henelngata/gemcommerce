import Image from "next/image";
import React from "react";

export default function Benefits() {
  const benefits = [
    {
      image: "/twin-dogs.svg",
      title:
        "Improve overall gastrointestinal health for better nutrient absorption",
      description:
        "Through rigorous scientific studies and consultations with veterinarians, we have created a breakthrough formula exclusively tailored to combat the health challenges prevalent in dogs. A staggering 91% of our customers have reported significant improvements in their dogs' health after incorporating our product into their diet.",
      imagePosition: "left",
    },
    {
      image: "/meal.svg",
      title:
        "Prebiotics nourish the beneficial gut bacteria, supporting digestive health",
      description:
        "Our dog food formula contains carefully selected prebiotics that work in harmony with the gut microbiota, providing the necessary nutrients for the growth and maintenance of beneficial bacteria, ultimately supporting digestive health.",
      imagePosition: "right",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-5 md:py-24">
      <div className="mx-auto max-w-6xl space-y-20">
        {benefits.map((benefit, index) => (
          // Each benefit is an article: meaningful, self-contained block of content
          <article key={index} aria-labelledby={`benefit-title-${index}`}>
            {benefit.imagePosition === "left" ? (
              // Image on left, text on right
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                {/* Use <figure> for the image to provide semantic grouping for media */}
                <figure className="flex items-center justify-center">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={570}
                    height={480}
                  />
                </figure>

                {/* Use a section for the textual content of the benefit */}
                <section className="flex flex-col justify-center">
                  <h2 id={`benefit-title-${index}`} className="mb-6 text-[40px] font-bold text-gray-900 md:text-4xl">
                    {benefit.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </section>
              </div>
            ) : (
              // Text on left, image on right
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
                {/* Textual content as a section */}
                <section className="flex flex-col justify-center">
                  <h2 id={`benefit-title-${index}`} className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                    {benefit.title}
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600">
                    {benefit.description}
                  </p>
                </section>

                {/* Use <figure> for the image to be semantic and accessible */}
                <figure className="flex items-center justify-center">
                  <Image
                    src={benefit.image}
                    alt={benefit.title}
                    width={570}
                    height={480}
                  />
                </figure>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
