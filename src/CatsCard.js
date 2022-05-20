import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardActionArea, Typography } from "@mui/material";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import Modal from "./Modal";
import Form from "./Form";
import { useState } from "react";

const CatsCard = ({ cat }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(false);

  const handleDelete = () => {
    const requestOptions = {
      method: "DELETE",
    }
    fetch(`https://internship.apps.robotbull.com/cats/delete_cat/${cat.id}`, requestOptions).then((response) => console.log(response.json()));
  };

  const handleOpenForm = () => {
    setForm(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <Card variant="outlined" sx={{ maxWidth: 250 }}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          component="img"
          height="190"
          image={
            cat.image
              ? cat.image
              : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
          }
          alt="Cat's photo"
        />
        <CardContent>
          <Typography color="text.secondary" gutterBottom>
            {cat.isBooked ? "Not available" : "Available"}
          </Typography>

          <Typography variant="h5" component="div">
            {cat.nameCat}
          </Typography>

          <Typography color="text.secondary">Age: {cat.age}</Typography>

          <Typography variant="body2">
            Color: {cat.color}
            <br />
            Price: {cat.price}{" "}
            <CurrencyRubleIcon fontSize="1rem"></CurrencyRubleIcon>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={handleOpenForm}>
          Edit
        </Button>
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
      <Modal cat={cat} open={open} setOpen={setOpen}></Modal>
      <Form cat={cat} open={form} setOpen={setForm} />
    </Card>
  );
};

export default CatsCard;
