import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
                <p className='text-red-500 text-xl mb-5'>Sorry not found. Try Again</p>
                <Link to='/'><button className='p-3 bg-[#FF7425] rounded-sm text-white'>Go to Home</button></Link>
            </div>
        </div>
    );
};

export default Error;