"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/site-config";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: siteConfig.latitude,
  lng: siteConfig.longitude,
};

export function MapCard() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });
  return (
    <>
      {/* Map Card */}
      <Card className="overflow-hidden shadow-lg py-0 flex-3 border">
        <CardContent className="p-0">
          <div className="aspect-video">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : (
              <Skeleton className="w-full h-full" />
            )}
          </div>
        </CardContent>
        <CardFooter className="pb-3 bg-card w-full">
          <Button asChild variant="outline">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={siteConfig.mapsLink}
            >
              <MapPin />
              Open in Google Maps
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
