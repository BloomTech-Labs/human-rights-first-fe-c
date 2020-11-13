export const useCategoryCount = incidents => {
  let category_count = {};

  if (incidents) {
    incidents.forEach(incident => {
      for (let i = 0; i < incident.categories.length; i++) {
        if (!category_count[incident.categories[i]]) {
          category_count[incident.categories[i]] = 1;
        } else {
          category_count[incident.categories[i]] += 1;
        }
      }
    });
  }

  return category_count;
};
