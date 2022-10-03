import { gql } from "@apollo/client";

export const whoami = gql`
    query who($t:String!) {
        whoami(token:$t){
        id
        email
        firstName
        lastName
        isSuperuser
        isActive
        isStaff
        driver{
            drivingLicense
        }
        client{
            companyName
            companyAddress
            companyCity
            companyPhoneNumber
            companyEmail
            companyWebsite
            companyDescription
        }
        userProfile{
            phoneNumber
            address
            city
            isVerified
        }
        }
    }
`;

export const drivers = gql`
    query {
        drivers{
            user{
            id
            }
        }
    }
`;

export const clients = gql`
    query {
        clients{
            user{
            id
            }
        }
    }
`;

export const vehicles = gql`
    query {
        vehicles{
            id
        }
    }
`;

export const trips = gql`
    query {
        trips{
            id
        }
    }
`;

export const user = gql`
    query user($id:Int) {
                    user(id:$id) {
                        id
                        firstName
                        lastName
                        email
                        isActive
                        isStaff
                        dateJoined
                        userProfile{
                            phoneNumber
                            address
                            city
                            isVerified
                        }
                        lastLogin
                        driver{
                            drivingLicense
                        }
                        client{
                            companyName
                            companyAddress
                            companyCity
                            companyPhoneNumber
                            companyEmail
                            companyWebsite
                            companyDescription
                        }
                    }
                }
`;

export const vehicle = gql`
    query vehicle($id:String!) {
        vehicle(id:$id) {
            id
            vehicleType
            vehicleNumber
            vehicleModel
            vehicleCapacityQuantity
            vehicleCapacityUnit
            vehiculeMileage
            createdAt
            updatedAt
            trip {
                id
                driver{
                    user{
                        id
                        firstName
                        lastName
                    }
                }
            }
            vidange {
                id
                date
                note
                price
                createdAt
                updatedAt
            }
            maintenance{
                id
                date
                mileage
                note
                price
                pannes{
                    id
                    driver{
                        user{
                            id
                            firstName
                            lastName
                        }
                    }
                    trip{
                        id
                    }
                    mileage
                    description
                    date
                    createdAt
                    updatedAt
                }
            }
            entretien{
                id
                date
                remarks
                createdAt
                updatedAt
            }
        }
    }
`;

export const trip = gql`
    query trip($id:String!) {
        trip(id:$id) {
            id
            driver{
                user{
                    id
                    firstName
                    lastName
                }
            }
            vehicle{
                id
                vehicleNumber
            }
            container{
                id
                containerNumber
            }
            merchandises{
                id
                name
            }
            origin
            destination
            distance
            actualPosition
            status
            departureDate
            arrivalDate
            consumption
            driverPrice
            clientPrice
            createdAt
            updatedAt
        }
    }
`;