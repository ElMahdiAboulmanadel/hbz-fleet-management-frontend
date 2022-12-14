import React from "react";
import { FaUserTie, FaTruckMoving, FaMapMarkedAlt } from "react-icons/fa";
import {Animated} from "react-animated-css";
import Popup from 'reactjs-popup';
import DriverInfo from "./Dashboard/Drivers/DriverInfo";
import VehicleInfo from "./Dashboard/Vehicles/VehicleInfo";
import ClientInfo from "./Dashboard/Clients/ClientInfo";
import TripInfo from "./Dashboard/Trips/TripInfo";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Logo = (Props) => {
    const styles = {
        logo : {
            color: "slateblue",
            display : "inline-block",
            fontSize: Props.size,
            backgroundColor: "white",  
            padding: "0.5em 1em",
            borderRadius: "0.5em",
            boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.3)",
            marginTop: "-35px",
            marginLeft: "-190px",
        },
    };

    return (
        <div style={styles.logo}>
            <b>HBZ</b>(TMS)
        </div>
    );
};

export const Table = (Props) => {
    const styles = {
        table : {
            width: "100%",
            borderCollapse: "collapse",
        },
        thead : {
            backgroundColor: "slateblue",
            color: "white",
        },
        th : {
            padding: "0.5em 1em",
            textAlign: "left",
        },
        td : {
            padding: "0.5em 1em",
            textAlign: "left",
            borderBottom: "1px solid #eee",
        },
    };

    return (
        <table style={styles.table}>
            <thead style={styles.thead}>
                <tr>
                    {Props.headers.map((header, index) => {
                        return (
                            <th key={index} style={styles.th}>{header}</th>
                        );
                    })}
                </tr>
            </thead>
            <tbody>
                {Props.rows.map((row, index) => {
                    return (
                        <tr key={index}>
                            {row.map((cell, index) => {
                                return (
                                    <td key={index} style={styles.td}>{cell}</td>
                                );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export const ProfileCard = (Props) => {
    const styles = {
        card : {
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "1em",
            borderRadius: "0.5em",
            boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.3)",
        },
        image : {
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            color: "white",
            objectFit: "cover",
        },
        name : {
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "0.5em 0",
            color: "white"
        },
        email : {
            color: "white",
        },
        lastLogin : {
            position: "absolute",
            color: "white",
            top: "0",
            right: "0",
            padding: "0.5em 1em",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "0 0.5em",
        },
        close : {
            position: "absolute",
            top: "-.5em",
            right: "-.5em",
            padding: "0em .5em",
            fontSize: "2em",
            backgroundColor: "white",
            borderRadius: "1em",
            color: "slateblue",
            cursor: "pointer",
        },
        modal : {
            width: "100%",
            borderRadius: "0.5em",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            '&:before' : {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }
        },
    };
    const overlayStyle = { 
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
    };


    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Popup trigger={<button style={{backgroundColor:"transparent", outline:'none', border:'none', cursor: 'pointer', width:'100%'}}>
                <div className="cardHover" style={styles.card}>
                    <FaUserTie style={styles.image} />
                    <div style={styles.name}>{Props.name}</div>
                    <div style={styles.email}>{Props.email}</div>
                    <div style={styles.lastLogin}>{Props.lastLogin}</div>
                    
                </div>
            </button>} position="right center" {...{ overlayStyle }} modal>
                        {close => (
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <div style={styles.modal}>
                                    {Props.driver ? <DriverInfo driver={Props.driver} /> : <ClientInfo client={Props.client} />}
                                    <div style={styles.close} onClick={close}>
                                    &times;
                                    </div>
                                </div>
                            </Animated>
                        )}
            </Popup>
        </Animated>
    );
}

export const VehicleCard = (Props) => {
    const styles = {
        card : {
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "1em",
            borderRadius: "0.5em",
            boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.3)",
        },
        image : {
            width: "100px",
            height: "100px",
            color: "white",
            objectFit: "cover",
        },
        name : {
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "0.5em 0",
            color: "black",
            backgroundColor: "white",
        },
        email : {
            color: "white",
        },
        lastLogin : {
            position: "absolute",
            color: "white",
            top: "0",
            right: "0",
            padding: "0.5em 1em",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "0 0.5em",
        },
        close : {
            position: "absolute",
            top: "-.5em",
            right: "-.5em",
            padding: "0em .5em",
            fontSize: "2em",
            backgroundColor: "white",
            borderRadius: "1em",
            color: "slateblue",
            cursor: "pointer",
        },
        modal : {
            width: "100%",
            borderRadius: "0.5em",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            '&:before' : {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }
        },
    };
    const overlayStyle = { 
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
    };


    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Popup trigger={<button style={{backgroundColor:"transparent", outline:'none', border:'none', cursor: 'pointer', width:'100%'}}>
                <div className="cardHover" style={styles.card}>
                    <FaTruckMoving style={styles.image} />
                    <div style={styles.name}>{Props.name}</div>
                    <div style={styles.email}>{Props.model}</div>
                    <div style={styles.lastLogin}>Vehicle {Props.type}</div>
                    
                </div>
            </button>} position="right center" {...{ overlayStyle }} modal>
                        {close => (
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <div style={styles.modal}>
                                    <VehicleInfo vehicle={Props.vehicle}/>
                                    <div style={styles.close} onClick={close}>
                                    &times;
                                    </div>
                                </div>
                            </Animated>
                        )}
            </Popup>
        </Animated>
    );
}

export const Grid = (Props) => {
    const styles = {
        grid : {
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gridGap: "1em",
        },
    };

    return (
        <div style={styles.grid}>
            {Props.children}
        </div>
    );
}

export const TripCard = (Props) => {
    const styles = {
        card : {
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "1em",
            borderRadius: "0.5em",
            boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.3)",
        },
        image : {
            width: "100px",
            height: "100px",
            color: "white",
            objectFit: "cover",
        },
        name : {
            fontSize: "1.5em",
            fontWeight: "bold",
            margin: "0.5em 0",
            color: "black",
            backgroundColor: "white",
        },
        email : {
            color: "white",
        },
        lastLogin : {
            position: "absolute",
            color: "white",
            top: "0",
            right: "0",
            padding: "0.5em 1em",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            borderRadius: "0 0.5em",
        },
        close : {
            position: "absolute",
            top: "-.5em",
            right: "-.5em",
            padding: "0em .5em",
            fontSize: "2em",
            backgroundColor: "white",
            borderRadius: "1em",
            color: "slateblue",
            cursor: "pointer",
        },
        modal : {
            width: "100%",
            borderRadius: "0.5em",
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            '&:before' : {
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            }
        },
    };
    const overlayStyle = { 
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
    };


    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <Popup trigger={<button style={{backgroundColor:"transparent", outline:'none', border:'none', cursor: 'pointer', width:'100%'}}>
                <div className="cardHover" style={styles.card}>
                    <FaMapMarkedAlt style={styles.image} />
                    <div style={styles.name}>{Props.name}</div>
                    <div style={styles.email}>{Props.status}</div>
                    <div style={styles.lastLogin}>{Props.lastUpdate}</div>
                    
                </div>
            </button>} position="right center" {...{ overlayStyle }} modal>
                        {close => (
                            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
                                <div style={styles.modal}>
                                    <TripInfo trip={Props.trip} name={Props.name}/>
                                    <div style={styles.close} onClick={close}>
                                    &times;
                                    </div>
                                </div>
                            </Animated>
                        )}
            </Popup>
        </Animated>
    );
}

export const DashboardCard = (Props) => {
    const styles = {
        card : {
            position: "relative",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "1em",
            borderRadius: "0.5em",
            boxShadow: "0 0 0.5em rgba(0, 0, 0, 0.3)",
            width: "200px"
        }
    };
    const overlayStyle = { 
            backgroundColor: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(5px)',
    };


    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
            <div className="cardHover" style={styles.card}>
                <CircularProgressbar value={Props.count} text={`${Props.count} `+ Props.name} styles={buildStyles({textSize: '16px',

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `slateblue`,
                textColor: 'white',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
                })} />
            </div>
        </Animated>
    );
}