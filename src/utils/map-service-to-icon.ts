interface Icon {
  className: string;
  img: string;
}

const icons: Record<string, Icon> = {
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

  "Geldwechsel ": {
    className: 'money',
    img: require("@/assets/images/Groupe 6.svg")
  },
  "Western Union": {
    className: 'money',
    img: require("@/assets/images/Groupe 6.svg")
  }
}

export const mapServiceToIcon = (service: string) => {
  console.log(service);
  if (icons[service]) {
    return icons[service]
  }

  return null;
};
