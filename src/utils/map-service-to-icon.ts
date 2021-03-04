interface Icon {
  className: string;
  img: string;
}

export const icons: Record<string, Icon> = {
  Gepäckaufbewahrung: {
    className: 'luggage',
    img: require("@/assets/images/Groupe 4.svg"),
  },
  Gepäckausgabe: {
    className: 'luggage',
    img: require("@/assets/images/Groupe 4.svg")
  },
  "Businesstravel Service Center": {
    className: 'lunge',
    img: require("@/assets/images/Groupe 5.svg"),
  },
  Geldwechsel: {
    className: 'money',
    img: require("@/assets/images/Groupe 6.svg")
  },
  "Western Union": {
    className: 'money',
    img: require("@/assets/images/Groupe 6.svg")
  }
}

export const mapServiceToIcon = (icons: Record<string, Icon>, service: string | undefined): Icon | null => {
  if (service && icons[service]) {
    return icons[service]
  }

  return null;
};
