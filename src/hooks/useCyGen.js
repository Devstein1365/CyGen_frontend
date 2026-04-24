import { useContext } from "react";
import { CyGenContext } from "../context/CyGenContextObject";

export default function useCyGen() {
  const context = useContext(CyGenContext);
  if (!context) {
    throw new Error("useCyGen must be used within CyGenProvider");
  }
  return context;
}
