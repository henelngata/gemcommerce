import Image from "next/image";
import React from "react";
const ShieldIcon = () => (
  <Image
    src="/shield.svg"
    alt="Shield"
    width={16}
    height={16}
    className="w-4 h-4"
  />

);
/**
 * Features Data Arrays
 * Each feature contains an icon, title, and description.
 * Used to render the left and right feature columns in the Hero component.
 * Helps keep the component DRY and scalable.
 */

const features = [
  {
    icon: "/real-food.svg",
    title: "Real Food",
    description: "Wholesome recipes for dogs with real meat and veggies.",
  },
  {
    icon: "/pet-bowl.svg",
    title: "Premium Ingredient",
    description: "Elevating pet care with unmatched safety and quality.",
  },
];

const rightFeatures = [
  {
    icon: "/pet-food.svg",
    title: "Made Fresh",
    description:
      "We prioritize maintaining the integrity of whole foods and nutrition.",
  },
  {
    icon: "/vet.svg",
    title: "Vet Developed",
    description:
      "We raise the bar for dog nutrition, surpassing industry expectations.",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-white flex place-content-center py-20">
      {/* Use <header> because this component represents the top/banner content of the page */}
      <header className="m-auto flex max-w-7xl flex-col items-center w-[80%] ">
        {/* Title */}
        <h1 className="max-w-2xl text-center text-[40px] font-semibold leading-tight  text-gray-900 md:mb-16 md:text-5xl lg:text-[40px]">
          What makes us different<br></br> makes them stronger
        </h1>

        {/* Feature Cards Grid */}
        <div className="mb-12 w-full  grid grid-cols-1 gap-7 md:grid-cols-3 md:mb-16 items-center">
          {/* Left Features Column as a list of features */}
          <ul className="flex flex-col gap-6 md:gap-6 " aria-label="left features">
            {features.map((feature, index) => (
              // Each feature is a list item describing a specific benefit
              <li
                key={index}
                className="flex  gap-6 md:items-start md:text-left"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <div>
                  <h3 className="mb-2 text-[19px] font-semibold text-[#161723]">
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Center - Large Image as a figure */}
          <figure className="flex h-auto w-full items-center justify-center md:h-96">
            <Image
              src="/pie.svg"
              alt="Healthy dog meal"
              width={370}
              height={370}
              className="h-[370px] w-[370px] object-cover"
            />
          </figure>

          {/* Right Features Column as a list */}
          <ul className="flex flex-col gap-6 md:gap-6" aria-label="right features">
            {rightFeatures.map((feature, index) => (
              <li
                key={index}
                className=" flex gap-6 md:items-start md:text-left"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="h-15 w-15"
                />
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Button and Payment Section Container */}
        <div className="flex w-full max-w-lg flex-col items-center gap-4 md:gap-4">
          {/* CTA Button */}
          <button
            className="w-full bg-[#EE6F4B] px-10 py-3 text-center font-semibold text-white transition-colors hover:bg-orange-600 md:px-10 md:py-3 rounded-md text-base "
            style={{
              borderRadius: "6px",
              padding: "12px 40px",
            }}
          >
            Get your dog&apos;s healthy meal today!
          </button>

          {/* Trust Section - placed in an aside as supporting information for the CTA */}
          <aside className="flex flex-col items-center gap-4" aria-label="trust and payments">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldIcon />

              <span>30-day money back guarantee</span>
              <Image
                src={"/Payments.svg"}
                alt={"Payment Methods"}
                className="h-6 w-auto"
                width={96}
                height={24}
              />
            </div>
          </aside>
        </div>
      </header>
    </section>
  );
}
