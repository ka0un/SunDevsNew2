import {
  SundevsNavbar,
  SundevsHero,
  SundevsAbout,
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
      <SundevsAbout />
      <SundevsProducts />
      <SundevsTestimonials />
      <SundevsContact />
      <SundevsFooter />
      <BackToTop />
    </>
  );
}
