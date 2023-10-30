import Title from '../Title/Title';
import TeamCarousal from './TeamCarousal';

const Team = () => {
    return (
        <div className='flex flex-col gap-10 my-28'>
            <Title title={'Best Expert Designer'} subtitle={'Our Team'} />
            <div className='mx-28'>
                <TeamCarousal />
            </div>
        </div>
    );
};

export default Team;