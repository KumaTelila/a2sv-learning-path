import React from "react";
import { FaFireAlt, FaRegCalendarAlt } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuPlusCircle } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Description = () => {
    return (
        <div className="flex p-8 justify-between">
            <div className="flex flex-col gap-14 w-[75%]">
                <div className="flex flex-col gap-4">
                    <div className="text-[24px] font-Poppins font-black font-Poppins">
                        <h1>Description</h1>
                    </div>
                    <div className="text-[16px] font-Epilogue font-normal">
                        <p>
                            As a Social Media Assistant, you will work closely with the social
                            media manager or marketing team to execute social media strategies
                            and campaigns. You will be responsible for assisting in the
                            creation and scheduling of engaging content, monitoring social
                            media channels, and interacting with followers. Your primary goal
                            will be to enhance brand visibility, foster positive relationships
                            with the audience, and drive engagement and conversions
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[24px] font-Poppins font-black font-Poppins">
                        <h1>Responsibilities</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex  gap-2">
                            <div className="w-5 h-5">
                                <IoCheckmarkCircleOutline color="#56CDAD" size={20} />
                            </div>
                            <div className="text-[16px] font-Epilogue font-normal">
                                <p>
                                    Community engagement to ensure that is supported and actively
                                    represented online
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-5 h-5">
                                <IoCheckmarkCircleOutline color="#56CDAD" size={20} />
                            </div>
                            <div className="text-[16px] font-Epilogue font-normal">
                                <p>
                                    Community engagement to ensure that is supported and actively
                                    represented online
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-5 h-5">
                                <IoCheckmarkCircleOutline color="#56CDAD" size={20} />
                            </div>
                            <div className="text-[16px] font-Epilogue font-normal">
                                <p>
                                    Community engagement to ensure that is supported and actively
                                    represented online
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-5 h-5">
                                <IoCheckmarkCircleOutline color="#56CDAD" size={20} />
                            </div>
                            <div className="text-[16px] font-Epilogue font-normal">
                                <p>
                                    Community engagement to ensure that is supported and actively
                                    represented online
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[24px] font-Poppins font-black font-Poppins">
                        <h1>Idal Candidates we want</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex  gap-2">
                            <div className="text-[16px] font-Epilogue font-normal">

                                <ul>
                                    <li>

                                        Young(18-24 year old) Female social media manager Passionate &
                                        Reliable: Genuine interest in our mission and a strong desire
                                        to make a positive impact, responsible, and committed to
                                        fulfilling volunteer commitments. Adaptable, Team Player &
                                        Strong Communication Skills: Able to work effectively in
                                        diverse teams; and contributes positively.Flexible and open to
                                        embracing new challenges and shifting priorities; Clear verbal
                                        and written communication, active listening, and constructive
                                        feedback. Respectful: Embraces diversity, inclusive, and
                                        treats others with respect. Abides with all our rules and
                                        regulations
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="text-[24px] font-Poppins font-black font-Poppins">
                        <h1>When & Where</h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex  gap-2">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <SlLocationPin color="#26A4FF" size={24} />
                            </div>
                            <div className="text-[16px] font-Epilogue font-normal pt-3">
                                <p>
                                    The onboading event for this event will take place in Jan 18th, 2023 in AAU Auditorium
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ml-16 w-[25%] items-center">
                <div className="flex flex-col gap-5">
                    <div className="text-[24px] font-Poppins font-black font-Poppins">
                        <h1>About</h1>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <LuPlusCircle color="#26A4FF" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <div className='text-base font-Epilogue text-[#515B6F] font-normal'>
                                    <h3>Posted On</h3>
                                </div>
                                <div className='text-base font-Epilogue text-[#25324B] font-semibold'>
                                    <h3>Jul 1, 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <FaFireAlt color="#26A4FF" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <div className='text-base font-Epilogue text-[#515B6F] font-normal'>
                                    <h3>Deadline</h3>
                                </div>
                                <div className='text-base font-Epilogue text-[#25324B] font-semibold'>
                                    <h3>Jul 1, 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <SlLocationPin color="#26A4FF" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <div className='text-base font-Epilogue text-[#515B6F] font-normal'>
                                    <h3>Location</h3>
                                </div>
                                <div className='text-base font-Epilogue text-[#25324B] font-semibold'>
                                    <h3>Addis Ababa</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <FaRegCalendarAlt color="#26A4FF" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <div className='text-base font-Epilogue text-[#515B6F] font-normal'>
                                    <h3>Start Date</h3>
                                </div>
                                <div className='text-base font-Epilogue text-[#25324B] font-semibold'>
                                    <h3>Jul 1, 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex gap-4">
                            <div className="w-11 h-11 p-2 rounded-full gap-2 border border-[#D6DDEB] justify-center">
                                <FaRegCalendarCheck color="#26A4FF" size={24} />
                            </div>
                            <div className="flex flex-col">
                                <div className='text-base font-Epilogue text-[#515B6F] font-normal'>
                                    <h3>End Date</h3>
                                </div>
                                <div className='text-base font-Epilogue text-[#25324B] font-semibold'>
                                    <h3>Jul 1, 2023</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-[24px] font-Poppins font-black font-Poppins">
                            <h1>Categories</h1>
                        </div>
                        <div className="flex gap-2">
                            <div className=" bg-[#eb86332a] rounded-[80px] gap-2 pl-2 pt-3 pr-2 pb-3 ">
                                <div className="text-sm font-semibold text-[#FFB836] font-Epilogue">
                                    <h4 >Marketing</h4>
                                </div>
                            </div>
                            <div className=" bg-[#56cdad3a] rounded-[80px] gap-2 pl-2 pt-3 pr-2 pb-3 ">
                                <div className="text-sm font-semibold text-[#56CDAD] font-Epilogue">
                                    <h4 >Design</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="text-[24px] font-Poppins font-black font-Poppins">
                            <h1>Required Skills</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className=" bg-[#4540de10] gap-4 pl-2 pt-3 pr-2 pb-3 ">
                                <div className="text-sm font-normal text-[#4640DE] font-Epilogue">
                                    <h4 >Social Media Marketing</h4>
                                </div>
                            </div>
                            <div className=" bg-[#4540de10] gap-4 pl-2 pt-3 pr-2 pb-3 ">
                                <div className="text-sm font-normal text-[#4640DE] font-Epilogue">
                                    <h4 >English</h4>
                                </div>
                            </div>
                            <div className=" bg-[#4540de10] gap-4 pl-2 pt-3 pr-2 pb-3 ">
                                <div className="text-sm font-normal text-[#4640DE] font-Epilogue">
                                    <h4 >Copywriting</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Description;
