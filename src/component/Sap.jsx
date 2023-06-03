import React from 'react'

const Sap = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around",
      border: "1px solid",
      borderColor: "Window",
      backgroundColor: "burlywood",
      padding: "25px",
      marginTop: "10px",
      marginLeft: "10px",
      paddingTop: "15px",
      borderRadius: "15px",
      boxShadow:
        "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
    }}
  >
    <div
      style={{
        backgroundColor: "indianred",
        padding: "10px",
        borderRadius: "15px",
        marginBottom: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "95%",
        boxShadow:
          "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 10px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 10px 0px 12px, rgb(255, 85, 85) 0px 10px 0px 15px",
        transition: "background-color 0.3s ease",
      }}
    >
      <a>
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <h2
            style={{
              color: "white",
              transition: "color 0.3s ease",
            }}
          >
            Web Developer Skills
          </h2>
        </div>
      </a>
    </div>
    {/* Add the rest of the child divs with the same style */}
  </div>
  )
}

export default Sap
