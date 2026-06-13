export default function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div className="mb-16">
      <p className="text-purple-400 mb-2">
        {subtitle}
      </p>

      <h2 className="text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}