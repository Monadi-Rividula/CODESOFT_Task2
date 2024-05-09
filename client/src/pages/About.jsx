import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-red-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Welcome to Job Board, where the perfect match between talent and opportunity is made possible. Our platform serves as the bridge connecting top-tier employers like Google, Microsoft, LinkedIn, and Spotify with skilled professionals seeking their next career move.
          At Job Board, we're committed to fostering a dynamic ecosystem where talent thrives and businesses flourish. By leveraging cutting-edge technology and industry expertise, we strive to revolutionize the way employers connect with candidates, facilitating meaningful career advancements and organizational growth.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        At Job Board, we understand the pivotal role that employment plays in shaping lives and driving organizational success. Whether you're a seasoned industry leader or an ambitious newcomer, our platform offers a comprehensive solution designed to streamline the recruitment process and empower individuals to achieve their career goals.

        </p><br/>
        <p><b>For Employers:</b><br/>
        Our user-friendly interface empowers employers to effortlessly post job openings, attracting top talent from diverse fields and backgrounds. From entry-level positions to executive roles, Job Board provides the tools necessary to reach and engage with the ideal candidates. Employers can manage their recruitment process efficiently, from reviewing applications to scheduling interviews, all within a centralized platform.
        <br/>
        <b>For Job Seekers:</b><br/>
        Discovering the right career opportunity has never been easier. With Job Board, job seekers gain access to a vast array of employment opportunities from renowned companies across various industries. Our advanced search filters and personalized recommendations ensure that each user finds roles tailored to their skills, experience, and aspirations. Additionally, job seekers can create and manage their profiles, showcasing their expertise and enhancing their visibility to potential employers.
        </p>
        <br/>
        Join us in shaping the future of work. Whether you're an employer seeking top talent or a job seeker pursuing your dream role, Job Board is your trusted partner every step of the way.
      </div>
    </div>
  );
};

export default About;