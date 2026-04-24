export default function StatusBadge({ text = "", color = "bg-gray-500" }) {
  return (
    <span
      className={`
        inline-block px-2.5 py-1 rounded-full text-xs font-semibold
        text-white ${color}
        transition-colors duration-300
      `}
    >
      {text}
    </span>
  );
}
