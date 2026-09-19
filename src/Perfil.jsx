import { useState } from "react"

const DEFAULT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsB1YNZbdQlmBVRYe3bxPSyVBcLa5kfJg0xpIG2rYWXCFXa_EmFO1pgRAI&s=10"

function Perfil({ url, nome, newurl }) {
    const urlFinal = url || DEFAULT_URL
    const newUrlFinal = newurl || urlFinal

    const [src, setSrc] = useState(urlFinal)

    return (
        <div className="w-50 flex items-center justify-center flex-col gap-5">
            <img
                className="w-50 h-50 rounded-full"
                src={src}
                alt={nome}
                onMouseEnter={() => setSrc(newUrlFinal)}
                onMouseLeave={() => setSrc(urlFinal)}
            />
            <h3 className="text-gray-800">{nome}</h3>
        </div>
    )
}

export default Perfil