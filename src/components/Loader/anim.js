import gsap from "gsap";

export const PresenceAnim = () => {
  const tl = gsap.timeline();

  const slides = gsap.utils.toArray('.slide-in')

  slides.forEach((curS) => {
    tl.to(curS, {
      yPercent: -100,
      duration: 1,
      ease: 'power3.out'
    }, '<25%')
  })

  // tl.to(slides, {
  //   yPercent: -100,
  //   duration: 1,
  //   delay: 1,
  //   stagger: .5,
  //   ease: 'power3.out'
  // })

  return tl;
}