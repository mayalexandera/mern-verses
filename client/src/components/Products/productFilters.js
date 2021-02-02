export default [
  {
    title: "Shop By Price",
    options: [
      { type: "price", name: "$0-$25", value: "0-25" },
      { type: "price", name: "$25-$50", value: "25-50" },
      { type: "price", name: "$50-$150", value: "50-150" },
      { type: "price", name: "$150-$300", value: "150-300" },
      { type: "price", name: "$300+", value: "300-600" },
    ],
  },
  {
    title: "Shop By Brand",
    options: [
      { type: "brandName", name: "Wildfang", value: "Wildfang" },
      { type: "brandName", name: "Stuzo Clothing", value: "Stuzo Clothing" },
    ],
  },
  {
    title: "Occasion",
    options: [
      { type: "occasion", name: "Work", value: "work" },
      { type: "occasion", name: "Play", value: "play" },
      { type: "occasion", name: "Formal", value: "formal" },
      { type: "occasion", name: "Home", value: "home" },
    ],
  },
  {
    title: "Expression",
    options: [
      { type: "expression", name: "All", value: "all" },
      { type: "expression", name: "Feminine", value: "feminine" },
      { type: "expression", name: "Neutral", value: "neutral" },
      { type: "expression", name: "Masculine", value: "masculine" },
    ],
  },
];
