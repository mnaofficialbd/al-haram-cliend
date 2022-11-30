import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorClosed, faMessage, faShareNodes, faStar, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../Assets/Reviews/avatar.png';

const HajjUserReviews = () => {
    const cardsData = [{ id: 1 }, { id: 2 }, { id: 3 }]

    return (
        <section className='container px-5'>
            <div className="mx-4">
                <div class=" mx-5 py-2 mx-2 shadow">
                    <div className='pt-2'>
                        <p className='pt-2 mx-4 m-0 font-bold' style={{fontSize: '20px'}}>Write Your Rating Here</p>
                        <p className='pt-2 mx-4 m-0 text-capitalize'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                    </div>
                    <div className="d-flex ms-3 align-items-center px-2 pt-2">
                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                    </div>

                    {/* ====================
                              Form part
                    ====================== */}
                    <form className='px-4'>
                        <div className='mt-5'>
                            <div className="d-flex">
                                <input type='text' className='w-50 me-3 p-2 mb-4' style={{ height: '40px' }} placeholder='Enter Name' />
                                <input type='number' className='w-50 p-2 mb-4' style={{ height: '40px' }} placeholder='Enter Mobile' />
                            </div>
                            <div className="d-flex">
                                <input type='email' className='w-50 me-3 p-2 mb-4' style={{ height: '40px' }} placeholder='Enter Email Id' />
                                <input type='text' className='w-50 p-2 mb-4' style={{ height: '40px' }} placeholder='Enter Your City' />
                            </div>
                            <textarea className='w-100 p-2 mb-4' rows='6' placeholder='Write Your Massage'></textarea>
                            <div className="mb-4 text-center">
                                <button type='submit' className='font-semibold search-btn'>Submit</button>
                            </div>
                        </div>
                    </form>

                    {/* ====================
                            Comment cards
                    ====================== */}
                    {
                        cardsData.map(cardData => (
                            <div key={cardData.id} className="d-flex py-2 mx-4 mb-4 border border-dark shadow">
                                <div className="width_40 d-flex flex-column align-items-center justify-content-center">
                                    <div className='m-2'>
                                        <img src={avatar} alt="" style={{ width: '50px' }} />
                                    </div>
                                    <div>
                                        <h6 className="font-bold" style={{ fontSize: '12px' }}>John Smith</h6>
                                        <p className='' style={{ fontSize: '10px' }}>11 Aug 2020</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center pt-2">
                                        <FontAwesomeIcon className='me-2' style={{ color: '#FFE600', width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='me-2' style={{ color: '#FFE600', width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='me-2' style={{ color: '#FFE600', width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='me-2' style={{ color: '#FFE600', width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faStar}></FontAwesomeIcon>
                                    </div>
                                    <div className="mt-4">
                                        <p>
                                            Michael & his team have been helping us with our eqiupment finance for the past 5 years - I think that says a quite a lot.. Michael is always ready to go the extra mile, always available, always helpfull that goes the same for his team that work with him - definatley our first phone call
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex me-4">
                                            <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faThumbsUp}></FontAwesomeIcon>
                                            <p className="m-0">Like</p>
                                        </div>
                                        <div className="d-flex me-4">
                                            <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faThumbsDown}></FontAwesomeIcon>
                                            <p className="m-0">Dis-Like</p>
                                        </div>
                                        <div className="d-flex me-4">
                                            <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faDoorClosed}></FontAwesomeIcon>
                                            <p className="m-0">Report</p>
                                        </div>
                                        <div className="d-flex me-4">
                                            <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faMessage}></FontAwesomeIcon>
                                            <p className="m-0">Comment</p>
                                        </div>
                                        <div className="d-flex me-4">
                                            <FontAwesomeIcon className='me-2' style={{ width: "20px", height: "20px" }} icon={faShareNodes}></FontAwesomeIcon>
                                            <p className="m-0">Share Now</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default HajjUserReviews;