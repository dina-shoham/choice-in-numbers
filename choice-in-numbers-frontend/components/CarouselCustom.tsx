import dynamic from "next/dynamic";
// import { Carousel } from "@material-tailwind/react";
import { ReactNode } from "react";
import Chevron from "./Chevron";

const Carousel = dynamic(
  () => import("@material-tailwind/react").then((mod) => mod.Carousel), 
  { ssr: false}
);

interface CarouselCustomProps {
  children: ReactNode;
};

export default function CarouselCustom({ children }: CarouselCustomProps) {
  return (
    <Carousel
      className="rounded-xl"
      prevArrow={({ handlePrev }) => ( <Chevron Color="accent-dark" Orientation='left' /> )}
      nextArrow={({ handleNext }) => ( <Chevron Color="accent-dark" Orientation='right' /> )}
      placeholder={null}
      onResize={() => {}}
      onResizeCapture={() => {}}
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      {children}
    </Carousel>
  );
}