
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  useEffect(() => {
    // Simple embedded map using OpenStreetMap
    const initializeMap = () => {
      if (mapRef.current) {
        setIsLoaded(true);
      }
    };

    const timer = setTimeout(initializeMap, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-64 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-lg overflow-hidden">
      {isLoaded ? (
        <iframe
          ref={mapRef}
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.5945627,12.9715987,77.6045627,12.9815987&layer=mapnik&marker=12.9765987,77.5995627"
          className="w-full h-full border-0 filter brightness-75 contrast-125"
          title="Office Location"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
            <h3 className="text-lg font-semibold mb-2">Loading Map...</h3>
            <p className="text-sm text-muted-foreground">
              123 Tech Street, Bangalore, India
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
