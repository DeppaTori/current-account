import { useLoadScript } from "@react-google-maps/api";
import Map from "./BranchSelectorMap";

export const BranchSelector = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "", // Add your API key
  });

  return isLoaded ? <Map /> : null;
};
