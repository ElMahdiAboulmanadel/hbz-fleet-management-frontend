import React from "react";
import { TripCard } from "../../Common";
import { trip } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const Trip = ({ id }) => {
    const { data, loading, error } = useQuery(trip, {
        variables: { id },
    });
    
    if (loading) return <div></div>;
    if (error) return <div></div>;
    
    
    return (<>
                <TripCard
                    name={data.trip.origin + " > " + data.trip.destination}
                    status={data.trip.updatedAt ? data.trip.updatedAt.slice(0, 10) : "Never updated"}
                    lastUpdate={data.trip.status}
                    trip={data.trip}
                />
            </>
    );
}

export default Trip;