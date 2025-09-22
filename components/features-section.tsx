import Image from "next/image";
import { Check } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="space-y-24">
        {/* Feature 1: Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <Image
              src="/image1about.png"
              alt="Modern web development with analytics dashboard"
              width={420}
              height={238}
              className="rounded-2xl shadow-2xl w-[70%] h-auto mx-auto"
              priority
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B1C9EF]">
                <Check
                  className="h-5 w-5 text-white"
                  strokeWidth={3}
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </span>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                  Get a website that is built with modern ways and adapted to
                  your needs.
                </h3>
                <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
                  I use the latest tech to build websites that look great, work
                  smoothly, and fit your business needs - and I can also work
                  with your existing setup if you already have one in place.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B1C9EF]">
                <Check
                  className="h-5 w-5 text-white"
                  strokeWidth={3}
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </span>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                  Content today <span className="underline">must</span> be
                  working on both mobile screen-sizes, desktops and all devices
                  inbetween.
                </h3>
                <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
                  I design your site to look and work great on any device -
                  phone, tablet, or desktop.
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-2">
            <Image
              src="/image2about.png"
              alt="Responsive mobile dashboard design"
              width={540}
              height={810}
              className="w-full h-auto max-w-xl lg:max-w-2xl mx-auto transform scale-90"
            />
          </div>
        </div>

        {/* Feature 3: Image Left, Text Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative overflow-visible">
            <Image
              src="/image3about.png"
              alt="LEJTECH website showcase on laptop"
              width={760}
              height={506}
              className="w-full h-auto transform scale-110"
            />
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-5">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#B1C9EF]">
                <Check
                  className="h-5 w-5 text-white"
                  strokeWidth={3}
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </span>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
                  Websites today require good SEO, speed, security and a modern
                  look and design - something that LEJTECH can deliver.
                </h3>
                <p className="mt-2 text-lg text-muted-foreground leading-relaxed">
                  I will design your website so it shows up and ranks better in
                  search engines, loads fast, stays secure, and looks great.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
