import type { Itechtype } from "../types/techtype";


interface StackProps {
  stack: Itechtype[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Stack = ({ stack, onRemove, onRemoveAll }: StackProps) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm rounded-2xl">
      <div className="card-body p-5">
        {/* Header */}
        <h2 className="text-lg font-bold">Your Stack</h2>

        <p className="text-sm text-base-content/50 -mt-2">
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} technologies selected.`}
        </p>

        {/* Empty State */}
        {stack.length === 0 && (
          <div
            className="
            border
            border-dashed
            border-base-300
            rounded-xl
            h-24
            flex
            items-center
            justify-center
            mt-2
          "
          >
            <p className="text-sm text-base-content/40">Your stack is empty.</p>
          </div>
        )}

        {/* Selected Technologies */}
        {stack.length > 0 && (
          <div className="space-y-2 mt-2">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="
                
                  flex
                  items-center
                  justify-between
                  border
                  border-base-200
                  rounded-lg
                  p-2

                  transition-all
                  duration-200

                  hover:-translate-y-1
                  hover:shadow-md
                  hover:border-pink-300
                  hover:bg-pink-50
                "
              >
                <div className="flex items-center gap-3">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-7 h-7 object-contain"
                  />

                  <div>
                    <h3 className="text-xs font-semibold">{technology.name}</h3>

                    <p className="text-[9px] text-base-content/50">
                      {technology.category}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="btn btn-ghost btn-xs"
                >
                  ✕
                </button>
              </div>
            ))}

            {/* Remove All */}
            <button
              onClick={onRemoveAll}
              className="btn btn-outline btn-error btn-sm w-full mt-4"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );

    
   

    
  
};

export default Stack;
