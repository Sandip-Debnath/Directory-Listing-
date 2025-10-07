"use client";
import { useEffect, useRef } from "react";

export default function PlacesAutocomplete({
  value = "",
  placeholder = "Search a location",
  onSelect, // ({ address, lat, lng, placeId, raw })
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    function init() {
      if (!window.google?.maps?.places || !inputRef.current) return;

      const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ["formatted_address", "geometry", "place_id", "name"],
        types: ["geocode"], // or ['establishment'] if you prefer
      });

      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (!place?.geometry) return;

        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        onSelect?.({
          address: place.formatted_address || place.name || "",
          lat,
          lng,
          placeId: place.place_id,
          raw: place,
        });
      });
    }

    // if API already loaded, init immediately; else wait for event from layout
    if (window.google?.maps?.places) init();
    else {
      const handler = () => init();
      window.addEventListener("gmaps:loaded", handler, { once: true });
      return () => window.removeEventListener("gmaps:loaded", handler);
    }
  }, [onSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      className="form-control"
      autoComplete="off"
    />
  );
}
