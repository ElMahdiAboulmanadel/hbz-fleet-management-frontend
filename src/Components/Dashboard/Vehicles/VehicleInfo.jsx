import React from "react";

const VehicleInfo = (Props) => {
    const styles = {
        container: {
            position : "relative",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            width: "100%",
            backgroundColor: "rgba(120, 120, 120, 0.3)",
            backdropFilter: 'blur(20px)',
            borderRadius: '5px 5px 5px 5px',
        },
        profileButtons: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            borderRadius: "5px",
            width: "100%",
        },
        button : {
            height: "40px",
            width: "100%",
            marginTop: "10px",
            border: "none",
            backgroundColor: "rgba(198, 198, 198, 0)",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            backdropFilter: 'blur(5px)',
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "10px 10px 10px 26px",
            textAlign: "left",
        },
        profile : {
            display: "inline-block",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "start",
            height: "fit-content",
            padding: "0px 20px 5px 20px",
        },
    };
    return (
        <div style={styles.container}>
            <div style={styles.profile}>
                    <h3>{Props.vehicle.vehicleNumber}</h3>
                    <p>{Props.vehicle.vehicleModel}</p>
                    <p>{Props.vehicle.vehicleType}</p>
                    <p>{Props.vehicle.vehicleCapacityQuantity} {Props.vehicle.vehicleCapacityUnit}</p>
                    <p>{Props.vehicle.vehiculeMileage} KM</p>
                    <p>Joined at {Props.vehicle.createdAt}</p>
                    <p>Updated at {Props.vehicle.updatedAt ? Props.vehicle.updatedAt : 'Never updated'}</p>
            </div>
            {/* <div style={styles.profileButtons}>
                        <button style={styles.button}>Edit</button>
                        <button style={styles.button}>Delete</button>
            </div> */}
        </div>
    );
}

export default VehicleInfo;