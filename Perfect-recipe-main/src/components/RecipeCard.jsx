import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

function RecipeCard({ items }) {
  const { name, image, cuisine, difficulty, id } = items;

  return (
    <Link to={`/recipes/${id}`}>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Cuisine: {cuisine}</p>
          <small className="text-default-500">Difficulty: {difficulty}</small>
          <h4 className="font-bold text-large">{name}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={image}
            width={270}
          />
        </CardBody>
      </Card>
    </Link>
  );
}

export default RecipeCard;
