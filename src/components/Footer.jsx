import '../styles/Footer.css'

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p className='footer-text'>&copy; {year} Christopher Lim - INF226</p>
        </footer>
    );
}

export default Footer;