export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white rounded-xl p-5 shadow-md
        border border-gray-100
        hover:shadow-lg hover:border-[#953177]/20
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
