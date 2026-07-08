import { properties } from '../data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PropertyDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/listings" className="text-primary hover:underline">
            &larr; Back to listings
          </Link>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <Image
            src={property.image}
            alt={property.title}
            width={800}
            height={500}
            className="rounded-lg object-cover w-full h-96"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{property.title}</h1>
          <p className="text-2xl font-bold text-primary">{property.price}</p>
          <p className="text-gray-600">{property.location}</p>
          <div className="border-t pt-4">
            <h2 className="font-semibold text-lg mb-2">Description</h2>
            <p className="text-gray-700">{property.description}</p>
          </div>
          {property.features && (
            <div className="border-t pt-4">
              <h2 className="font-semibold text-lg mb-2">Features</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {property.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          <Link
            href="/contact"
            className="inline-block w-full text-center bg-primary text-white py-3 rounded-md hover:bg-primary-dark transition"
          >
            Schedule a Viewing
          </Link>
        </div>
      </main>
      <footer className="bg-gray-800 text-gray-300 py-8 text-center mt-10">
        <p>&copy; 2026 RealEstate. All rights reserved.</p>
      </footer>
    </div>
  );
}