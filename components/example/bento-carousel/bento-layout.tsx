import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className="overflow-x-auto">
      <div
        className={cn(
          "grid auto-rows-[22rem] gap-4 min-w-max", // `min-w-max` akan memastikan grid tidak mengecil saat data bertambah
          className,
        )}
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} // Sesuaikan jumlah kolom
      >
        {children}
      </div>
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: string;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative font-serif  bg-center bg-cover flex flex-col justify-end overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
    style={{
      backgroundImage: background ? `url(${background})` : undefined,
    }}
  >
    {/* <div>{background}</div> */}
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 ">
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
