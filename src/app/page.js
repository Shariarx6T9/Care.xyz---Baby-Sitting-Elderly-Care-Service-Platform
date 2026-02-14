import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Trusted Baby Sitting & Elderly Care
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Professional caregivers you can rely on. Safe, compassionate, and
            always on time.
          </p>

          <div className="mt-6">
            <Link
              href="/services"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-10 text-center">
          <p className="text-blue-700 font-semibold">
            Reliable Care • Trained Professionals • Peace of Mind
          </p>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />
    </div>
  );
}
