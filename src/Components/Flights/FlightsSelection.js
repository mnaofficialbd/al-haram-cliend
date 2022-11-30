import React from 'react';
import FlightsSearchSection from './FlightsSearchSection';

const FlightsSelection = () => {
    return (
        <section className='mt-5 p-5' style={{ background: '#02A3C1' }}>
            <div className='mt-5'>
            <div className='d-flex justify-content-center align-items-center text-center py-2'>
                <div className="width_40 d-md-flex justify-content-around align-items-center bg-white">
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">One-Way</label>
                    </div>
                    <div className="border_right"></div>
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Round-Trip</label>
                    </div>
                    <div className="border_right"></div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Multi-City</label>
                    </div>
                </div>
            </div>
            <FlightsSearchSection />  
            </div>
        </section>
    );
};

export default FlightsSelection;