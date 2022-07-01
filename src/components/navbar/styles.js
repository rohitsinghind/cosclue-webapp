export const styles = {
        logo: {
          width: "auto",
          height: "60px",
          marginRight: 5,
        },
        navBtns:{
          position:"absolute",
          right:"50px",
          display:"flex", 
          alignItems:"center", 
        },
        navBtn:{
          color:"#1b68b6",
          width:"170px",
          fontFamily: "Open Sans, sans-serif",
          fontSize:"20px",
          cursor:"pointer",
          "&:hover": {
            color:"#43008e",
            fontSize:"20.5px",
          },
        },
        active:{
          color:"#6f13e9",
          fontWeight:"bold",
          width:"170px",
          fontFamily: "Open Sans, sans-serif",
          fontSize:"22px",
          cursor:"pointer",
        }
}