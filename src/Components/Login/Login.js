import React from "react";
import "../../App.css";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import {AUTH_TOKEN} from '../../Lib/constants';

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(120, 120, 120, 0.3)",
        backdropFilter: 'blur(20px)',
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
        padding: "0 15px 15px 22px",
        color: "#fff",
        width: "100%",
        backgroundColor: "rgba(198, 198, 198, 0.3)",
        borderRadius: "5px 5px 0 0",
    },
    credit: {
        color: "#fff",
        width: "100%",
        padding: "15px",
        fontSize: "0.7rem",
        textAlign: "right",
        backgroundColor: "rgba(198, 198, 198, 0)",
        backdropFilter: 'blur(5px)',
    },
};

const Login = () => {
    const LOGIN_MUTATION = gql`
    mutation LoginMutation ($e: String!, $p: String!) {
        tokenAuth (email: $e, password: $p) {
            token
        }
    }`;

    const [e, setE] = useState("");
    const [p, setP] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "e") {
            setE(value);
        } else if (name === "p") {
            setP(value);
        }
    };


    const [login] = useMutation(LOGIN_MUTATION, {
        variables: {
            e: e,
            p: p
        },
        onCompleted: ({tokenAuth}) => {
            localStorage.setItem(AUTH_TOKEN, tokenAuth.token);
            window.location.reload(false);
        }
    });

    return (
        <div style={styles.container}>
            <form style={styles.form} autoComplete="new-password" onSubmit={handleSubmit}>
                <div style={styles.title}>
                    <span style={{color:'white', fontSize:'5rem', fontWeight:'bold'}}>HBZ</span>
                    <br/><span style={{color:'white',marginBottom:'40px'}}>Transport management system</span>
                </div>
                <input autoComplete="new-password" style={styles.input} type="email" placeholder="Email" name="e" onChange={handleChange}/>
                <input autoComplete="new-password" style={styles.input} type="password" placeholder="Password" name="p" onChange={handleChange}/>
                <button style={styles.button}>Login</button>
                <div style={styles.credit}>
                    Made by El Mahdi Aboulmanadel & Ismail El Iraqi
                </div>
            </form>
            <br></br><br></br><br></br><br></br><br></br>
        </div>
    );
};

export default Login;