import { useState, useEffect } from "react";
import "./App.css";
import CatsCard from "./CatsCard";
import BreedsCard from "./BreedsCard";
import Form from "./Form";
import AppBar from "./AppBar";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

function App() {
  const [cats, setCats] = useState([]);

  const [breeds, setBreeds] = useState([]);

  const [form, setForm] = useState(false);

  const handleSort = (event, data) => {
    if (event.target.innerHTML.includes("cats")) {
      setCats(data);
      setBreeds(null);
    } else if (event.target.innerHTML.includes("Breeds")) {
      setBreeds(data);
      setCats(null);
    } else {
      setForm(data);
    }
  };

  useEffect(() => {
    (async () => {
      let catData;
      try {
        const response = await fetch(
          "https://internship.apps.robotbull.com/cats/get/not_booked_cats"
        );
        catData = await response.json();
      } catch (error) {
        console.log(error);
        catData = [];
      }
      setCats(catData);
    })();
  }, []);

  return (
    <div className="App">
      <AppBar onChange={handleSort} />
      <Container>
        <Grid container spacing={1}>
          {cats
            ? cats.map((cat, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
                  <CatsCard cat={cat}></CatsCard>
                </Grid>
              ))
            : breeds.map((breed, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
                  <BreedsCard breed={breed}></BreedsCard>
                </Grid>
              ))}
        </Grid>
      </Container>

      <Form open={form} setOpen={setForm} />
    </div>
  );
}

export default App;
