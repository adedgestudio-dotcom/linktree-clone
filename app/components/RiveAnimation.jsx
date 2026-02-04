"use client";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

export default function RiveAnimation() {
  const { RiveComponent } = useRive({
    // Use Linktree's .riv file URL
    src: "https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/680faadc793de4a67df69d04_homepage_image_3.riv",

    // Animation settings (from the data attributes you showed)
    stateMachines: "State Machine",
    artboard: "Homepage_image 3",
    autoplay: true,

    // Layout settings
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
