import { FaEnvelope, FaGlobe, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import img from '../../assets/team03.jpg'
import ProgressBar from './ProgressBar';
import Banner from '../../components/Bannar/Banner';
import banner from '../../assets/banner-3.jpg'
const TeamDetails = () => {
    return (
        <div>
            <Banner name={'Team Details'} first={'Home'} second={'Team Details'} img={banner}/>
            <div className=' flex gap-12 mx-28 bg-white py-16 px-8'>
                <div className='w-[40%]'>
                    <img src={img} alt="" className='rounded-lg' />
                    <div className='ml-10 flex flex-col gap-6 mt-5'>
                        <h1 className='text-2xl font-bold'>Personal Info</h1>
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-4'><FaEnvelope fill='#FF7325' /> <span className='font-bold text-xl'>Email</span><span className='ml-8 text-[#444]'>example@info.com</span></p>
                            <p className='flex items-center gap-4'><FaPhone fill='#FF7325' /> <span className='font-bold text-xl'>Phone</span><span className='ml-8 text-[#444]'>980-786-098-09</span></p>
                            <p className='flex items-center gap-4'><FaMapMarkerAlt fill='#FF7325' /> <span className='font-bold text-xl'>Address</span><span className='ml-8 text-[#444]'>12/A, Miranda City Hall, NYC</span></p>
                            <p className='flex items-center gap-4'><FaGlobe fill='#FF7325' /> <span className='font-bold text-xl'>Website</span><span className='ml-8 text-[#444]'>www.webexample.com</span></p>
                        </div>
                    </div>
                </div>
                <div className='w-[60%]'>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, culpa modi non deleniti ex nemo, repudiandae rem, tenetur hic sed porro voluptas laudantium eos repellendus quo corporis ea eveniet eum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quo, laudantium illum distinctio veniam quis. Tempore accusantium repellendus quas rem eius iure odit, mollitia maxime quasi recusandae fugiat exercitationem, placeat minima odio eaque libero ut ratione numquam voluptatibus id magnam. Similique, corporis nemo nostrum saepe aut accusamus id molestias cum inventore distinctio, fugiat numquam totam porro quod voluptatibus autem libero sed harum repellat odio, illum ipsa vitae! Aliquam obcaecati rem molestias. Dicta itaque, suscipit, totam reprehenderit corrupti placeat optio eius ipsam minima quis pariatur vel similique facere, quaerat ut porro! Corrupti libero expedita temporibus dolores totam optio soluta enim aspernatur!</p>
                        <br /><br />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum inventore nesciunt reiciendis vero eligendi, magnam voluptate dignissimos molestiae delectus et doloremque voluptates, repellendus commodi? Itaque minima ea, dignissimos facere vero architecto excepturi at saepe voluptate quas totam, suscipit, beatae aut illo deserunt quos vitae earum et fugit. Quisquam nam ratione eligendi voluptate hic enim, voluptatibus, possimus temporibus amet reiciendis doloribus fugit, doloremque magni placeat dolore eos nesciunt aliquam et quis ea. Obcaecati, quos autem aspernatur cumque vel earum reiciendis excepturi sint, officia provident itaque magnam voluptate quae fugiat unde dicta atque aliquid tempore, perferendis doloremque. Unde ullam nisi at dicta. Sequi dolor magnam dignissimos quisquam quia, enim harum eos rem, alias ad voluptatum atque itaque veritatis iure! Reiciendis accusantium aliquid deserunt ducimus explicabo fuga adipisci rerum accusamus facere quam, cum laudantium libero quibusdam amet sint quos, ut officia inventore magnam repudiandae distinctio a animi. Facere ullam facilis, sed voluptate doloremque ratione quisquam sit molestias reprehenderit similique laudantium rem natus inventore magnam, dignissimos quidem quos voluptas eum, praesentium explicabo libero totam perspiciatis error sint! Cum animi, necessitatibus velit praesentium .
                        </p>
                    </div>
                    <div>
                        <ProgressBar progress={'80'} name={'Design'} />
                        <ProgressBar progress={'90'} name={'Easy Manage'} />
                        <ProgressBar progress={'70'} name={'Project Organize'} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TeamDetails;