"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  useEffect(() => {
    let y = 0;
    let x = 0;

    const moveVertical = () => {
      if (!scrollRef.current) return;

      y -= 0.5;
      const containerHeight = scrollRef.current.scrollHeight / 2;
      if (Math.abs(y) >= containerHeight) {
        y = 0;
      }

      scrollRef.current.style.transform = `translateY(${y}px)`;
      requestAnimationFrame(moveVertical);
    };

    const moveHorizontal = () => {
      if (!mobileScrollRef.current) return;

      x -= 0.5;
      const containerWidth = mobileScrollRef.current.scrollWidth / 2;
      if (Math.abs(x) >= containerWidth) {
        x = 0;
      }

      mobileScrollRef.current.style.transform = `translateX(${x}px)`;
      requestAnimationFrame(moveHorizontal);
    };

    moveVertical();
    moveHorizontal();
  }, []);

  return (
    <main>
      <section className="relative bg-[#d2e823] min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex justify-center items-start flex-col max-w-[720px] mx-auto lg:ml-[10vw] z-10 px-6 py-12 lg:py-0">
          <h1 className="text-[#254f1a] font-black text-6xl md:text-[89px] leading-[0.95] tracking-tight text-center lg:text-left max-w-[600px] mt-[94px]">
            A link in bio built for you.
          </h1>

          <p className="text-[#254f1a] font-medium py-6 text-lg sm:text-base text-center lg:text-left">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="input-sec flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <input
              type="text"
              placeholder="linktr.ee/yourname"
              className="flex-1 px-6 py-4 bg-white rounded-lg focus:border-4 focus:border-green-800  focus:outline-none text-[#1e2330] font-medium"
            />
            <button className="bg-[#254f1a] hover:bg-[#1a3a12] text-white px-8 py-4 text-lg font-bold rounded-full whitespace-nowrap transition-colors  ">
              Get started for free
            </button>
          </div>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden flex overflow-hidden pb-18">
          <div ref={mobileScrollRef} className="flex gap-4 items-center">
            {/* First set */}
            <Image
              src="/pistakio.png"
              alt="pistakio"
              width={200}
              height={200}
              className="rounded-3xl shadow-lg"
              quality={100}
              priority
            />
            <Image
              src="/music.png"
              alt="music"
              width={200}
              height={200}
              className="rounded-3xl shadow-xl"
              quality={100}
            />
            <Image
              src="/fitness.png"
              alt="fitness"
              width={200}
              height={200}
              className="rounded-3xl shadow-md"
              quality={100}
            />
            <Image
              src="/music.png"
              alt="music"
              width={200}
              height={200}
              className="rounded-3xl shadow-lg"
              quality={100}
            />
            <Image
              src="/phone.png"
              alt="phone"
              width={200}
              height={200}
              className="rounded-3xl shadow-xl"
              quality={100}
            />
            {/* Duplicate set for loop */}
            <Image
              src="/pistakio.png"
              alt="pistakio"
              width={200}
              height={200}
              className="rounded-3xl shadow-lg"
              quality={100}
            />
            <Image
              src="/music.png"
              alt="music"
              width={200}
              height={200}
              className="rounded-3xl shadow-xl"
              quality={100}
            />
            <Image
              src="/fitness.png"
              alt="fitness"
              width={200}
              height={200}
              className="rounded-3xl shadow-md"
              quality={100}
            />
            <Image
              src="/music.png"
              alt="music"
              width={200}
              height={200}
              className="rounded-3xl shadow-lg"
              quality={100}
            />
            <Image
              src="/phone.png"
              alt="phone"
              width={200}
              height={200}
              className="rounded-3xl shadow-xl"
              quality={100}
            />
          </div>
        </div>

        {/* Desktop vertical scroll */}
        <div
          ref={scrollRef}
          className="hidden lg:flex absolute right-[5vw] top-1/2 -translate-y-1/2 flex-col gap-8 items-center"
        >
          <Image
            src="/pistakio.png"
            alt="pistakio"
            width={600}
            height={600}
            className="rounded-3xl shadow-lg"
            quality={100}
            priority
          />
          <Image
            src="/music.png"
            alt="music"
            width={600}
            height={600}
            className="rounded-3xl shadow-xl"
            quality={100}
          />
          <Image
            src="/fitness.png"
            alt="fitness"
            width={600}
            height={600}
            className="rounded-3xl shadow-md"
            quality={100}
          />
          <Image
            src="/music.png"
            alt="music"
            width={600}
            height={600}
            className="rounded-3xl shadow-lg"
            quality={100}
          />
          <Image
            src="/phone.png"
            alt="phone"
            width={600}
            height={600}
            className="rounded-3xl shadow-xl"
            quality={100}
          />
          <Image
            src="/pistakio.png"
            alt="pistakio"
            width={600}
            height={600}
            className="rounded-3xl shadow-lg"
            quality={100}
          />
          <Image
            src="/music.png"
            alt="music"
            width={600}
            height={600}
            className="rounded-3xl shadow-xl"
            quality={100}
          />
          <Image
            src="/fitness.png"
            alt="fitness"
            width={600}
            height={600}
            className="rounded-3xl shadow-md"
            quality={100}
          />
          <Image
            src="/music.png"
            alt="music"
            width={600}
            height={600}
            className="rounded-3xl shadow-lg"
            quality={100}
          />
          <Image
            src="/phone.png"
            alt="phone"
            width={600}
            height={600}
            className="rounded-3xl shadow-xl"
            quality={100}
          />
        </div>
      </section>

      <section className="bg-[#2665d6] min-h-screen"></section>
      <section className="bg-[#780016] min-h-screen"></section>
      <section className="bg-[#e8efd6] min-h-screen"></section>
      <section className="bg-[#f3f3f1] min-h-screen"></section>
    </main>
  );
}
