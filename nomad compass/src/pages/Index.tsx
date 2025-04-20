
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import DestinationSlider from "@/components/DestinationSlider";
import Footer from "@/components/Footer";

const Index = () => {
  const featuredDestinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore the city of love with its iconic Eiffel Tower and charming streets."
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Experience paradise on earth with beautiful beaches and rich culture."
    },
    {
      id: 3,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Discover the perfect blend of tradition and innovation in Japan's capital."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.4)"
      }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Discover the World</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Explore amazing destinations and create unforgettable memories
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/destinations">Explore Destinations</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Destinations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the most sought-after travel destinations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((destination) => (
            <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/destinations/${destination.id}`}>Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/destinations">View All Destinations</Link>
          </Button>
        </div>
      </div>

      {/* Destination Slider */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Experiences</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a peek at some of our travelers' most unforgettable journeys
            </p>
          </div>
          <DestinationSlider />
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact our travel experts today and start planning your dream vacation
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
