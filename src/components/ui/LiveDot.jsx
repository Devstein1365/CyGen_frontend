export default function LiveDot({ isActive = true }) {
  return (
    <div className="relative w-3 h-3">
      <div
        className={`
          absolute inset-0 rounded-full
          ${isActive ? "bg-green-500" : "bg-gray-400"}
          transition-colors duration-300
        `}
      />
      {isActive && (
        <div
          className="absolute inset-0 rounded-full bg-green-500 animate-pulse"
          style={{
            animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          }}
        />
      )}
    </div>
  );
}
