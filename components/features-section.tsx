import Image from "next/image";

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
              width={600}
              height={340}
              className="rounded-2xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
              Get a website that is built with modern ways and adapted to your
              needs.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We leverage cutting-edge technologies and development practices to
              create websites that are not only visually stunning but also
              technically superior and perfectly tailored to your business
              requirements.
            </p>
          </div>
        </div>

        {/* Feature 2: Text Left, Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 lg:order-1">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
              Content should be working on both mobile screen sizes and desktops
              and all devices inbetween.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our responsive design approach ensures your website delivers an
              exceptional user experience across all devices, from smartphones
              to large desktop screens, maintaining functionality and visual
              appeal at every breakpoint.
            </p>
          </div>
          <div className="relative lg:order-2">
            <Image
              src="/image2about.png"
              alt="Responsive mobile dashboard design"
              width={540}
              height={810}
              className="w-full h-auto max-w-xl lg:max-w-2xl mx-auto"
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
              className="w-full h-auto transform scale-105 md:scale-110"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance">
              Websites today require good SEO, speed, security and a modern look
              and design - something that LEJTECH can deliver.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine technical excellence with aesthetic sophistication,
              ensuring your website ranks well in search engines, loads
              lightning-fast, maintains top-tier security standards, and
              captivates visitors with contemporary design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
