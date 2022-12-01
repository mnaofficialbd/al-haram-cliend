import React from 'react';
import FlightsSearchSection from './FlightsSearchSection';

const FlightsSelection = () => {
    return (
        <section className='mt-5 pt-5 pb-2' style={{ background: '#02A3C1' }}>
            <div className='mt-5'>
                <FlightsSearchSection />
                <div className="d-flex text-white ms-lg-5 ps-lg-5 py-2">
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">One-Way</label>
                    </div>
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Round-Trip</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Multi-City</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlightsSelection;