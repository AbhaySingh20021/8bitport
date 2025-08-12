// useScrollAnimations.js (or paste into your component file)
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimations() {
  useEffect(() => {
    // safety: only run in browser
    if (typeof window === "undefined") return;

    // GLOBAL TIMELINE for page-level animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".app",            // top-level container that wraps sections
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });

    // 1) background gradient slow pan (parallax-like)
    const bgTween = gsap.to(".pixel-bg, .sunset-strip, .hero-background", {
      backgroundPosition: "200% 50%",
      ease: "none",
      duration: 30,
      repeat: -1,
      paused: true,
    });
    // play/seek handled by ScrollTrigger scrub below
    // we'll scrub it via ScrollTrigger separately:
    ScrollTrigger.create({
      trigger: ".section#about, .hero-box",
      start: "top top",
      end: "bottom+=2000 top",
      scrub: 0.6,
      onUpdate: (self) => {
        // map progress (0-1) -> background tween progress (0-1)
        bgTween.progress(self.progress);
      },
    });

    // 2) Hero reveal (headline types into place with subtle reveal)
    gsap.fromTo(
      ".hero-box .hero-title, .hero-box .hero-sub, .hero-box .cta-row",
      { y: 30, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.18,
        scrollTrigger: {
          trigger: ".hero-box",
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 3) Profile card tilt & scale on scroll (subtle)
    gsap.fromTo(
      ".profile-card",
      { y: 20, scale: 0.98, rotation: -1, autoAlpha: 0.95 },
      {
        y: 0,
        scale: 1,
        rotation: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".profile-card",
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 4) Staggered project-card reveal with lift-on-scroll + subtle rotation
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 30, autoAlpha: 0, rotateX: 4 },
        {
          y: 0,
          autoAlpha: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.02,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            // use markers: true for debugging
          },
        }
      );

      // subtle flip rotation while scrolling (parallax effect)
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (s) => {
          const rot = gsap.utils.mapRange(0, 1, 0, 6, s.progress); // 0->6deg depending on progress
          gsap.to(card, { rotationY: rot, duration: 0.2, overwrite: true });
        },
      });
    });

    // 5) Skills: staggered scale + icon float
    gsap.fromTo(
      ".skill-card",
      { y: 20, scale: 0.98, autoAlpha: 0 },
      {
        y: 0,
        scale: 1,
        autoAlpha: 1,
        duration: 0.7,
        ease: "back.out(1.1)",
        stagger: 0.08,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Per-icon idle float using small infinite tween (not scrubbed)
    gsap.utils.toArray(".skill-icon").forEach((icon, idx) => {
      gsap.to(icon, {
        y: (idx % 2 === 0) ? -6 : -10,
        duration: 2 + (idx % 3) * 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: idx * 0.08,
      });
    });

    // 6) Add a soft parallax for images/screenshots in project cards
    gsap.utils.toArray(".project-card .project-hero, .project-card img").forEach((el) => {
      gsap.to(el, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    });

    // 7) Small CTA pulse when it reaches center of viewport
    ScrollTrigger.create({
      trigger: ".cta-row",
      start: "top 60%",
      end: "top 50%",
      onEnter: () => gsap.fromTo(".cta-btn", { scale: 1 }, { scale: 1.06, duration: 0.22, yoyo: true, repeat: 1, ease: "power1.inOut" }),
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
      gsap.killTweensOf("*");
    };
  }, []);
}
