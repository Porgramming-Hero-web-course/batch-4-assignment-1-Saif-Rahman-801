{
  //
  interface Profile {
    name: string;
    age: number;
    email: string;
  }

  const updateProfile = (
    profileParam: Profile,
    updatedParam: Partial<Profile>
  ) => {
    return { ...profileParam, ...updatedParam };
  };

  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }))

  //
}
