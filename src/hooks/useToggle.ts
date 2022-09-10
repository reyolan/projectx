import { useState } from "react";

function useToggle(initialState: boolean) {
  const [isOpen, setIsOpen] = useState(initialState);

  const invertToggle = () => {
    setIsOpen(!isOpen);
  };

  return [isOpen, invertToggle];
}

export default useToggle;
