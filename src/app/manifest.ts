import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DWAR INDIA | Natural Stone Door Frames & Slabs",
    short_name: "Dwar India",
    description:
      "Direct Rajasthan manufacturer of 100% termite-proof natural stone door frames (Chokhats), original Kota Stone flooring slabs, and strong Bijoliya roofing slabs.",
    start_url: "/",
    display: "standalone",
    background_color: "#121110",
    theme_color: "#C9BFB2",
    icons: [
      {
        src: "/icon",
        sizes: "32x32 192x192 512x512",
        type: "image/png",
      },
    ],
  };
}
