import React from 'react';

const FormSection = () => {
    return (
        <section className='container py-4'>
            <form action="">
                <div className="row row-cols-3 row-cols-lg-5 my-3 gap-3 ">
                    <div className='col'>
                        <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2">DEPARTURE</label>
                        </div>
                        <input type="text" placeholder='Eg: London' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">DESTINATION</label>
                        </div>
                        <input type="text" placeholder='Eg: Cape Town' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">DEPARTURE DATE</label>
                        </div>
                        <input type="date" placeholder='Eg: Day, DD MM YYYY' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">RETURN DATE</label>
                        </div>
                        <input type="date" placeholder='Eg: Day, DD MM YYYY' class="form-control" />
                    </div>

                </div>
                <div className="row row-cols-3 row-cols-lg-5 gap-3 my-3 ">
                    <div className='col'>
                        <div className="d-flex">
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 576 512"><path d="M482.3 192c34.2 0 93.7 29 93.7 64c0 36-59.5 64-93.7 64l-116.6 0L265.2 495.9c-5.7 10-16.3 16.1-27.8 16.1l-56.2 0c-10.6 0-18.3-10.2-15.4-20.4l49-171.6L112 320 68.8 377.6c-3 4-7.8 6.4-12.8 6.4l-42 0c-7.8 0-14-6.3-14-14c0-1.3 .2-2.6 .5-3.9L32 256 .5 145.9c-.4-1.3-.5-2.6-.5-3.9c0-7.8 6.3-14 14-14l42 0c5 0 9.8 2.4 12.8 6.4L112 192l102.9 0-49-171.6C162.9 10.2 170.6 0 181.2 0l56.2 0c11.5 0 22.1 6.2 27.8 16.1L365.7 192l116.6 0z"/></svg>
                            </span>
                            <label for="exampleInputDeparture" class="form-label ms-2">AIRLINE</label>
                        </div>
                        <input type="search" placeholder='Type your search terms' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M32 0C19.1 0 7.4 7.8 2.4 19.8s-2.2 25.7 6.9 34.9L224 269.3V448H160c-17.7 0-32 14.3-32 32s14.3 32 32 32h96 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H288V269.3L502.6 54.6c9.2-9.2 11.9-22.9 6.9-34.9S492.9 0 480 0H32zM173.3 128l-64-64H402.7l-64 64H173.3z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">CABIN</label>
                        </div>
                        <input type="text" placeholder='Eg: Cape Town' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">DEPARTURE DATE</label>
                        </div>
                        <input type="date" placeholder='Eg: Day, DD MM YYYY' class="form-control" />
                    </div>
                    <div className='col'>
                    <div className="d-flex">
                            <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 248H128V192H48V248zM48 296V360H128V296H48zM176 296V360H272V296H176zM320 296V360H400V296H320zM400 192H320V248H400V192zM400 408H320V464H384C392.8 464 400 456.8 400 448V408zM272 408H176V464H272V408zM128 408H48V448C48 456.8 55.16 464 64 464H128V408zM272 192H176V248H272V192z"/></svg>
                            </span>
                        <label for="exampleInputDeparture" class="form-label ms-2">RETURN DATE</label>
                        </div>
                        <input type="date" placeholder='Eg: Day, DD MM YYYY' class="form-control" />
                    </div>

                </div>
            </form>
        </section>
    );
};

export default FormSection;