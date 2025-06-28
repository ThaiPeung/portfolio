"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

// -| Mui
import { Box, Button, Grid, Rating, Typography } from "@mui/material";

// -| Mui Icon(s)

// -| project
import CustomCard from "@/components/customCard";

gsap.registerPlugin(Observer);

type sliderContentType = {
  img: string;
  title: string;
  rating: number;
};

interface InfiniteScrollItem {
  content: ReactNode;
}

interface InfiniteScrollProps {
  width?: string;
  maxHeight?: string;
  negativeMargin?: string;
  items?: InfiniteScrollItem[];
  itemMinHeight?: number;
  isTilted?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  autoplayDirection?: "left" | "right";
  pauseOnHover?: boolean;
}

const Slider: React.FC<InfiniteScrollProps> = ({
  width = "100rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  isTilted = false,
  autoplay = true,
  autoplaySpeed = 0.5,
  autoplayDirection = "right",
  pauseOnHover = true,
}) => {
  const [contents, setContents] = useState<sliderContentType[]>([
    {
      img: "I",
      title: "Card",
      rating: 4,
    },
    {
      img: "II",
      title: "Card",
      rating: 5,
    },
    {
      img: "III",
      title: "Card",
      rating: 4.5,
    },
    {
      img: "IV",
      title: "Card",
      rating: 5,
    },
    {
      img: "V",
      title: "Card",
      rating: 5,
    },
    {
      img: "VI",
      title: "Card",
      rating: 4,
    },
    {
      img: "VII",
      title: "Card",
      rating: 3.5,
    },
  ]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (contents.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLDivElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemWidth = firstItem.offsetWidth;
    const itemMarginLeft = parseFloat(itemStyle.marginLeft) || 0;
    const totalItemWidth = itemWidth + itemMarginLeft;
    const totalWidth =
      itemWidth * contents.length + itemMarginLeft * (contents.length - 1);

    const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

    const scaleUp = (event: Event) => {
      const child = event.currentTarget as HTMLDivElement;
      gsap.to(child, { scale: 1.1, duration: 0.2 });
    };

    const scaleDown = (event: Event) => {
      const child = event.currentTarget as HTMLDivElement;
      gsap.to(child, { scale: 1, duration: 0.2 });
    };

    divItems.forEach((child, i) => {
      const x = i * totalItemWidth;
      gsap.set(child, { x });

      child.style.transformOrigin = "center center";

      child.addEventListener("mouseenter", scaleUp);
      child.addEventListener("mouseleave", scaleDown);
    });

    const observer = Observer.create({
      target: container,
      type: "wheel,touch,pointer",
      preventDefault: true,
      onPress: ({ target }) => {
        (target as HTMLElement).style.cursor = "grabbing";
      },
      onRelease: ({ target }) => {
        (target as HTMLElement).style.cursor = "grab";
      },
      onChange: ({ deltaY, deltaX, isDragging, event }) => {
        const d = event.type === "wheel" ? deltaY : deltaX;
        const distance = isDragging ? d * 5 : d * 3;
        divItems.forEach((child) => {
          gsap.to(child, {
            duration: 0.5,
            ease: "expo.out",
            x: `+=${distance}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
      },
    });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "right" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            x: `+=${speedPerFrame}`,
            modifiers: {
              x: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => {
          rafId = requestAnimationFrame(tick);
        };

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
        };
      } else {
        return () => {
          observer.kill();
          rafId && cancelAnimationFrame(rafId);
        };
      }
    }

    return () => {
      divItems.forEach((child) => {
        child.removeEventListener("mouseenter", scaleUp);
        child.removeEventListener("mouseleave", scaleDown);
      });
      observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [
    contents,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    negativeMargin,
  ]);

  return (
    <>
      <Box
        sx={{
          maxHeight: maxHeight,
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "450px",
          width: "85%",
          maxWidth: "1500px",
          overflow: "hidden",
          overscrollBehavior: "none",
          boxSizing: "border-box",
          margin: "0 0 50px 0",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            width: "100%",
            pointerEvents: "none",
          },
          "&::before,": {
            top: 0,
          },
          "&::after": {
            bottom: 0,
          },
        }}
      >
        <Box
          sx={{
            width: width,
            display: "flex",
            flexDirection: "row",
            overscrollBehavior: "contain",
            paddingInline: "1rem",
            cursor: "grab",
            transformOrigin: "center center",
          }}
          ref={containerRef}
        >
          {contents.map((content, i) => (
            <CustomCard
              key={i}
              duration={2000}
              width="300px"
              enableHover={true}
              backgroundDark="linear-gradient(135deg, #1a237e, #311b92)"
            >
              <Grid
                container
                direction="column"
                columns={1}
                spacing={3}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  userSelect: "none",
                }}
              >
                <Grid size="grow">
                  <Box sx={{ height: "200px" }}>{content.img}</Box>
                </Grid>
                <Grid size="grow">{content.title}</Grid>
                <Grid size="grow">
                  <Rating
                    readOnly
                    defaultValue={content.rating}
                    size="large"
                    precision={0.5}
                  />
                </Grid>
              </Grid>
            </CustomCard>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Slider;
