import type { Itechtype } from "../types/techtype";


interface TechnologyCardProps {
  technology: Itechtype;
  onAdd: (technology: Itechtype) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="card-body p-5">

        {/* Icon + Badge */}
        <div className="flex justify-between items-start">

          <img
            src={technology.icon}
            alt={technology.name}
            className="w-8 h-8 object-contain"
          />

          <span className="badge badge-info badge-soft">
            {technology.badge}
          </span>

        </div>

        {/* Name */}
        <h2 className="card-title text-lg">
          {technology.name}
        </h2>

        {/* Description */}
        <p className="text-sm text-base-content/60">
          {technology.description}
        </p>

        {/* Information */}
        <div className="flex justify-between items-center text-xs mt-3">

          <span className="badge badge-ghost">
            {technology.category}
          </span>

          <span className="text-base-content/60">
            {technology.difficulty}
          </span>

          <span>
            ⭐ {technology.rating}
          </span>

        </div>

        {/* Add Button */}
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
           className={`btn w-full mt-2 ${
    isAdded
      ? "btn-disabled"
      : "btn-neutral"
  }`}
        >
          {isAdded ? "Added to Stack" : "Add to Stack"}
        </button>

      </div>
    </div>
  );
};

export default TechnologyCard;