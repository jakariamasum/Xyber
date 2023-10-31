import Title from "../../components/Title/Title";

const ContactForm = () => {
    return (
        <div className="my-16">
            <Title subtitle={'Contact Form'} title={'Get a Quote'} />
            <form className="mx-28 mt-10">
                <div className="flex gap-4">
                    <input type="text" name="" id="" placeholder="First Name" className="py-4 px-2 rounded-sm border border-black w-full" />
                    <input type="text" name="" id="" placeholder="Last Name" className="py-4 px-2 rounded-sm border border-black w-full" />
                </div>
                <div className="flex gap-4 my-6">
                    <input type="email" name="" id="" placeholder="Email" className="py-4 px-2 rounded-sm border border-black w-full" />
                    <input type="number" name="" id="" placeholder="Phone No." className="py-4 px-2 rounded-sm border border-black w-full" />
                </div>
                <div>
                    <input type="text" name="" id="" placeholder="Subject" className="py-4 px-2 rounded-sm border border-black w-full" />
                </div>
                <div>
                    <textarea name="" id="" cols="5" rows="5" placeholder="Write comments" className="w-full my-6 border border-black rounded-sm py-6 px-4"></textarea>
                </div>
                <div className="mx-auto text-center">
                    <input type="submit" value="Submit" className="bg-[#FF7425] px-8 rounded-lg text-white cursor-pointer py-4" />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;