// components/footer.jsx
import { FiFacebook,FiTwitter,FiInstagram,FiLinkedin,FiGithub} from "react-icons/fi";
const Footer = (props) => {
    return (
    <footer className="bg-dark text-center text-white">
        <div className="container p-4">
            <section className="mb-4">
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FiFacebook /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FiTwitter /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FiInstagram /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FiLinkedin /></a>
                <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><FiGithub /></a>
            </section>
            <section className="mb-4">
            <p>{props.descripcion}
            </p>
            </section>
        </div>
        <div className="text-center p-3">
            © 2022 Copyright
        </div>
    </footer>);
    };
export default Footer;