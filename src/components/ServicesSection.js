import Link from "next/link";
import services from "@/data/services";

export default function ServicesSection() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-10">Our Services</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>

            <Link
              href={`/services/${service.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
