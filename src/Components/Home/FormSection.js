import React from 'react';

const FormSection = () => {
    return (
        <section className='container font-bold'>
            <div className="d-flex">
                <div className='me-2'>
                    <button className='details-btn'>
                        <span className='me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 640 512"><path d="M400 0c5 0 9.8 2.4 12.8 6.4c34.7 46.3 78.1 74.9 133.5 111.5l0 0 0 0c5.2 3.4 10.5 7 16 10.6c28.9 19.2 45.7 51.7 45.7 86.1c0 28.6-11.3 54.5-29.8 73.4H221.8c-18.4-19-29.8-44.9-29.8-73.4c0-34.4 16.7-66.9 45.7-86.1c5.4-3.6 10.8-7.1 16-10.6l0 0 0 0C309.1 81.3 352.5 52.7 387.2 6.4c3-4 7.8-6.4 12.8-6.4zM288 512V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H192c-17.7 0-32-14.3-32-32V352c0-17.7 14.3-32 32-32H608c17.7 0 32 14.3 32 32V480c0 17.7-14.3 32-32 32H560V440c0-13.3-10.7-24-24-24s-24 10.7-24 24v72H448V454c0-19-8.4-37-23-49.2L400 384l-25 20.8C360.4 417 352 435 352 454v58H288zM70.4 5.2c5.7-4.3 13.5-4.3 19.2 0l16 12C139.8 42.9 160 83.2 160 126v2H0v-2C0 83.2 20.2 42.9 54.4 17.2l16-12zM0 160H160V296.6c-19.1 11.1-32 31.7-32 55.4V480c0 9.6 2.1 18.6 5.8 26.8c-6.6 3.4-14 5.2-21.8 5.2H48c-26.5 0-48-21.5-48-48V176 160z" /></svg>
                        </span>
                        UMRAH
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn'>
                        <span className='me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 640 512"><path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z" /></svg>
                        </span>
                        FLIGHTS
                    </button>
                </div>
                <div className='me-2'>
                    <button className='details-btn'>
                        <span className='me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 640 512"><path d="M64 160C64 89.3 121.3 32 192 32H448c70.7 0 128 57.3 128 128v33.6c-36.5 7.4-64 39.7-64 78.4v48H128V272c0-38.7-27.5-71-64-78.4V160zM544 272c0-20.9 13.4-38.7 32-45.3c5-1.8 10.4-2.7 16-2.7c26.5 0 48 21.5 48 48V448c0 17.7-14.3 32-32 32H576c-17.7 0-32-14.3-32-32H96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V272c0-26.5 21.5-48 48-48c5.6 0 11 1 16 2.7c18.6 6.6 32 24.4 32 45.3v48 32h32H512h32V320 272z" /></svg>
                        </span>
                        HOTELS
                    </button>
                </div>
                <div>
                    <button className='details-btn'>
                        <span className='me-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill='#02A3C1' width="20" height="20" viewBox="0 0 448 512"><path d="M224 0C348.8 0 448 35.2 448 80V96 416c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32V96 80C0 35.2 99.2 0 224 0zM64 128V256c0 17.7 14.3 32 32 32H352c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zM80 400c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" /></svg>
                        </span>
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