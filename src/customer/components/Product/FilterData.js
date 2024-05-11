export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
    ],
  },
]

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "$159 to $399" },
      { value: "400-699", label: "$400 to $699" },
      { value: "700-999", label: "$700 to $999" },
      { value: "1000-1499", label: "$1000 to $1499" },
      { value: "1500+", label: "$1500+" },
    ],
  },
  
  {
    id: "brand",
    name: "Brand",
    options: [
      { value: "nike", label: "Nike" },
      { value: "adidas", label: "Adidas" },
      { value: "puma", label: "Puma" },
      { value: "reebok", label: "Reebok" },
    ],
  },
  
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "0-10", label: "0% to 10%" },
      { value: "11-20", label: "11% to 20%" },
      { value: "21-30", label: "21% to 30%" },
      { value: "31-40", label: "31% to 40%" },
      { value: "41+", label: "41% and above" },
    ],
  },
  {
    id: "available",
    name: "Available",
    options: [
      { value: "true", label: "Available" },
      { value: "false", label: "Not Available" },
    ],
  },
];
