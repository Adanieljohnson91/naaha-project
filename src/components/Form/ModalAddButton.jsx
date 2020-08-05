import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "white",
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });


const useStyle = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: "5px",
        marginLeft: "53%",
        width: "100px",
        height:"110px",
        backgroundImage: "linear-gradient(to right, black , lightBlue)",
        borderRadius: "50%",
        boxShadow:"0px 0px 20px"
      },
    },
    extendedIcon: {
      marginRight: 0,
      height: "100px",
      width: "100px"
    },
  }));



const ModalAddButton = (props) => {
      const classes = useStyles();
    const [open, setOpen] = React.useState(false);
 
    const handleOpen = () => {
      setOpen(true);
    };
   
    const handleClose = () => {
      setOpen(false);
    };
  
    const classe = useStyle();
    return (
        <>
        <div>
         <div className={classe.root}> 
     <button color="#e8f5e9" onClick={handleOpen} aria-label="add">
        <AddIcon />
      </button>
      </div> 
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
       {React.cloneElement(props.form,  { handleClose: handleClose })}
          </div>
        </Fade>
      </Modal>
      </div>
      
           

        </>
    )
}
export default ModalAddButton;