import { founderProfilePortrait, type FounderPortraitSource } from "@/lib/brand";

export default function FounderPortrait({ sizes, alt, portrait = founderProfilePortrait }: { sizes: string; alt: string; portrait?: FounderPortraitSource }) {
  return <>
    <link rel="preload" as="image" type="image/avif" imageSrcSet={portrait.avifSet} imageSizes={sizes} fetchPriority="high" />
    <picture className="founder-responsive-picture">
      <source type="image/avif" srcSet={portrait.avifSet} sizes={sizes} />
      <img src={portrait.src} srcSet={portrait.srcSet} sizes={sizes} alt={alt} width={portrait.width} height={portrait.height} loading="eager" fetchPriority="high" decoding="async" />
    </picture>
  </>;
}
