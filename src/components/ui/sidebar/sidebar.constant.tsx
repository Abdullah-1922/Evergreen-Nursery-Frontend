/* eslint-disable react-refresh/only-export-components */
export const plantCategories = [
  "Default",
  "Japanese Maple Trees",
  "Crape Myrtle Trees",
  "Arborvitae Trees",
  "Magnolia Trees",
  "Privacy Trees",
  "Cherry Laurels",
  "Barberry",
  "Hydrangeas",
  "Wisteria Vines",
  "Rhododendron",
  "Juniper Trees",
  "Perennials",
];

export const CategorySelectForm = plantCategories.map((cat) => {
  if (cat == "Default") {
    return;
  }
  return <option value={cat}>{cat}</option>;
});

// eslint-disable-next-line react-refresh/only-export-components
export const categorySelect = plantCategories.map((category) => {
  return {
    value: category,
    label: category.toUpperCase(),
  };
});
