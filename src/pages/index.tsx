import React, { useState, useCallback } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export let DATA: any[] = []

const HomePage = () => {

    const [state, setState] = useState({
        enquiryDate: "",
        location: "",
        executive: "",
        source: "",
        subSource: "",
        campaign: "",
        leadType: "",
        name: "",
        mobileNo: "",
        whatsappNo: "",
        customerType: "",
        occupation: "",
        address: "",
        state: "",
        city: "",
        cityArea: "",
        pincode: "",
        buyingFor: "",
        email: "",
        leadFollowupStatus: "",
    })

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }


    console.log(state)

    return (
        <Form>
            <div>
                <div className='row '>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Enquiry Date</Form.Label>
                        <Form.Control name='enquiryDate' value={state.enquiryDate} onChange={handleChange} type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Location</Form.Label>
                        <Form.Select name='location' onChange={handleChange} value={state.location} aria-label="Default select example">
                            <option >Showroom</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Executive</Form.Label>
                        <Form.Select name='executive' onChange={handleChange} value={state.executive} aria-label="Default select example">
                            <option >Digvijay Singh</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Source</Form.Label>
                        <Form.Select name='source' onChange={handleChange} value={state.source} aria-label="Default select example">
                            <option>Walk In</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Sub Source</Form.Label>
                        <Form.Select name='subSource' onChange={handleChange} value={state.subSource} disabled aria-label="Default select example">
                            <option>{"<Choose Source>"}</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='row'>
                    <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Campaign</Form.Label>
                        <Form.Select name='campaign' onChange={handleChange} value={state.campaign} disabled aria-label="Default select example">
                            <option>~Select Campaign~</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Lead Type</Form.Label>
                        <Form.Select name='leadType' onChange={handleChange} value={state.leadType} aria-label="Default select example">
                            <option>Sale</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
            </div>
            <div>
                <div className="row">
                    <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name='name' onChange={handleChange} value={state.name} type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control name='mobileNo' onChange={handleChange} value={state.mobileNo} type="text" placeholder="Enter Mobile" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Whatsapp Phone</Form.Label>
                        <Form.Control name='whatsappNo' onChange={handleChange} value={state.whatsappNo} type="text" placeholder="Enter Number" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>Customer Type</Form.Label>
                        <Form.Select name='customerType' onChange={handleChange} value={state.customerType} aria-label="Default select example">
                            <option>Individual</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Occupation</Form.Label>
                        <Form.Select name='occupation' onChange={handleChange} value={state.occupation} aria-label="Default select example">
                            <option>Businesses</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' onChange={handleChange} value={state.address} type="text" placeholder="Enter Address" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>State</Form.Label>
                        <Form.Select name='state' onChange={handleChange} value={state.state} aria-label="Default select example">
                            <option>DELHI</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label value={state.city}>City</Form.Label>
                        <Form.Select name='city' onChange={handleChange} aria-label="Default select example">
                            <option>Deoil (south )</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className="row">
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label value={state.cityArea}>City Area</Form.Label>
                        <Form.Select name='cityArea' onChange={handleChange} aria-label="Default select example">
                            <option>~Select CityArea~</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label value={state.pincode}>Pincode</Form.Label>
                        <Form.Control name='pincode' onChange={handleChange} type="text" placeholder="Enter Pincode" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label>Buying For</Form.Label>
                        <Form.Select name='buyingFor' onChange={handleChange} value={state.buyingFor} aria-label="Default select example">
                            <option>Brother</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-2" controlId="exampleForm.ControlInput1">
                        <Form.Label >Email</Form.Label>
                        <Form.Control name='email' onChange={handleChange} value={state.email} type="text" placeholder="Enter Email" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-sm-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Lead Followup Status</Form.Label>
                        <Form.Select name='leadFollowupStatus' onChange={handleChange} value={state.leadFollowupStatus} aria-label="Default select example">
                            <option>~Select Status~</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>
                </div>
                <div className='row'>
                    <Button className='col-sm-1 me-2' variant="primary" onClick={() => {
                        DATA.push(state)
                    }}>Save</Button>
                    <Button className='col-sm-1 ms-2' variant="danger">Cancel</Button>
                </div>
            </div>
        </Form>
    );
}


export default HomePage