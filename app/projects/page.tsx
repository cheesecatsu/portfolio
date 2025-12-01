"use client";

export default function ProjectsPage() {
  return (
    <section className="w-full h-screen flex overflow-hidden">

      {/* LEFT FIXED SIDEBAR */}
      <div className="relative w-[110px]">
        <img
          src="/assets/images/cover/Group 1.svg"
          alt="sidebar"
          className="absolute inset-0 object-contain object-center"
        />
      </div>

      {/* MAIN BLUE AREA */}
      <div className="flex-1 bg-[#6E84C4] text-white relative flex">

        {/* KONTEN KANAN */}
        <div className="absolute bottom-24 right-28 space-y-7 text-right">

          {/* Bookabuku UI/UX */}
          <a
            href="https://www.figma.com/design/jzp23UcOPL217P3bjZxSjv/Bookabuku?node-id=18-384&t=2N4pXDzStf3LJFIm-1"
            target="_blank"
            className="
              text-[22px] font-bold font-rethink tracking-tight relative inline-block
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Bookabuku UI/UX ↗
          </a>

          {/* Dummy UI */}
          <a
            href="https://www.figma.com/design/wr88TqPWuGON6qDqKhlMn3/Dummy-Website-UI?node-id=0-1&t=qkVzU5b5l6ujx04K-1"
            target="_blank"
            className="
              text-[22px] font-bold font-rethink tracking-tight relative inline-block
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Dummy UI ↗
          </a>

          {/* Poster */}
          <a
            href="https://drive.google.com/drive/folders/1Ce0700FvsXkoZNRZtD8kh1DlTiQTZou_?usp=sharing"
            target="_blank"
            className="
              text-[22px] font-bold font-rethink tracking-tight relative inline-block
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Poster Designs ↗
          </a>

          {/* Logo & Clip */}
          <a
            href="https://drive.google.com/drive/folders/1gqP-rlNG1PIuafWoIxykEUE0KEPBhkMz?usp=drive_link"
            target="_blank"
            className="
              text-[22px] font-bold font-rethink tracking-tight relative inline-block
              after:content-[''] after:absolute after:left-0 after:bottom-[-3px]
              after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            Logo & Clip Design ↗
          </a>

        </div>
      </div>
    </section>
  );
}
