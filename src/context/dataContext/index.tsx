import { createContext, useState } from "react";

interface DataContextInterface {
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

const DataProvider = () => {
   const [state,setState] = useState([])
    return 

}

const ThemeContext = createContext<DataContextInterface>({} as DataContextInterface);
