import React, { useEffect, useRef, useState } from "react";
import { CyGenContext } from "./CyGenContextObject";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  `http://${window.location.hostname || "localhost"}:5000`;

export const CyGenProvider = ({ children }) => {
  const [telemetry, setTelemetry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const lastLoggedErrorRef = useRef("");

  const applyTelemetryResult = (result) => {
    if (!result) return;

    if (result.status === "waiting") {
      setTelemetry(null);
      setError(null);
      setLastUpdate(null);
      setLoading(true);
      setIsConnected(false);
      return;
    }

    if (!result.data) {
      return;
    }

    setTelemetry(result.data);
    const sourceTimestamp =
      result.lastSeenAt || result.data?.serverTimestamp || new Date();
    setLastUpdate(new Date(sourceTimestamp));
    setIsConnected(Boolean(result.isConnected));
    setError(
      result.isConnected
        ? null
        : "ESP8266 disconnected. Showing last known telemetry.",
    );
    setLoading(false);
  };

  // Fetch telemetry from backend
  useEffect(() => {
    const fetchTelemetry = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/measurements/latest`);
        if (!response.ok) {
          throw new Error("Failed to fetch telemetry");
        }
        const result = await response.json();
        applyTelemetryResult(result);
      } catch (err) {
        const isFetchFailure =
          err instanceof TypeError &&
          typeof err.message === "string" &&
          err.message.toLowerCase().includes("fetch");

        const nextError = isFetchFailure
          ? `Backend unreachable at ${API_BASE_URL}. Start backend and confirm port 5000 is open.`
          : err.message;

        if (lastLoggedErrorRef.current !== nextError) {
          console.error("Telemetry fetch error:", nextError);
          lastLoggedErrorRef.current = nextError;
        }

        setError(nextError);
        setLoading(false);
        setIsConnected(false);
      }
    };

    // Fetch immediately on mount
    fetchTelemetry();

    // Keep polling as fallback and for stale-connection checks.
    const interval = setInterval(fetchTelemetry, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Check connection status (consider disconnected if no update in 10 seconds)
  useEffect(() => {
    if (!lastUpdate || !telemetry) return;

    const checkConnection = setInterval(() => {
      const now = new Date();
      const timeSinceUpdate = now - lastUpdate;
      setIsConnected(timeSinceUpdate < 10000);
    }, 1000);

    return () => clearInterval(checkConnection);
  }, [lastUpdate, telemetry]);

  const formatLastUpdate = () => {
    if (!lastUpdate) return "Never";
    const now = new Date();
    const diffMs = now - lastUpdate;
    if (diffMs < 1000) return "Just now";
    if (diffMs < 60000) return `${Math.floor(diffMs / 1000)}s ago`;
    return lastUpdate.toLocaleTimeString();
  };

  const value = {
    telemetry,
    loading,
    error,
    lastUpdate,
    isConnected,
    formatLastUpdate,
    apiBaseUrl: API_BASE_URL,
  };

  return (
    <CyGenContext.Provider value={value}>{children}</CyGenContext.Provider>
  );
};
