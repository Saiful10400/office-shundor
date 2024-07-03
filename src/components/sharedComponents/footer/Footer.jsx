
import logo from '../../../assets/images/logo.jfif';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-gray-100 text-base-content">
                <aside>
                    <img src={logo} alt="" className='w-[100px] h-[100px] rounded-full' />
                    <p>Sundarban Courier Services Ltd.<br />Providing reliable courier services since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">News</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Order</a>
                </nav>
                {/* <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-gray-100 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;