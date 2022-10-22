import React from "react";

const TripInfo = (Props) => {
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
                    <h3>{Props.name}</h3>
                    <p>Driver : {Props.trip.driver.user.firstName} {Props.trip.driver.user.lastName}</p>
                    <p>Vehicle : {Props.trip.vehicle.vehicleNumber}</p>
                    <p>Container : {Props.trip.container.containerNumber}</p>
                    <p>Merchandises : {Props.trip.merchandises.map(({id, name}) => {
                        return (
                            <p key={id}>
                                &nbsp; - {name}
                            </p>
                    );
                    } )
                    }</p>
                    <p>Distance : {Props.trip.distance}</p>
                    <p>Actual Position : {Props.trip.actualPosition}</p>
                    <p>Status : {Props.trip.status}</p>
                    <p>Departure Date : {Props.trip.departureDate.slice(0, 10)}</p>
                    <p>Arrival Date : {Props.trip.arrivalDate.slice(0, 10)}</p>
                    <p>Consumption : {Props.trip.consumption}</p>
                    <p>Driver Price : {Props.trip.driverPrice}</p>
                    <p>Client Price : {Props.trip.clientPrice}</p>
            </div>
            {/* <div style={styles.profileButtons}>
                        <button style={styles.button}>Edit</button>
                        <button style={styles.button}>Delete</button>
            </div> */}
        </div>
    );
}

export default TripInfo;