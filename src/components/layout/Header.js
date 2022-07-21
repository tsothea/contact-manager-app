import '../../App.css';
import photo from '../../images/logo.jpg'
import Profile from '../Profile';

export default function Header() {
    return (
        <>
            <Profile name="John Doe" photo={photo}></Profile>
        </>
    )
}