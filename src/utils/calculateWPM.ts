const calculateWPM = (totalTyped: string, errors: number) => {
  const wordsTyped = totalTyped.trim().split(/\s+/).length;
  const baseWPM = Math.round((wordsTyped / 60) * 60);
  const adjustedWPM = Math.max(baseWPM - errors, 0);

  return adjustedWPM;
};

export { calculateWPM };
