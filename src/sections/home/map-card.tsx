"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: -1.2822459265610915,
  lng: 36.82102119893441,
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
              href="https://www.google.com/maps/place/Shoeempire/@-1.282415,36.8203514,19.7z/data=!4m10!1m2!2m1!1sshoe+empire!3m6!1s0x182f10d4126dd1bf:0x3b5b7acba01d070e!8m2!3d-1.2822572!4d36.8210239!15sCgtzaG9lIGVtcGlyZVoNIgtzaG9lIGVtcGlyZZIBDmNsb3RoaW5nX3N0b3Jl4AEA!16s%2Fg%2F11f3wly07y?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
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
