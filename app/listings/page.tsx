import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { properties } from "./data";
import PropertyCard from "./PropertyCard";

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-24">
        <header className="bg-white shadow-sm py-6">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-gray-800">All Properties</h1>
            <p className="text-gray-500 mt-1">
              Explore our entire collection of premium properties
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}