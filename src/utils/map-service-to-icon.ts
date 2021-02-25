const icons: Record<string, string> = {
  Gepäckaufbewahrung: require("@/assets/images/Groupe 4.svg"),
  Gepäckausgabe: require("@/assets/images/Groupe 4.svg"),
  "Businesstravel Service Center": require("@/assets/images/Groupe 5.svg"),
  "Geldwechsel ": require("@/assets/images/Groupe 6.svg"),
  "Western Union": require("@/assets/images/Groupe 6.svg")
};

export const mapServiceToIcon = (service: string) => {
  return icons[service];
};
