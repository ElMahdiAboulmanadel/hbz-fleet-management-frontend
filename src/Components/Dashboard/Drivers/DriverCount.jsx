import React from "react";
import { drivers } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const DriverCount = () => {
    
    const { data, loading, error } = useQuery(drivers);
    
    if (loading) return <div></div>;
    if (error) return <div></div>;

    return (data.drivers.length);
}

export default DriverCount;