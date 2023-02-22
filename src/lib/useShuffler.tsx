import { useCallback, useEffect, useState } from "react";

type DeltaFunc = (delta: number) => void;

const useShuffler = (images: string[]): [string, DeltaFunc] => {
  const [id, setId] = useState(0);
  const [img, setImg] = useState(images[0] || "");

  const step = useCallback(
    (delta: number) => {
      const lastId = images.length;
      const newId = (id + lastId + delta) % lastId;
      setId(newId);
    },
    [images, id]
  );

  useEffect(() => {
    setImg(images[id]);
  }, [id]);

  return [img, step];
};

export default useShuffler;
