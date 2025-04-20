
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Destination data
const destinationsByContinent = {
  europe: [
    {
      id: "paris",
      name: "Paris",
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The City of Light offers iconic landmarks like the Eiffel Tower, world-class museums, charming cafés, and romantic Seine river cruises."
    },
    {
      id: "santorini",
      name: "Santorini",
      country: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Famous for its stunning white-washed buildings with blue domes, dramatic cliffs, and breathtaking sunsets over the Aegean Sea."
    },
    {
      id: "rome",
      name: "Rome",
      country: "Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The Eternal City boasts ancient ruins like the Colosseum, Vatican treasures, Renaissance masterpieces, and delicious Italian cuisine."
    },
    {
      id: "barcelona",
      name: "Barcelona",
      country: "Spain",
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f98a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Known for Gaudí's whimsical architecture, vibrant street life, beautiful beaches, and a rich cultural heritage."
    }
  ],
  asia: [
    {
      id: "tokyo",
      name: "Tokyo",
      country: "Japan",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A city where ultramodern meets traditional, with skyscrapers, historic temples, cutting-edge technology, and exquisite cuisine."
    },
    {
      id: "bali",
      name: "Bali",
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The Island of the Gods offers lush landscapes, stunning beaches, spiritual retreats, and a vibrant local culture."
    },
    {
      id: "bangkok",
      name: "Bangkok",
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1508009603885-50cf7c8dd0d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A bustling metropolis known for ornate shrines, floating markets, vibrant street life, and world-renowned street food."
    },
    {
      id: "dubai",
      name: "Dubai",
      country: "United Arab Emirates",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A futuristic city featuring the world's tallest building, artificial islands, luxury shopping, and desert adventures."
    }
  ],
  africa: [
    {
      id: "capetown",
      name: "Cape Town",
      country: "South Africa",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Where the Atlantic meets stunning mountains, offering beautiful beaches, Table Mountain, and nearby wine regions."
    },
    {
      id: "marrakech",
      name: "Marrakech",
      country: "Morocco",
      image: "https://images.unsplash.com/photo-1545041499-27c209ffb4fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A vibrant city with colorful markets, stunning palaces, peaceful gardens, and the gateway to the Atlas Mountains."
    },
    {
      id: "serengeti",
      name: "Serengeti",
      country: "Tanzania",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Home to the spectacular Great Migration and an abundance of wildlife across vast savanna landscapes."
    }
  ],
  americas: [
    {
      id: "newyork",
      name: "New York City",
      country: "United States",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The Big Apple offers iconic landmarks, world-class museums, Broadway shows, diverse neighborhoods, and endless entertainment."
    },
    {
      id: "riodejaneiro",
      name: "Rio de Janeiro",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Famous for its stunning beaches, Christ the Redeemer statue, vibrant culture, and spectacular carnival celebrations."
    },
    {
      id: "cusco",
      name: "Cusco & Machu Picchu",
      country: "Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The ancient Incan capital and gateway to the breathtaking ruins of Machu Picchu high in the Andes Mountains."
    },
    {
      id: "cancun",
      name: "Cancún",
      country: "Mexico",
      image: "https://images.unsplash.com/photo-1567341789480-419b6beba0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Crystal clear turquoise waters, white sand beaches, nearby Mayan ruins, and vibrant nightlife."
    }
  ]
};

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("europe");
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-cover bg-center" style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.5)"
      }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Explore Our Destinations</h1>
          <p className="text-xl text-white max-w-2xl">
            Discover the world's most exciting locations hand-picked by our travel experts
          </p>
        </div>
      </div>
      
      {/* Destinations Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Tabs defaultValue="europe" onValueChange={setActiveTab} className="w-full">
          <div className="mb-8">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="europe">Europe</TabsTrigger>
              <TabsTrigger value="asia">Asia</TabsTrigger>
              <TabsTrigger value="africa">Africa</TabsTrigger>
              <TabsTrigger value="americas">Americas</TabsTrigger>
            </TabsList>
          </div>
          
          {Object.keys(destinationsByContinent).map((continent) => (
            <TabsContent key={continent} value={continent} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {destinationsByContinent[continent as keyof typeof destinationsByContinent].map((destination) => (
                  <Card key={destination.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{destination.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{destination.country}</p>
                      <p className="text-gray-600 mb-4 line-clamp-3">{destination.description}</p>
                      <Button asChild variant="outline" className="w-full">
                        <Link to={`/destination/${destination.id}`}>Explore</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      {/* Additional Info Section */}
      <div className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Custom Travel Packages</h2>
              <p className="text-lg text-gray-600 mb-4">
                Don't see your dream destination listed? Our travel experts can create a custom itinerary just for you.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're looking for a relaxing beach getaway, an adventure-filled expedition, or a cultural immersion, we can help design the perfect trip tailored to your interests, timeline, and budget.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Request Custom Package</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Custom travel planning" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Destinations;
