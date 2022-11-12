import React from 'react';

const FlightsForm = () => {
    return (
        <form action="" className='bg-white p-4 mb-4'>
            <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold font-uppercase">DEPARTURE</label>
                    </div>
                    <input type="text" placeholder='Eg: India' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold ms-2">DESTINATION</label>
                    </div>
                    <input type="text" placeholder='Eg: Mumbai' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" /></svg>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">DEPARTURE DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MMM YYYY' className="form-control" />
                </div>
                <div className='col'>
                    <div className="d-flex">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" /></svg>
                        </span>
                        <label htmlFor="exampleInputDeparture" className="form-label ms-2 font-semibold">RETURN DATE</label>
                    </div>
                    <input type="date" placeholder='Day: DD MMM YYYY' className="form-control" />
                </div>


            </div>
            <div className="d-md-flex justify-content-between align-items-center mt-4">
                <div className="d-flex">
                    <div className='me-4'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">AIRLINE</label>
                        <input type="text" placeholder='Eg: Qatar Airlines' className="form-control" />
                    </div>
                    <div className=''>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CLASS</label>
                        <input type="date" placeholder='Eg: Economy' className="form-control" />
                    </div>
                </div>
                <div className="d-flex gap-2 align-items-center justify-content-end">
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">ADULT</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='1' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">CHILD(REN)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='1' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                    <div className='px-1 w-25'>
                        <label htmlFor="exampleInputDeparture" className="form-label font-semibold">INFANT(S)</label>
                        <div className="input-group">
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">+</span>
                            </button>
                            <input type="number" className="form-control text-center" placeholder='1' />
                            <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                <span className="font-bold">-</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">One-Way</label>
                    </div>
                    <div class="form-check me-3">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Round-Trip</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="flexCheckChecked" />
                        <label class="form-check-label" htmlFor="flexCheckChecked">Multi-City</label>
                    </div>
                </div>
                <div className='m-2'>
                    <button className="search-btn" type="button">SEARCH</button>
                </div>
            </div>
        </form>
    );
};

export default FlightsForm;