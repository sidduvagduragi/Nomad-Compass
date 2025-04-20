
import { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  description: string;
}

const DestinationSlider = () => {
  const [destinations] = useState<Destination[]>([
    {
      id: 1,
      name: "Santorini",
      location: "Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Beautiful white-washed buildings with blue domes overlooking the Aegean Sea."
    },
    {
      id: 2,
      name: "Kyoto",
      location: "Japan",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ancient temples, traditional gardens, and geisha districts in Japan's cultural capital."
    },
    {
      id: 3,
      name: "Machu Picchu",
      location: "Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "The iconic Incan citadel set high in the Andes Mountains, surrounded by cloud forests."
    },
    {
      id: 4,
      name: "Venice",
      location: "Italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "A city built on water with romantic canals, historic architecture, and gondola rides."
    },
    {
      id: 5,
      name: "Serengeti",
      location: "Tanzania",
      image: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Vast plains teeming with wildlife, home to the spectacular Great Migration."
    }
  ]);

  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {destinations.map((destination) => (
          <CarouselItem key={destination.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold">{destination.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{destination.location}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{destination.description}</p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-4">
        <CarouselPrevious className="relative mr-2" />
        <CarouselNext className="relative ml-2" />
      </div>
    </Carousel>
  );
};

export default DestinationSlider;
