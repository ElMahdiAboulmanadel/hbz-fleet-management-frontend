import React from "react";
import { ProfileCard } from "../../Common";
import { user } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const Driver = ({ id }) => {
    const { data, loading, error } = useQuery(user, {
        variables: { id },
    });
    
    if (loading) return <div></div>;
    if (error) return <div></div>;
    
    
    return (<>
                <ProfileCard
                    name={data.user.firstName + " " + data.user.lastName}
                    email={data.user.email}
                    lastLogin={data.user.lastLogin ? data.user.lastLogin.slice(0, 10) : "Never logged in"}
                    driver={data.user}
                />
            </>
    );
}

export default Driver;