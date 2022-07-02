export const styles = {
    toolbar: {
      borderTop: "0.1px solid #ccc",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "white",
    },
    innerBox: {
      display: "flex",
      justifyContent: "space-between",
    },
    logo: { 
        width: "auto",
        height: "60px",
    },
    logo2: { 
      width: "auto",
      height: "30px",
  },
    footerTxt:{
        fontFamily: "Open Sans, sans-serif",
        fontSize:"20px",
        display:"flex", 
        alignItems:"center", 
        '@media (max-width: 550px)': {
          fontSize:"14px",
        },
    },
    main: {
      display: "flex",
      justifyContent: "space-between",
      borderTop: "0.1px solid #ccc",
      backgroundColor: "white",
    },
    box: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      width:"150px",
      color:"#006873",
    },
    box2: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      color:"#006873",
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      paddingBottom: "16px",
    },
    icon:{
      ml:"15px",
      cursor:"pointer",
      '@media (max-width: 550px)': {
        ml:"10px",
      },
    }
  };
  