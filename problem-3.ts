{
  //
  const countWordOccurrences = (sentence: string, word: string): number => {
    return sentence
      .toLowerCase()
      .split(" ")
      .filter((w) => w === word.toLowerCase()).length;
  };

//   console.log(countWordOccurrences("I love typescript", "typescript"));

  //
}
