import React from 'react';

const FormSection = () => {
    return (
        <section className='container font-bold'>
            <div className="d-flex">
                <div className='me-2'>
                    <button className='details-btn'>
                        UMRAH
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn'>
                        FLIGHTS
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn'>
                        HOTELS
                    </button>
                </div>
                <div>
                    <button className='details-btn'>
                        BUSES
                    </button>
                </div>
                
            </div>
            <form action="" className='bg-white p-4'>
                <div className="row my-2 gap-3">
                    <div className='col-3'>
                        <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2 font-uppercase">COUNTRY</label>
                        </div>
                        <input type="text" placeholder='Eg: India' class="form-control" />
                    </div>
                    <div className='col-3'>
                        <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" /></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2">CITY</label>
                        </div>
                        <input type="text" placeholder='Eg: Mumbai' class="form-control" />
                    </div>
                    <div className='col-3'>
                        <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" /></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2">DURATION</label>
                        </div>
                        <input type="date" placeholder='Eg: 2 Oct 2022' class="form-control" />
                    </div>
                    <div className='col'>
                        <div className="d-flex">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z" /></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2">TRAVEL DATE</label>
                        </div>
                        <input type="date" placeholder='Day: DD MM YYYY' class="form-control" />
                    </div>

                </div>
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex gap-2 align-items-center">
                        <div className='px-1'>
                            <label for="exampleInputDeparture" class="form-label">ADULT</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">+</span>
                                </button>
                                <input type="number" class="form-control text-center" placeholder='1' />
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">-</span>
                                </button>
                            </div>
                        </div>
                        <div className='px-1'>
                            <label for="exampleInputDeparture" class="form-label">CHILD(REN)</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">+</span>
                                </button>
                                <input type="number" class="form-control text-center" placeholder='02' />
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">-</span>
                                </button>
                            </div>
                        </div>
                        <div className='px-1'>
                            <label for="exampleInputDeparture" class="form-label ">INFANT(S)</label>
                            <div class="input-group">
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">+</span>
                                </button>
                                <input type="number" class="form-control text-center" placeholder='02' />
                                <button class="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
                                    <span className="font-bold">-</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="search-btn" type="button">SEARCH</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default FormSection;