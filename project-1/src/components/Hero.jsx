export default function Hero({source, name}){
    return (
        <img src={source} alt={name} className="hero-img" />
    )
}