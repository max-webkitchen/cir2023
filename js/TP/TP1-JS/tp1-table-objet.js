let people = [
    { name: "Doe", firstname: "John", age: 30 },
    { name: "Smith", firstname: "Alice", age: 25 },
    { name: "Johnson", firstname: "Bob", age: 35 }
  ];
  
  people.forEach(person => {
    Object.entries(person).forEach(([key, value]) => {
      console.log(`Key: ${key}, Value: ${value}`);
    });
  });