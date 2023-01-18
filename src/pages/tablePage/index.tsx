import React from 'react'
import { DATA } from '../homePage'


interface stateI {
    enquiryDate: string,
    location: string,
    executive: string,
    source: string,
    subSource: string,
    campaign: string,
    leadType: string,
    name: string,
    mobileNo: string,
    whatsappNo: string,
    customerType: string,
    occupation: string,
    address: string,
    state: string,
    city: string,
    cityArea: string,
    pincode: string,
    buyingFor: string,
    email: string,
    leadFollowupStatus: string
}



const TablePage = () => {
    return (
        <div>{DATA}</div>
    )
}


export default TablePage