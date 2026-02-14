import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-6">Our Healthcare Services</h1>
      <p className="text-gray-600 mb-10 max-w-2xl">
        We provide trusted, vetted caregivers tailored to your needs.
      </p>

      <ServicesSection />
    </>
  );
}
