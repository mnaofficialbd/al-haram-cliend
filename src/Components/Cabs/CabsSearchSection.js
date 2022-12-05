import React from 'react';

const CabsSearchSection = () => {
    return (
        <section className='mt-5 pt-5 pb-2' style={{ background: '#02A3C1' }}>
            <div className='mt-5'>
                <p className="text-center text-white text-capitalize mb-2" style={{fontSize: '28px'}}>Book outstation and hourly cab Online</p>
                
                <div className="d-flex text-white justify-content-center py-2">
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Outstation One-Way</label>
                    </div>
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Outstation Round-Trip</label>
                    </div>
                    <div class="form-check me-4">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Airport Transfers</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Hourly Rental</label>
                    </div>
                </div>
                <form>
                    <div className='mx-4 d-md-flex pb-3 justify-content-center text-white'>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">pick-up location</p>
                            <input type="text" className='width_99' placeholder='Mumbai' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">drop-off locations</p>
                            <input type="text" className='width_99' placeholder='Delhi' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">pick-up date & time</p>
                            <input type="text" className='width_99' placeholder='06/12/22  04:30PM' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">Add return</p>
                            <input type="text" className='width_99' placeholder='ADD RETURN' />
                        </div>

                        <div className='width_13_75 p-1'>
                            <p className="text-uppercase m-0">passenger</p>
                            <input type="text" className='width_99' placeholder='1 ADULT' />
                        </div>
                        <div className='pb-1 d-flex align-items-end justify-content-center'>
                            <button className="custom_btn px-1" type="submit">SEARCH</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CabsSearchSection;