import Image from 'next/image';
import Link from 'next/link';

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
  description?: string;
  features?: string[];
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/listings/${property.id}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={property.image}
            alt={property.title}
            width={600}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <p className="text-gray-500 text-sm">{property.location}</p>
          <p className="text-xl font-bold text-primary mt-2">{property.price}</p>
        </div>
      </div>
    </Link>
  );
}