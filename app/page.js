import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[#d2e823] min-h-[100vh] grid grid-cols-2 ">
        <div className=" flex justify-center items-center flex-col mx-w-md ml-[10vw]  ">
          <p className=" {`${poppins.className} text-[#254f1a] font-black text-7xl  ">
            A link in bio built for you .
          </p>
          <p className="text-[#254f1a] font-medium py-6 ">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
        </div>
        <div className=" flex justify-center items-center flex-col mx-w-md mr-[10vw]  "></div>
      </section>
      <section className="bg-[#2665d6] min-h-[100vh] "></section>
      <section className="bg-[#780016] min-h-[100vh] "></section>
      <section className="bg-[#e8efd6] min-h-[100vh] "></section>
      <section className="bg-[#f3f3f1] min-h-[100vh] "></section>
    </main>
  );
}
