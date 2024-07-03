import { Outlet } from 'react-router-dom';
import Navbar from '../sharedComponents/navbar/Navbar';
import Footer from '../sharedComponents/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;