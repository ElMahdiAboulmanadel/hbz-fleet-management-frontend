import React from "react";
import { clients} from "../../../Lib/queries";
import { useQuery } from "@apollo/client";

const ClientCount = () => {
    
    const { data, loading, error } = useQuery(clients);
    
    if (loading) return <div></div>;
    if (error) return <div></div>;

    return (data.clients.length);
}

export default ClientCount;