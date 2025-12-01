"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const lampRef = useRef<HTMLImageElement | null>(null);
  const booksRef = useRef<HTMLImageElement[]>([]);

  // ENTRY ANIMATION
  useGSAP(() => {
    const tl = gsap.timeline({ ease: "power3.out" });

    tl.from(".hero-title", { y: 70, opacity: 0, duration: 1 })
      .from(".lamp", { y: -40, opacity: 0 }, "-=0.7")
      .from(".book", { x: -120, opacity: 0 }, "-=0.6")
      .from(".plant", { y: 40, opacity: 0 }, "-=0.5")
      .from(".globe", { scale: 0.7, opacity: 0 }, "-=0.5")
      .from(".projects-bar", { x: 120, opacity: 0 }, "-=0.4")
      .from(".info-bar", { x: 120, opacity: 0 }, "-=0.4");

    gsap.set([".book", ".info-bar"], {
      rotation: 0,
      transformOrigin: "center center",
    });

    const bookTimeline = gsap.timeline({ delay: 1.5 });

    bookTimeline.to(".book", {
      x: 0,
      rotation: -10,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    bookTimeline.to(
      ".info-bar",
      {
        x: 0,
        rotation: -10,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=0.8"
    );

    bookTimeline.to(
      ".projects-bar",
      {
        x: -20,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }, []);

  // ======================================================
  // LAMPU BANDUL SUPER SMOOTH (TypeScript SAFE)
  // ======================================================
  useEffect(() => {
    const lamp = lampRef.current;
    if (!lamp) return;

    gsap.set(lamp, { transformOrigin: "50% 0%" });

    let mouseX = 0;
    let mouseY = 0;

    const idleSwing = gsap.to(lamp, {
      rotate: 3,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });

    const animate = () => {
      const rect = lamp.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const dx = mouseX - cx;

      const dist = Math.abs(dx);
      const influence = Math.min(dist / 150, 1);

      let sway = (dx / 120) * influence * 12;
      sway = Math.max(-12, Math.min(sway, 12));

      gsap.to(lamp, {
        rotate: sway,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });

      requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    requestAnimationFrame(animate);

    // cleanup
    return () => {
      idleSwing.kill();
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  // ==================================================
  // BUKU HOVER FALLING EFFECT
  // ==================================================
  useEffect(() => {
    const books = booksRef.current;
    const bookAnimations: Array<gsap.core.Tween | null> = [];

    const handleBookHover = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      books.forEach((book, index) => {
        const rect = book.getBoundingClientRect();
        const bx = rect.left + rect.width / 2;
        const by = rect.top + rect.height / 2;

        const dist = Math.sqrt((mouseX - bx) ** 2 + (mouseY - by) ** 2);

        if (dist < 120) {
          if (bookAnimations[index]) {
            bookAnimations[index]!.kill();
          }

          const pushX = (Math.random() - 0.5) * 50;
          const pushY = -25 - Math.random() * 15;
          const rotation = (Math.random() - 0.5) * 25;

          const tl = gsap.timeline();

          tl.to(book, {
            x: `+=${pushX}`,
            y: `+=${pushY}`,
            rotation: `+=${rotation}`,
            duration: 0.3,
            ease: "power2.out",
            zIndex: 100,
          })
            .to(book, {
              y: 0,
              duration: 0.6,
              ease: "bounce.out",
            })
            .to(book, {
              x: 0,
              rotation: index === 2 ? -10 : index === 1 ? -10 : 0,
              duration: 0.8,
              ease: "power3.out",
              delay: 0.3,
              zIndex: 1,
            });

          bookAnimations[index] = tl;
        }
      });
    };

    window.addEventListener("mousemove", handleBookHover);

    return () => {
      window.removeEventListener("mousemove", handleBookHover);
      bookAnimations.forEach((anim) => anim?.kill());
    };
  }, []);

  const addBookRef = (el: HTMLImageElement | null) => {
    if (el && !booksRef.current.includes(el)) booksRef.current.push(el);
  };

  // ======================================================
  // RETURN UI
  // ======================================================
  return (
    <section
      ref={container}
      className="w-full h-screen flex items-center justify-center relative overflow-hidden"
    >
      <img
        ref={lampRef}
        src="/assets/images/cover/lamp.svg"
        className="lamp absolute top-0 left-1/2 -translate-x-1/2 w-[240px]"
        alt="lamp"
      />

      <img
        src="/assets/images/cover/portfolio.svg"
        className="hero-title w-[460px] z-20"
        alt="portfolio title"
      />

      <img
        ref={addBookRef}
        src="/assets/images/cover/Group 3.svg"
        className="book absolute left-[-20px] bottom-[120px] w-[230px] rotate-[-10deg] cursor-pointer"
        alt="book left"
        onClick={() => (window.location.href = "/about")}
      />

      <img
        src="/assets/images/cover/plant.svg"
        className="plant absolute left-[150px] bottom-[50px] w-[150px]"
        alt="plant"
      />

      <img
        src="/assets/images/cover/Group 4.svg"
        className="globe absolute right-[180px] bottom-[50px] w-[210px]"
        alt="globe"
      />

      <img
        ref={addBookRef}
        src="/assets/images/cover/Group 1.svg"
        className="projects-bar absolute right-0 top-0 h-screen cursor-pointer"
        alt="project bar"
        onClick={() => (window.location.href = "/projects")}
      />

      <img
        ref={addBookRef}
        src="/assets/images/cover/Group 2.svg"
        className="info-bar absolute right-[40px] bottom-[20px] w-[180px] cursor-pointer"
        alt="info bar"
        onClick={() => (window.location.href = "/info")}
      />
    </section>
  );
};

export default Hero;
