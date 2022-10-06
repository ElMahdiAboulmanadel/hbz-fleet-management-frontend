import React from "react";
import { VehicleCard } from "../../Common";
import { vehicle } from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const Vehicle = ({ id }) => {
    const { data, loading, error } = useQuery(vehicle, {
        variables: { id },
    });
    
    if (loading) return <div></div>;
    if (error) return <div></div>;
    
    return (<>
                <VehicleCard
                    name={data.vehicle.vehicleNumber}
                    type={data.vehicle.vehicleType}
                    model={data.vehicle.vehicleModel}
                    vehicle={data.vehicle}
                />
            </>
    );
}

export default Vehicle;