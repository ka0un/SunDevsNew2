import {
  SundevsNavbar,
  SundevsHero,
  SundevsProducts,
  SundevsTestimonials,
  SundevsContact,
  SundevsFooter,
  ScrollProgressBar,
  BackToTop,
} from "@/components/sundevs";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <SundevsNavbar />
      <SundevsHero />
      <SundevsProducts />
      <SundevsTestimonials />
      <SundevsContact />
      <SundevsFooter />
      <BackToTop />
    </>
  );
}
