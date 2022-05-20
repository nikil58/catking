import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import CardMedia from "@mui/material/CardMedia";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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

const CustomizedDialogs = ( {cat, open, setOpen} ) => {

 
  const handleClose = () => {
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
                <CardMedia
                  component="img"
                  height="194"
                  image= {cat.image ? cat.image : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
                  alt="Cat's photo"
                />
                {cat.nameCat}
              </BootstrapDialogTitle>
              <DialogContent dividers>
                <Typography color="text.secondary" gutterBottom>
                  Available
                </Typography>

                <Typography color="text.secondary">Age: {cat.age}</Typography>

                <Typography variant="body2">
                  Color: {cat.color}
                  <br />
                  Price: {cat.price}{" "}
                  <CurrencyRubleIcon fontSize="1rem"></CurrencyRubleIcon>
                  <br />
                  Breed: {cat.breed.nameBreed}
                  <br />
                  Created at: {cat.createdAt}
                </Typography>
              </DialogContent>
            </BootstrapDialog>
    </div>
  );
}

export default CustomizedDialogs;