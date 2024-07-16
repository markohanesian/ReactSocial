import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  CssBaseline,
  Toolbar,
  Link,
} from "@material-ui/core/";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    footer: {
      top: "auto",
      bottom: 0,
      backgroundColor: "white",
      marginTop: "2rem",
    },
    icon: {
      color: "black",
    },
    grow: {
      flexGrow: 1,
    },
  })
);

export default function FooterBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid position="relative" color="primary" className={classes.footer}>
        <Toolbar>
          <div>
            <Typography variant="body1" color="inherit" gutterBottom>
              <Link alt="mark ohanesian's website" href="markohanesian.com">
                {" "}
                Mark Ohanesian
              </Link>
            </Typography>
          </div>
          <div className={classes.grow} />
          <IconButton
            className={classes.icon}
            href="https://github.com/markohanesian/social-media-app"
            role="link"
            aria-label="View source code on GitHub"
          >
            <GitHubIcon alt="GitHub link" />
          </IconButton>
          <IconButton
            edge="end"
            className={classes.icon}
            href="mailto:mso872@gmail.com"
            role="link"
            aria-label="Send email to Mark Ohanesian"
          >
            <EmailIcon alt="Email link" />
          </IconButton>
        </Toolbar>
      </Grid>
    </React.Fragment>
  );
}
