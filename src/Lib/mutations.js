import { gql } from "@apollo/client";

export const deleteVehicle = gql`
            mutation deleteVehicle($id:ID!) {
                deleteVehicle(id:$id){
                    ok
                }
            }
        `;

export const createVehicle = gql`
            mutation createVehicle($i:VehicleInput!) {
                createVehicle(input:$i){
                    ok
                }
            }
        `;

export const updateVehicle = gql`
            mutation updateVehicle($i:VehicleInput!) {
                updateVehicle(input:$i){
                    ok
                }
            }
        `;

export const deleteTrip = gql`
            mutation deleteTrip($id:ID!) {
                deleteTrip(id:$id){
                    ok
                }
            }
        `;

export const createTrip = gql`
            mutation createTrip($i:TripInput!) {
                createTrip(input:$i){
                    ok
                }
            }
        `;

export const updateTrip = gql`
            mutation updateTrip($i:TripInput!) {
                updateTrip(input:$i){
                    ok
                }
            }
        `;

export const deleteContainer = gql`
            mutation deleteContainer($id:ID!) {
                deleteContainer(id:$id){
                    ok
                }
            }
        `;

export const createContainer = gql`
            mutation createContainer($i:ContainerInput!) {
                createContainer(input:$i){
                    ok
                }
            }
        `;

export const updateContainer = gql`
            mutation updateContainer($i:ContainerInput!) {
                updateContainer(input:$i){
                    ok
                }
            }
        `;

export const deleteMerchandise = gql`
            mutation deleteMerchandise($id:ID!) {
                deleteMerchandise(id:$id){
                    ok
                }
            }
        `;

export const createMerchandise = gql`
            mutation createMerchandise($i:MerchandiseInput!) {
                createMerchandise(input:$i){
                    ok
                }
            }
        `;

export const updateMerchandise = gql`
            mutation updateMerchandise($i:MerchandiseInput!) {
                updateMerchandise(input:$i){
                    ok
                }
            }
        `;

export const deleteVidange = gql`
            mutation deleteVidange($id:ID!) {
                deleteVidange(id:$id){
                    ok
                }
            }
        `;

export const createVidange = gql`
            mutation createVidange($i:VidangeInput!) {
                createVidange(input:$i){
                    ok
                }
            }
        `;

export const updateVidange = gql`
            mutation updateVidange($i:VidangeInput!) {
                updateVidange(input:$i){
                    ok
                }
            }
        `;

export const deletePanne = gql`
            mutation deletePanne($id:ID!) {
                deletePanne(id:$id){
                    ok
                }
            }
        `;

export const createPanne = gql`
            mutation createPanne($i:PanneInput!) {
                createPanne(input:$i){
                    ok
                }
            }
        `;

export const updatePanne = gql`
            mutation updatePanne($i:PanneInput!) {
                updatePanne(input: $i){
                    ok
                }
            }
        `;

export const deleteMaintenance = gql`
            mutation deleteMaintenance($id:ID!) {
                deleteMaintenance(id:$id){
                    ok
                }
            }
        `;

export const createMaintenance = gql`
            mutation createMaintenance($i:MaintenanceInput!) {
                createMaintenance(input:$i){
                    ok
                }
            }
        `;

export const updateMaintenance = gql`
            mutation updateMaintenance($i:MaintenanceInput!) {
                updateMaintenance(input:$i){
                    ok
                }
            }
        `;

export const deleteEntretien = gql`
            mutation deleteEntretien($id:ID!) {
                deleteEntretien(id:$id){
                    ok
                }
            }
        `;

export const createEntretien = gql`
            mutation createEntretien($i:EntretienInput!) {
                createEntretien(input:$i){
                    ok
                }
            }
        `;

export const updateEntretien = gql`
            mutation updateEntretien($i:EntretienInput!) {
                updateEntretien(input:$i){
                    ok
                }
            }
        `;

