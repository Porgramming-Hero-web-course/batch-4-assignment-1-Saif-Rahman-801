{
  //
  interface Circle {
    shape: "circle";
    radius: number;
  }

  interface Rectangle {
    shape: "rectangle";
    width: number;
    height: number;
  }

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shapeInfo: Shape): number => {
    if (shapeInfo.shape === "circle") {
      return Math.PI * shapeInfo.radius ** 2;
    } else {
      return shapeInfo.width * shapeInfo.height;
    }
  };
  
  console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
  console.log(
    calculateShapeArea({
      shape: "rectangle",
      width: 4,
      height: 6,
    })
  );

  //
}
