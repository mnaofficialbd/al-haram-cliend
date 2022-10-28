import React from 'react';

const HeroSearchSection = () => {
    return (
        <div className=' my-4 p-4'>
            <form>
                <div className="row row-cols-2 row-cols-lg-5 bg-white py-4">
                    <div className="col py-2">
                        <div className="d-flex">
                            <p className="">Search Country</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <div>
                            <input type="text" name="country" className='' />
                        </div>
                    </div>
                    <div className="col py-2">
                        <div className="d-flex">
                            <p className="">Search Country</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <div>
                            <input type="text" name="" value="" />
                        </div>
                    </div>
                    <div className="col py-2">
                        <div className="d-flex">
                            <p className="">Search Country</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <div>
                            <input type="text" name="" value="" />
                        </div>
                    </div>
                    <div className="col py-2">
                        <div className="d-flex">
                            <p className="">Search Country</p>
                            <span className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                            </span>
                        </div>
                        <div>
                            <input type="text" name="" value="" />
                        </div>
                    </div>

                    <div className="col py-2">
                        <input class="btn btn-success" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default HeroSearchSection;