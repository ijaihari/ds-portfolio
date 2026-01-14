export function ContactCard({ title, children }) {
  return (
    <div className="relative border border-gray-300 rounded-2xl p-5 sm:p-6 bg-white">
      <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}
