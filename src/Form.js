import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { useState } from "react";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const CustomizedDialogs = ({ cat, open, setOpen }) => {
  const [name, setName] = useState(cat ? cat.nameCat : "");
  const [price, setPrice] = useState(cat ? cat.price : "");
  const [color, setColor] = useState(cat ? cat.color : "");
  const [age, setAge] = useState(cat ? cat.age : "");
  const [breed, setBreed] = useState(cat ? cat.breed.nameBreed : "");

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (cat) => {
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameCat: name,
        price: price,
        color: color,
        nameBreed: breed,
        age: age,
      }),
    };
    fetch(
      `https://internship.apps.robotbull.com/cats/update_cat/${cat.id}`,
      requestOptions
    ).then((response) => console.log(response.json()));
    console.log(breed);
    setOpen(false);
  };

  const handleSave = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameCat: name,
        price: price,
        color: color,
        nameBreed: breed,
        age: age,
      }),
    };
    fetch(
      `https://internship.apps.robotbull.com/cats/create_cat`,
      requestOptions
    ).then((response) => console.log(response.json()));
    console.log(breed);
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Cat's Card
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <Typography
                component={"span"}
                color="text.secondary"
                gutterBottom
              >
                Name:
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue={cat ? cat.nameCat : "Some cat's name"}
                  onChange={(e) => setName(e.target.value)}
                />
              </Typography>
            </div>

            <div>
              <Typography
                component={"span"}
                color="text.secondary"
                gutterBottom
              >
                Price:
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue={cat ? cat.price : "Some cat's price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Typography>
            </div>

            <div>
              <Typography
                component={"span"}
                color="text.secondary"
                gutterBottom
              >
                Color:
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue={cat ? cat.color : "Some cat's color"}
                  onChange={(e) => setColor(e.target.value)}
                />
              </Typography>
            </div>

            <div>
              <Typography
                component={"span"}
                color="text.secondary"
                gutterBottom
              >
                Age:
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue={cat ? cat.age : "Some cat's age"}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Typography>
            </div>

            <div>
              <Typography
                component={"span"}
                color="text.secondary"
                gutterBottom
              >
                Breed:
                <TextField
                  required
                  id="outlined-required"
                  label="Required"
                  defaultValue={cat ? cat.breed.nameBreed : "Some cat's breed"}
                  onChange={(e) => setBreed(e.target.value)}
                />
              </Typography>
            </div>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => (cat ? handleChange(cat) : handleSave())}
          >
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default CustomizedDialogs;
