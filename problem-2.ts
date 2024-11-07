{
  //

  const removeDuplicates = (paramArr: number[]): number[] => {
    const uniqueIndexes = new Set<number>();
    return paramArr.filter((indexParamArr) => {
      if (!uniqueIndexes.has(indexParamArr)) {
        uniqueIndexes.add(indexParamArr);
        return true;
      }
      return false;
    });
  };
//   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  

  //
}
