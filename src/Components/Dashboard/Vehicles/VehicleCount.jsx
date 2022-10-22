import React from "react";
import { vehicles } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const VehicleCount = () => {
    
    const { data, loading, error } = useQuery(vehicles);
    
    if (loading) return <div></div>;
    if (error) return <div></div>;

    return (data.vehicles.length);
}

export default VehicleCount;