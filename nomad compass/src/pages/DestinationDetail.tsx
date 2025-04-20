
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import EnquiryForm from "@/components/EnquiryForm";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Sample destination data - would normally come from a database
const destinations = {
  "paris": {
    id: "paris",
    name: "Paris",
    country: "France",
    images: [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1520939817895-060bdaf4bc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Montmartre",
      "Seine River Cruise"
    ],
    activities: [
      "Visit the Louvre and see the Mona Lisa",
      "Take a sunset cruise on the Seine",
      "Enjoy panoramic views from the Eiffel Tower",
      "Experience Parisian café culture",
      "Shop on the Champs-Élysées",
      "Explore the Latin Quarter"
    ],
    bestTimeToVisit: "April to June and October to early November"
  },
  "bali": {
    id: "bali",
    name: "Bali",
    country: "Indonesia",
    images: [
      "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.",
    highlights: [
      "Ubud Monkey Forest",
      "Tegallalang Rice Terraces",
      "Uluwatu Temple",
      "Sacred Monkey Forest Sanctuary",
      "Tanah Lot Temple"
    ],
    activities: [
      "Surf at Kuta Beach",
      "Visit ancient temples",
      "Trek to Mt. Batur for sunrise",
      "Take a yoga class in Ubud",
      "Experience traditional Balinese dance",
      "Explore the underwater world while diving"
    ],
    bestTimeToVisit: "April to October (dry season)"
  },
  "tokyo": {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    images: [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    description: "Tokyo, Japan's busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
    highlights: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Meiji Shrine",
      "Senso-ji Temple",
      "Shinjuku Gyoen National Garden"
    ],
    activities: [
      "Experience the bustling Tsukiji Fish Market",
      "Shop in Ginza and Harajuku",
      "Visit teamLab Borderless digital art museum",
      "Enjoy traditional Japanese cuisine",
      "Take a day trip to Mount Fuji",
      "Experience a traditional tea ceremony"
    ],
    bestTimeToVisit: "March to May and September to November"
  }
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  useEffect(() => {
    // Simulate fetching data from API
    setTimeout(() => {
      if (id && destinations[id as keyof typeof destinations]) {
        setDestination(destinations[id as keyof typeof destinations]);
        setLoading(false);
      } else {
        setError("Destination not found");
        setLoading(false);
      }
    }, 500);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading destination details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (error || !destination) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Oops! Destination Not Found</h2>
            <p className="text-lg text-gray-600 mb-6">
              We couldn't find the destination you're looking for.
            </p>
            <Button asChild>
              <a href="/destinations">Browse All Destinations</a>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Hero Section with Image Carousel */}
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {destination.images.map((image: string, index: number) => (
              <CarouselItem key={index}>
                <AspectRatio ratio={21/9}>
                  <div className="w-full h-full relative">
                    <img 
                      src={image} 
                      alt={`${destination.name} - image ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  </div>
                </AspectRatio>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
                  <p className="text-2xl text-white font-light">{destination.country}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      
      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Destination Info - 2/3 width */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activities">Activities</TabsTrigger>
                <TabsTrigger value="travel-info">Travel Info</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About {destination.name}</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {destination.description}
                </p>
                
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Highlights</h3>
                <ul className="list-disc list-inside text-lg text-gray-700 mb-8 space-y-2">
                  {destination.highlights.map((highlight: string, index: number) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </TabsContent>
              
              <TabsContent value="activities" className="mt-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Things to Do in {destination.name}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {destination.activities.map((activity: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center shrink-0 mt-1">
                        <span>{index + 1}</span>
                      </div>
                      <p className="ml-4 text-lg text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="travel-info" className="mt-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Travel Information</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Time to Visit</h3>
                    <p className="text-lg text-gray-700">{destination.bestTimeToVisit}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Getting Around</h3>
                    <p className="text-lg text-gray-700">
                      Information about local transportation options and tips for navigating {destination.name}.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Accommodation</h3>
                    <p className="text-lg text-gray-700">
                      From luxury hotels to budget-friendly options, we can help you find the perfect place to stay in {destination.name}.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Enquiry Form - 1/3 width */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enquire About {destination.name}</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below to get more information or start planning your trip.
              </p>
              <EnquiryForm destination={destination.name} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Destinations */}
      <div className="bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            You Might Also Like
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.keys(destinations)
              .filter(key => key !== destination.id)
              .slice(0, 3)
              .map(key => {
                const relatedDest = destinations[key as keyof typeof destinations];
                return (
                  <div key={key} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={relatedDest.images[0]} 
                        alt={relatedDest.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{relatedDest.name}</h3>
                      <p className="text-gray-500 text-sm mb-3">{relatedDest.country}</p>
                      <Button asChild variant="outline" className="w-full">
                        <a href={`/destination/${relatedDest.id}`}>Explore</a>
                      </Button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DestinationDetail;
