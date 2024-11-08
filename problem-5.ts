{
  //
  const getProperty = <T, Y extends keyof T>(
    objParam: T,
    propParam: Y
  ): T[Y] => {
    return objParam[propParam];
  };

  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));

  //
}
