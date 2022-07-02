export const styles = {
    center:{
      display:"flex",
      justifyContent: "center",
      alignItems:"center", 
      mt:"50px",
      '@media (max-width: 550px)': {
        flexDirection:"column",
      },
    },
    center2:{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems:"center", 
      mt:"150px",
      mb:"100px",
      pl:"15px",
    },
      text1: {
          fontFamily: "Open Sans, sans-serif",
          fontSize:"44px",
          color:"#20c9da",
          mb:"30px",
          '@media (max-width: 550px)': {
            fontSize:"28px",
          },
        },
        text2: {
          display:"flex",
          alignItems:"center", 
          fontFamily: "Open Sans, sans-serif",
          fontSize:"45px",
          color:"#20c9da",
          mr:"100px",
          width:"50%",
          '@media (max-width: 550px)': {
            fontSize:"24px",
            width:"100%",
            mr:"0px",
          },
        },
        text3: {
          fontFamily: "Open Sans, sans-serif",
          fontSize:"36px",
          color:"#20c9da",
          mb:"15px",
          '@media (max-width: 550px)': {
            fontSize:"32px",
          },
        },
        bodyText: {
          fontFamily: "Open Sans, sans-serif",
          fontSize:"18px",
          color:"#656565",
          mb:"30px",
          '@media (max-width: 550px)': {
            fontSize:"15px",
          },
        },
        bodyText2:{
          fontFamily: "Open Sans, sans-serif",
          fontSize:"18px",
          color:"#656565",
          my:"100px",
          width:"50%",
          '@media (max-width: 550px)': {
            fontSize:"15px",
            width:"100%",
            my:"20px",
            mb:"50px"
          },
        },
        helpImg:{
          width:"60%"
        },
        helpImg2:{
          width:"100%"
        },
        chatBg:{
          display:"flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems:"center",
          py:"20px",
          backgroundColor:"#f1f1f1" ,
          pl:"15px"
        }
  }