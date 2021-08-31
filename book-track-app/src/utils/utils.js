export const mergeCssClass = (...classes) =>
  classes.filter((cssClass) => cssClass).join(" ");

export const toggleTheme = (themeName) => {
  return themeName === "light" ? "dark" : "light";
};

export const filterAfterString = (arrayToFilter, termToFilter) => {
  if (arrayToFilter && arrayToFilter.books) {
    return arrayToFilter.books.filter((arrayElement) => {
      if (termToFilter === "") {
        return arrayElement;
      } else if (
        arrayElement.title.toLowerCase().includes(termToFilter.toLowerCase())
      ) {
        return arrayElement;
      }

      return null;
    });
  }

  return [];
};

export const getElementFromList = (list, value) => {
  return list.filter((element) => {
    if (element.isbn === value) return element;
    return null;
  });
};
