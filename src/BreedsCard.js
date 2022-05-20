import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea, Typography } from "@mui/material";

const BreedsCard = ({ breed }) => {

  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            Available
          </Typography>

          <Typography variant="h5" component="div">
            {breed.nameBreed ? breed.nameBreed : "Noname"}
          </Typography>

          <Typography color="text.secondary">Created at: {breed.createdAt}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BreedsCard;
