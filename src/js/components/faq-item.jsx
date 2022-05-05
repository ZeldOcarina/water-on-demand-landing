import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
  },
  heading: {
    fontFamily: "Kallisto, serif",
    fontSize: theme.typography.pxToRem(38),
    fontWeight: theme.typography.fontWeightLight,
    color: "#93A4B1",
  },
  text: {
    fontSize: theme.typography.pxToRem(25),
    color: "#93A4B1",
    fontFamily: "Poppins, sans-serif",

    "& h5": {
      fontFamily: "Kallisto, serif",
      textAlign: "left",
      fontSize: theme.typography.pxToRem(25),
    },
  },
  icon: {
    fontSize: "30px",
  },
  closeIcon: {
    fontSize: "30px",
    position: "absolute",
    top: "50%",
    right: 0,
    transform: "translateY(-50%)",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Accordion = withStyles({
  root: {
    borderBottom: "1px solid rgba(6, 139, 255, 0.237)",
    padding: "2rem 2rem 2rem 0",
    backgroundColor: "transparent",

    "&:not(:last-child)": {
      marginBottom: "2rem",
    },
  },
})(MuiAccordion);

const faqItem = ({ question, answer, i }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  function handleAccordionChange(e, expanded) {
    setIsAccordionOpen(expanded);
    console.log(expanded);
  }
  function handleCloseIconClick() {
    setIsAccordionOpen(false);
  }

  const classes = useStyles();
  return (
    <Accordion
      key={i}
      onChange={handleAccordionChange}
      expanded={isAccordionOpen}
      TransitionProps={{
        addEndListener: (node, done) => {
          node.addEventListener("transitionend", () => {
            done();
          });
        },
      }}>
      <AccordionSummary
        expandIcon={
          isAccordionOpen ? (
            ""
          ) : (
            <AddIcon
              className={classes.icon}
              fontSize="inherit"
              htmlColor="#febe03"
            />
          )
        }
        aria-controls="panel1a-content"
        id="panel1a-header">
        <Typography
          className={classes.heading}
          dangerouslySetInnerHTML={{ __html: question }}></Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          className={classes.text}
          dangerouslySetInnerHTML={{ __html: answer }}></Typography>
        {isAccordionOpen && (
          <RemoveIcon
            htmlColor="#fd7e01"
            onClick={handleCloseIconClick}
            className={classes.closeIcon}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default faqItem;
