
import { use, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import Stack from "./Stack";

import type { Itechtype } from "../types/techtype";

interface TechProps {
  techpromise: Promise<Itechtype[]>;
}

const Technologies = ({ techpromise }: TechProps) => {
  const technologies = use(techpromise);

  const [stack, setStack] = useState<Itechtype[]>([]);

  
  const handleAdd = (technology: Itechtype) => {
    // Check duplicate using current stack
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    // Add technology
    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  
  const handleRemove = (id: string) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    if (!removedTechnology) {
      return;
    }

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    toast.info(
      `${removedTechnology.name} removed from your stack!`
    );
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning(
        "Your stack is already empty!"
      );

      return;
    }

    setStack([]);

    toast.success(
      "All technologies removed!"
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        {/* Technology Cards */}
        <div className="lg:col-span-3">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

            {technologies.map((technology) => {

              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAdd={handleAdd}
                  isAdded={isAdded}
                />
              );
            })}

          </div>
        </div>

        {/* Your Stack */}
        <div className="lg:col-span-1">

          <Stack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>

      </div>

    </section>
  );
};

export default Technologies;