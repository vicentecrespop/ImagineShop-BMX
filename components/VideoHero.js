export default function VideoHero() {
    return (
        <div className="position-relative d-flex justify-content-center align-items-center">
            <video className="w-100 h-100" autoPlay="1" preload="1" muted loop="1" playsInline="1">
                <source src="Video-BMX.mp4" type="video/mp4" />
            </video>
            <div className="video-hero--info position-absolute">
                <div className="d-flex flex-column">
                    <img className="m-4 video-hero--image" src="logo.png" alt="Logo-ImagineShop"/>
                    <div className="video-hero--image--bottom w-100 text-center mb-4 text-white py-3 border border-dark border-5 rounded-5">
                        <span className="fw-bold user-select-none" style={{ color: "#c55d25", fontSize: "60px"}}>BMX SALE</span>
                    </div>
                </div>
                <div className="w-100 d-flex">
                    <a href="store/promocoes" className="video-hero--button text-decoration-none pointer bg-dark rounded-3 bg-gradient bg-opacity-75 w-50 py-3 text-white text-center border-0 me-2">VER PROMOÇÕES</a>
                    <a href="store/novidades" className="video-hero--button text-decoration-none pointer bg-dark rounded-3 bg-gradient bg-opacity-75 w-50 py-3 text-white text-center border-0">VER NOVIDADES</a>
                </div>
            </div>
        </div>
    )
}