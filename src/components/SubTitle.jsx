export function SubTitle({ children }) {
  return (
    <h2
      className="
        text-2xl sm:text-3xl lg:text-4xl
        font-bold tracking-tight
        text-black
        mb-6 lg:mb-8
      "
    >
      {children}
    </h2>
  );
}
