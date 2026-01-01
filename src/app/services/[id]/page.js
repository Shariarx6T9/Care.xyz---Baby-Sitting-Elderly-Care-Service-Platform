
import services from "@/data/services.json";
import Link from "next/link";

export default function ServiceDetails({ params }) {
  const service = services.find(s => s.id === params.id);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">{service.name}</h2>
      <p>{service.description}</p>
      <p>Charge: ৳{service.price}/day</p>
      <Link href={`/booking/${service.id}`}>Book Service</Link>
    </div>
  );
}
