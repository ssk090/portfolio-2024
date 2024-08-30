import React from "react";

export const TechIcon = ({ components }: { components: React.ElementType }) => {
  const Component = components;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 abs">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(71 85 105)" />
          <stop offset="100%" stopColor="rgb(3 105 161)" />
        </linearGradient>
      </svg>
    </>
  );
};
