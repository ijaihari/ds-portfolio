export function ContactCard({ title, children, className = "" }) {
  return (
    <div
      className={`
        border border-gray-200
        rounded-2xl
        p-5 sm:p-6
        bg-white
        ${className}
      `}
    >
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
