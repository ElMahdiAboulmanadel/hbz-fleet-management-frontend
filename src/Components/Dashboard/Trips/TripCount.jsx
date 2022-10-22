import React from "react";
import { trips } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const TripCount = () => {
    
    const { data, loading, error } = useQuery(trips);
    
    if (loading) return <div></div>;
    if (error) return <div></div>;

    return (data.trips.length);
}

export default TripCount;