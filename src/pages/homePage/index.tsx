import React, { useState, useCallback } from 'react'
import NavBar from '../../components/navBar';
import SideBar from '../../components/sideBar';
import Section from '../../components/section';
import FormData from '../../components/formData';
import GeneratedLeads from '../../components/generatedLeads';
export let DATA: any[] = []

const HomePage = () => {



    return (
        <div >
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Section />
                        <FormData />
                        <GeneratedLeads />
                    </main>
                </div>
            </div>
        </div>
    );
}


export default HomePage