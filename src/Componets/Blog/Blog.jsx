import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div>

       <Helmet>
                <title>
                    Real Esate |Blog
                </title>
            </Helmet>
            <div className="mx-[10px] md:mx-[40px] lg:mx-[100px] my-[40px]">
                <h1 className="font-bold text-3xl">Welcome to Our Private Blog Section!</h1>
                <p className="my-[30px]">Welcome to the exclusive blog section of our residential webpage. Here, residents can access valuable information, updates, and tips tailored specifically to enhance your living experience. From community events to maintenance reminders, this is your go-to resource for staying informed and connected with your neighbors.</p>

                <h1 className="font-bold text-3xl">Stay Informed, Stay Connected</h1>
                <p className="my-[30px]">Our blog is more than just a platform for announcements; it's a community hub where residents can engage with each other and share insights. Whether you're looking for the latest news about upcoming renovations, seeking recommendations for local services, or simply want to connect with fellow residents, our blog provides a space for meaningful interaction.</p>

               <h1 className="font-bold text-3xl">Exclusive Content</h1>
               <p className="my-[30px]">As a resident, you'll have access to exclusive content not available to the general public. Enjoy in-depth articles on home improvement, neighborhood spotlights, interviews with local vendors, and much more. Our goal is to provide you with valuable resources that enhance your residential experience and make you feel right at home.</p>

               <h1 className="font-bold text-3xl">Your Input Matters</h1>
               <p className="my-[30px]">We value your feedback and encourage you to actively participate in our blog community. Have a topic you'd like us to cover? Interested in sharing your own expertise or experiences? Let us know! Your input helps shape the content of our blog and ensures that it remains relevant and engaging for all residents.</p>

               <h1 className="font-bold text-3xl">Stay Connected, Stay Engaged</h1>
               <p className="my-[30px]">Bookmark this page and check back regularly for updates. Whether you're a long-time resident or new to the neighborhood, our blog is here to help you make the most of your residential experience. Thank you for being part of our community, and we look forward to sharing valuable insights and experiences with you through our private blog section.</p>


            </div>
        </div>
    );
};

export default Blog;