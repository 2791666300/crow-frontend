import DirectoryItem from "../directory-item/directory-item.component";

import { DirectoryContainer } from "./directory.styles";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: "./img/home-1.jpg",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "./img/home-2.jpg",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "./img/home-3.jpg",
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "./img/home-4.jpg",
    route: "shop/womens",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "./img/home-5.jpg",
    route: "shop/mens",
  },
];
const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
