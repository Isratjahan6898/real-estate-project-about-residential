import { Helmet } from "react-helmet-async";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Real Esate |contact
                </title>
            </Helmet>
           

           <div className="my-[40px] md:mx-[40px] lg:mx-[100px]">
            <h1 className="font-bold text-4xl">Get In Touch</h1>
            <p className="mt-[20px]">At <span className="font-bold">residentRealm</span>, we understand that finding your dream home is a significant decision. Our dedicated team is here to assist you every step of the way. Whether you have inquiries about floor plans, amenities, or financing options, we're just a message or call away.</p>

            <h1 className="font-bold text-3xl mt-[20px]">Contact Information:</h1>
            <p className="font-bold text-3xl my-[20px]">Address:</p>
            <p><span className=" ">Street:1234 Oak Street
Springfield, IL 62701</span></p>
            <p className="font-bold text-3xl mb-[20px] mt-[20px">Phone:</p>
            <p>(555) 123-4567</p>
            <p className="font-bold text-3xl my-[20px]">Email:</p>
            <a className="text-blue-800" href="#">info@residentRealm.com</a>
            <p className="font-bold text-3xl my-[20px]">Sales Office Hours:</p>
            <p>
            Monday - Friday: 9:00 AM - 6:00 PM
           <br></br>Saturday - Sunday: 10:00 AM - 4:00 PM
            </p>

            <p className="font-bold text-3xl my-[20px]">Schedule a Visit:</p>
            <p>
            We invite you to experience the beauty and comfort of [Residence Name] firsthand. Schedule a personalized tour with one of our knowledgeable sales representatives. Let us show you why [Residence Name] is the perfect place to call home.
            </p>

            <p><p className="font-bold text-3xl my-[20px]">Stay Connected:</p></p>
            <p>Stay updated on the latest news, events, and promotions by following us on social media. Join our online community to connect with other residents and learn more about life at [Residence Name].</p>

            <p className="font-bold text-3xl my-[20px]">Follow Us:</p>

            <ul className="list-disc">
                <li className="my-[20px]">
                <CiFacebook className="text-3xl text-blue-600" />
                </li>
                <li className="mb-[20px]">
                <FaTwitter  className="text-3xl"/>
                </li>

                <li>
                <FaLinkedin className="text-3xl"/>
                </li>
            </ul>
           </div>

           
        </div>
    );
};

export default Contact;