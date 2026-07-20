import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="pt-24">
        <main className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center md:text-left">
            About Tbash Global Limited
          </h1>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/tbashsign.png"
                  alt="About Tbash Global Limited"
                  width={800}
                  height={600}
                  className="object-cover w-full h-auto"
                  unoptimized
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-gray-700 leading-relaxed space-y-5 text-justify">
              <p>
                <strong>Tbash Global Limited</strong> is a forward-thinking
                real estate company committed to delivering exceptional property
                solutions that inspire confidence, create value, and transform
                lives. We specialize in helping individuals, families, and
                investors acquire quality properties through transparent
                processes, professional guidance, and customer-focused service.
              </p>

              <p>
                Built on the principles of integrity, excellence, and
                innovation, we are passionate about making real estate ownership
                simple, accessible, and rewarding. Whether you are purchasing
                your first home, investing in land, or expanding your property
                portfolio, our experienced team is dedicated to helping you make
                informed decisions every step of the way.
              </p>

              <p>
                At Tbash Global Limited, we believe that real estate is more
                than buying and selling properties—it's about creating
                opportunities, building communities, and securing a better
                future. We carefully select and develop properties that offer
                long-term value, strategic locations, and excellent investment
                potential.
              </p>

              <p className="font-semibold text-primary">
                At Tbash Global Limited, we don't just sell properties—we help
                build dreams, create lasting value, and shape thriving
                communities.
              </p>
            </div>
          </div>

          {/* CEO Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-10">
              Meet Our CEO
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="w-64 h-80 overflow-hidden shadow-2xl border-4 border-primary flex-shrink-0">
                <Image
                  src="/boss.jpg"
                  alt="CEO of Tbash Global Limited"
                  width={864}
                  height={1080}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  [CEO Name]
                </h3>
                <p className="text-primary font-medium mt-1">
                  Chief Executive Officer
                </p>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  A visionary leader with a passion for real estate excellence,
                  our CEO drives the mission and values of Tbash Global
                  Limited, ensuring every client achieves their property dreams.
                </p>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}