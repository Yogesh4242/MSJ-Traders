// components/SnowEffect.jsx
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function SnowEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Snowfall
      snowflakeCount={50}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        pointerEvents: "none",
      }}
    />
  );
}
