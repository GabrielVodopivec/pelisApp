import logoSofttek from '../../assets/images/softtek-white.webp'
export default function Footer() {
    return (
        <footer className="footer text-center text-light">
            <a href="https://www.softtek.com/es/" target={"_blank"} rel="noopener noreferrer">
                <img src={logoSofttek} alt="logo" />
            </a>
            <p> Gabriel Vodopivec</p>
            <a className='github' href="https://github.com/GabrielVodopivec" target="_blank" rel="noopener noreferrer">
                github
            </a>
        </footer>
    )
}