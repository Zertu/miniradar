export default petid => {
  const petlist = localStorage.getItem("pet");
  console.log(petid)
  if (petlist) {
    const list = JSON.parse(petlist);
    return list.find(pet => pet.Id === petid);
  }
};
