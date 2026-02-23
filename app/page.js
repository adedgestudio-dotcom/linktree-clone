"use client";
import RiveAnimation from "./components/RiveAnimation";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import RotatingText from "./components/RotatingText";
import FlipCard from "./components/FlipCard";
import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const mobileScrollRef = useRef(null);
  const sec5ScrollRef = useRef(null);
  const sec5XRef = useRef(0);
  const [text, setText] = useState("");

  const createTree = () => {
    console.log("createTree called, text:", text);
    if (text.trim()) {
      router.push(`/generate?handle=${text}`);
    } else {
      router.push("/generate");
    }
  };

  useEffect(() => {
    let y = 0;
    let x = 0;
    let animationId1, animationId2, animationId3;

    const moveVertical = () => {
      if (!scrollRef.current) return;

      y -= 0.5;
      const containerHeight = scrollRef.current.scrollHeight / 2;
      if (Math.abs(y) >= containerHeight) {
        y = 0;
      }

      scrollRef.current.style.transform = `translateY(${y}px)`;
      animationId1 = requestAnimationFrame(moveVertical);
    };

    const moveHorizontal = () => {
      if (!mobileScrollRef.current) return;

      x -= 0.5;
      const containerWidth = mobileScrollRef.current.scrollWidth / 2;
      if (Math.abs(x) >= containerWidth) {
        x = 0;
      }

      mobileScrollRef.current.style.transform = `translateX(${x}px)`;
      animationId2 = requestAnimationFrame(moveHorizontal);
    };

    // Section 5 horizontal loop
    let sec5ResetWidth = 0;
    const sec5Speed = 0.5;

    // Calculate exact width after DOM renders
    setTimeout(() => {
      if (!sec5ScrollRef.current) return;

      const children = Array.from(sec5ScrollRef.current.children);
      const halfLength = children.length / 2;
      let totalWidth = 0;

      // Calculate width of first half (original set)
      for (let i = 0; i < halfLength; i++) {
        totalWidth += children[i].offsetWidth;
      }

      // Add gaps
      const gap = 24; // gap-6 = 24px
      totalWidth += gap * (halfLength - 1);

      sec5ResetWidth = totalWidth;

      const animateSec5 = () => {
        if (!sec5ScrollRef.current) return;

        sec5XRef.current -= sec5Speed;

        // Reset at exact calculated width
        if (Math.abs(sec5XRef.current) >= sec5ResetWidth) {
          sec5XRef.current = 0;
        }

        sec5ScrollRef.current.style.transform = `translateX(${sec5XRef.current}px)`;
        animationId3 = requestAnimationFrame(animateSec5);
      };

      animateSec5();
    }, 300);

    moveVertical();
    moveHorizontal();

    return () => {
      if (animationId1) cancelAnimationFrame(animationId1);
      if (animationId2) cancelAnimationFrame(animationId2);
      if (animationId3) cancelAnimationFrame(animationId3);
    };
  }, []);

  return (
    <main>
      <section className="relative bg-[#d2e823] min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden pt-16 ">
        <div className="flex justify-center items-start flex-col max-w-[720px] mx-auto lg:ml-[10vw] z-10 px-6 py-6 lg:py-0 ">
          <h1 className="text-[#254f1a] font-black text-[48px] md:text-[89px] leading-[0.95] tracking-tight text-center lg:text-left max-w-[600px] mt-12">
            A link in bio built for you.
          </h1>

          <p className="text-[#254f1a] font-medium py-6 text-lg sm:text-base text-center lg:text-left">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>

          <div className="input-sec flex flex-col md:flex-row gap-6 w-full max-w-2xl">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="linktr.ee/yourname"
              className="flex-1 px-6 py-4 bg-white rounded-lg focus:border-4 focus:border-green-800  focus:outline-none text-[#1e2330] font-medium"
            />
            <button className="bg-[#254f1a] hover:bg-[#1a3a12] text-white px-8 py-4 text-lg font-bold rounded-full whitespace-nowrap transition-colors cursor-pointer">
              Get started for free
            </button>
          </div>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden flex overflow-hidden pb-18">
          <div ref={mobileScrollRef} className="flex gap-6 items-center">
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

      <section className="sec-2 bg-[#2665d6] min-h-[90vh] flex flex-col md:grid md:grid-cols-2">
        <div className="video-container flex justify-center items-start flex-col max-w-[720px] mx-auto md:ml-[10vw] z-10 px-6 py-12 md:py-0 order-2 md:order-1 -mt-[44px] ">
          <video autoPlay loop muted playsInline width="100%" height="auto">
            <source src="/second-sec.webm" type="video/mp4" />
          </video>
        </div>

        <div className="input-sec flex flex-col gap-6 w-full max-w-2xl justify-center items-center md:items-start px-6 py-12 order-1 md:order-2">
          <h1 className="text-[#d2e823] font-black text-[29px] md:text-[64px] leading-[0.95] tracking-tight text-center md:text-left max-w-[600px]">
            Create and customize your Linktree in minutes
          </h1>
          <p className="text-white font-medium  text-[16px] sm:text-[22px] text-center md:text-left">
            Connect all your content across social media, websites, stores and
            more in one link in bio. Customize every detail or let Linktree
            automatically enhance it to match your brand and drive more clicks.
          </p>
          <button
            onClick={() => createTree()}
            className="bg-[#d2e823] hover:bg-[#c6de15] text-black px-8 py-4 text-lg font-bold rounded-full whitespace-nowrap transition-colors cursor-pointer"
          >
            Get started for free
          </button>
        </div>
      </section>
      <section className="sec-3 bg-[#780016] relative min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="flex justify-center items-start flex-col gap-6 max-w-[720px] mx-auto lg:ml-[10vw] z-10 px-6 py-8 lg:py-0">
          <h1 className="text-[#e9c0e9] font-black  text-[30px] md:text-[62px] leading-[0.95] tracking-tight text-center lg:text-left max-w-[600px] mt-8 lg:mt-[94px]">
            Share your Linktree anywhere you like!
          </h1>

          <p className="text-white font-medium text-[18px] sm:text-base text-center lg:text-left">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic back to your link in bio.
          </p>

          <div className="input-sec flex flex-col md:flex-row gap-6 w-full max-w-2xl">
            <button className="bg-[#e9c0e9] hover:bg-[#ea98ea] text-black px-8 py-4 text-lg font-bold rounded-full whitespace-nowrap transition-colors  ">
              Get started for free
            </button>
          </div>
        </div>

        <div className="order-2 lg:order-1 flex justify-center items-center py-8 lg:py-0">
          <div className="w-full max-w-lg h-[400px] lg:h-[600px]">
            <RiveAnimation />
          </div>
        </div>
      </section>

      <section className=" sec-4 bg-[#e8efd6] min-h-[90vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        <div className="image order-2 lg:order-1">
          <img
            src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/68b80693934ab0ccd4bf7482_home-section-4.avif"
            alt=""
          />
        </div>

        <div className="flex justify-center items-start flex-col gap-6 max-w-[620px] mx-auto md:ml-[72px] z-10 px-4 py-8 lg:py-0 order-1 lg:order-2">
          <h1 className="text-[#1e2330] font-black  text-[40px] md:text-[62px] leading-[0.95] tracking-tight text-center lg:text-left max-w-[600px] mt-8 lg:mt-[94px]  ">
            Share your Linktree anywhere you like!
          </h1>

          <p className="text-[#1e2330] font-medium text-[20px] sm:text-base text-center lg:text-left">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic back to your link in bio.
          </p>

          <div className="input-sec flex flex-col md:flex-row gap-6 w-full max-w-2xl">
            <button className="bg-[#e9c0e9] hover:bg-[#ea98ea] text-black px-8 py-4 text-lg font-bold rounded-full whitespace-nowrap transition-colors  ">
              Get started for free
            </button>
          </div>
        </div>
      </section>
      <section className="sec-5 bg-[#f3f3f1] min-h-auto flex justify-center items-center overflow-hidden pb-16 md:pb-32">
        <div className="flex justify-center items-center flex-col gap-8 mx-auto z-10 px-4 py-8">
          <h1 className="text-[48px] sm:text-[42px] md:text-[62px] lg:text-[82px] font-black text-[#1e2330] text-center px-4 max-w-[90vw] sm:max-w-none leading-tight">
            <span className="block mb-1 sm:mb-2 md:mb-4">
              Create your Linktree in
            </span>
            <span className="block -mt-1 sm:-mt-4 md:-mt-[36px]">
              <RotatingText
                text={["minutes", "seconds", "moments"]}
                duration={3000}
                className="text-[#1378d1]"
              />
            </span>
          </h1>
          <div className="flex overflow-hidden pb-18">
            <div
              ref={sec5ScrollRef}
              className="flex gap-6 items-center will-change-transform"
            >
              {/* First set */}
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="2.5rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="0.5rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="3rem"
              />
              {/* Second set */}
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="1.5rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="2rem"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="0.75rem"
              />
              {/* Third set */}
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="2.5rem"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="3rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="1.5rem"
              />
              {/* Fourth set */}
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="2.5rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="0.5rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="3rem"
              />
              {/* Fifth set */}
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="1.5rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="2rem"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="0.75rem"
              />
              {/* Sixth set */}
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#d2e823"
                textColor="#254f1a"
                borderRadius="2.5rem"
              />
              <FlipCard
                imageSrc="/fitness.png"
                alt="fitness"
                bgColor="#2665d6"
                textColor="#d2e823"
                borderRadius="1rem"
              />
              <FlipCard
                imageSrc="/pistakio.png"
                alt="pistakio"
                bgColor="#780016"
                textColor="#e9c0e9"
                borderRadius="50%"
              />
              <FlipCard
                imageSrc="/music.png"
                alt="music"
                bgColor="#1378d1"
                textColor="#ffffff"
                borderRadius="3rem"
              />
              <FlipCard
                imageSrc="/phone.png"
                alt="phone"
                bgColor="#e8efd6"
                textColor="#1e2330"
                borderRadius="1.5rem"
              />
            </div>
          </div>

          <h1 className="text-[#1e2330] font-black text-[38px] md:text-[64px] leading-tight tracking-tight text-center max-w-[90vw] md:max-w-[800px] px-4">
            The fast, friendly and powerful link in bio tool.
          </h1>
          <button className="bg-[#e9c0e9] hover:bg-[#ddb3dd] text-[#1e2330] px-18 py-4 text-lg font-semibold rounded-full transition-colors  ">
            Explore all plans
          </button>
        </div>
      </section>

      <section className="sec-7 bg-[#780016] min-h-screen px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white font-black text-[42px] md:text-[64px] text-center mb-16">
            Questions? Answered
          </h2>
          <div className="flex flex-col gap-6">
            <Accordion
              question="Why should podcasters use Linktree?"
              answer="Right now, every time you've got something new to share, you have to go to every single one of your channels to change the link in each of your bios. It's time-consuming and complicated — making it so much harder to keep everything up to date. A link in bio tool means you never have to compromise, or remove one link from your bio so you can add another. You can keep everything you want to share online in one link. When you've got a change, you only ever have to make it once."
            />
            <Accordion
              question="Is Linktree the original link in bio tool?"
              answer="Yes, Linktree pioneered the link in bio category in 2016 and has grown to become the most trusted and widely used platform, serving over 70 million users worldwide."
            />
            <Accordion
              question="Can you get paid and sell things from a Linktree?"
              answer="Absolutely! With Linktree, you can integrate payment platforms, sell products, accept tips, and monetize your content directly from your link in bio. Our Commerce Links make it easy to turn your audience into customers."
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
