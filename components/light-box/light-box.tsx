"use client";

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { ImageItem } from "@/components/light-box/slides";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});

type LightBoxProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  index: number;
  slides: ImageItem[];
};

export function LightBox({ open, setOpen, index, slides }: LightBoxProps) {
  return (
    <Lightbox
      open={open}
      close={() => setOpen(false)}
      index={index}
      slides={slides}
      plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      carousel={{ finite: false }}
      animation={{ fade: 300 }}
    />
  );
}
