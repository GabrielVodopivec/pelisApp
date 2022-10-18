import logoSofttek from '../../assets/images/softtek-white.webp'

export default function Footer() {
    return (
        <footer className="footer text-center text-light">
            <img src={logoSofttek} alt="logo" />
            
            <p> Gabriel Vodopivec</p>
        </footer>
    )
}