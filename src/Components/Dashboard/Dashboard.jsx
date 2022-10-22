import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { Grid } from "../Common";
import ClientCount from "../Dashboard/Clients/ClientCount";
import DriverCount from "../Dashboard/Drivers/DriverCount";
import TripCount from "../Dashboard/Trips/TripCount";
import VehicleCount from "../Dashboard/Vehicles/VehicleCount";
import { DashboardCard } from "../Common";

const Dashboard = () => {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "fit-content",
            width: "100%",
            backgroundColor: "rgba(120, 120, 120, 0.3)",
            backdropFilter: 'blur(20px)',
            borderRadius: '5px 5px 5px 5px',
        },
        form: {
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "70vw",
            height: "fit-content",
            backgroundColor: "rgba(198, 198, 198, 0)",
            borderRadius: "5px",
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
            backdropFilter: 'blur(5px)',
        },
        input: {
            height: "40px",
            margin: "10px",
            padding: "0 10px 0 10px",
            width: "100%",
            border: "1px solid transparent",
            backgroundColor: "transparent",
            outline: 'none',
            "&:hover": {
                    border: "1px solid #3f51b5",
                    backgroundColor: "rgba(255, 255, 255, 0)",
            },
            color: 'white',
        },
        button: {
            height: "40px",
            width: "100%",
            marginTop: "10px",
            border: "none",
            backgroundColor: "rgba(198, 198, 198, 0.3)",
            backdropFilter: 'blur(5px)',
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            padding: "0 10px 0 26px",
            textAlign: "left",
        },
        title: {
            padding: "10px 15px 15px 22px",
            color: "#fff",
            width: "100%",
            backgroundColor: "rgba(198, 198, 198, 0.3)",
            borderRadius: "5px 5px 0 0",
        },
        content: {
            height: '90vh',
            width: '100%',
            padding: '20px 20px 15px 22px',
            borderRadius: '5px 5px 0 0',
        },
    };
    
    return (
        <div style={styles.container}>
            <span style={styles.title}>Dashboard</span>
                <div style={styles.content}>
                    <Scrollbars style={{ width: '100%', height: '100%' }}>
                        <Grid>
                            <DashboardCard name='Clients' count={ClientCount()} />
                            <DashboardCard name='Drivers' count={DriverCount()} />
                            <DashboardCard name='Trips' count={TripCount()} />
                            <DashboardCard name='Vehicles' count={VehicleCount()} />
                            
                        </Grid>
                        <div style={{position:"absolute", bottom:"0"}}>
                            <h4>This project is still under development</h4>
                            <p>This version is not production ready and it's for testing and development only! <br></br>
                                HBZ (TMS) is transport management system made by El Mahdi Aboulmanadel and Ismail El Iraqi in their internship at HBZ Holding.
                            </p>
                        </div>
                    </Scrollbars>
                </div>
        </div>
    );
}

export default Dashboard;