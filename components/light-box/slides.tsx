"use client";

export type ImageItem = {
  src: string;
  width: number;
  height: number;
};

const images: ImageItem[] = [
  { src: "/1.jpg", width: 3840, height: 5760 },
  { src: "/2.jpg", width: 3840, height: 5070 },
  { src: "/3.jpg", width: 3840, height: 5120 },
  { src: "/4.jpg", width: 3840, height: 5120 },
  { src: "/5.jpg", width: 3840, height: 5120 },
  { src: "/6.jpg", width: 3840, height: 5120 },
  { src: "/7.jpg", width: 3840, height: 5120 },
  { src: "/8.jpg", width: 3840, height: 5120 },
];

const slides: ImageItem[] = images.map(({ src, width, height }) => ({
  src,
  width,
  height,
}));

export default slides;
