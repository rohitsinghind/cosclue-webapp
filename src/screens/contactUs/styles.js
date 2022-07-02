export const styles = {
    center:{
      display:"flex",
      justifyContent: "center",
      alignItems:"center", 
      mt:"50px"
    },
    center2:{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      alignItems:"center", 
      mt:"150px",
      mb:"100px",
      '@media (max-width: 550px)': {
        mt:"25px",
        mb:"15px",
      },
    },
      text1: {
          fontFamily: "Open Sans, sans-serif",
          fontSize:"45px",
          color:"#20c9da",
          fontWeight:"bold",
          '@media (max-width: 550px)': {
            fontSize:"30px",
          },
        },
        textfield: {
            my:"10px",
            width:"350px",
            '@media (max-width: 550px)': {
              width:"300px",
            },
        },
        helpImg:{
          width:"50%"
        },
        contactimg:{
          width:"30%",
          marginRight:"120px"
        },
        chatBg:{
          display:"flex",
          justifyContent: "center",
          alignItems:"center",
          py:"30px",
          backgroundColor:"#f1f1f1" ,
         
        }
  }