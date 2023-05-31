import { animate } from "framer-motion";
import { type FC, useEffect, useState } from "react";

interface CounterProps {
  from?: number;
  to: number;
}

const CounterItem: FC<CounterProps> = ({ from, to }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(from || 0, to, {
      duration: 1,
      onUpdate(latest) {
        if (latest) {
          setCount(+latest.toFixed(0));
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span className="font-heading font-bold sm:text-2xl">{count}</span>;
};

export default CounterItem;
