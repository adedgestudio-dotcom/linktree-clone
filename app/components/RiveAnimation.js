"use client";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc793de4a67df69d04_homepage_image_3.riv",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  return (
    <div className="w-full h-full">
      <RiveComponent />
    </div>
  );
}
