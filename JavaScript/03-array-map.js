function main03() {
  const arr = [
    { name: "cong", age: 20 },
    { name: "cong", age: 30 },
    { name: "jim", age: 20 },
  ];

  console.log(arr);

  const arrNames = arr.map((o) => o.name);
  console.log(arrNames);

  const mapNames = arr.map((o) => {
      const newObj = {};
      newObj[o.name] = o;
      return newObj;
  })
  console.log(mapNames);
}

main03();
