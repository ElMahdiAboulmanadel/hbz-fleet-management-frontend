import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { Grid } from "../Common";
import { drivers } from "../../Lib/queries";
import { useQuery } from "@apollo/client";
import Driver from "./Drivers/Driver";

const Drivers = () => {

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
        rollOut: {
            animation: 'rollout 0.4s ease-out',
        },
        rollIn: {
            animation: 'rollin 0.4s ease-in',
        },
        '@keyframes rollout': {
            '0%': {
                transform: 'translateY(0)',
            },
            '100%': {
                transform: 'translateY(-100%)',
            },
        },
        '@keyframes rollin': {
            '0%': {
                transform: 'translateY(-100%)',
            },
            '100%': {
                transform: 'translateY(0)',
            },
        },
    };

    const { data, loading, error } = useQuery(drivers);

    if (loading) return <div></div>;
    if (error) return <div></div>;

    return (
        <div style={styles.container}>
            <span style={styles.title}>Drivers</span>
                <div style={styles.content}>
                    <Scrollbars style={{ width: '100%', height: '100%' }}>
                        <Grid>
                            {data.drivers.map(({user}) => {
                                return (
                                        <Driver style={styles.rollOut} key={user.id} id={user.id}/>
                                );
                            })}
                        </Grid>
                    </Scrollbars>
                </div>
        </div>
    );
}

export default Drivers;