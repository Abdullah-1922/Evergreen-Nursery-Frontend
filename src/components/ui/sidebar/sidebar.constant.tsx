/* eslint-disable react-refresh/only-export-components */
export const plantCategories =[
  'Default',
  'offices',
  'home',
  'outDoor',
  'garden',
  'low-water'
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
