export default function AffirmationCard({ text, author }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-xl font-semibold text-center">{text}</p>
        {author && (
          <p className="text-right text-sm text-gray-600">- {author}</p>
        )}
      </div>
    </div>
  );
}
