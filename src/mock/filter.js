const filtersNames = [`All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`];

const generateFilters = () => {
  return filtersNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10)
    };
  });
};

export {generateFilters};
