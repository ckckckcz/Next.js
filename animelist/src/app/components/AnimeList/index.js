import Image from "next/image"
const AnimeList = ({title, image}) => {
    return (
        <div className="bg-indigo-500">
            <Image src="{image}" width={600}height={400}/>
            <h3>{title}</h3>
        </div>
    )
}

export default AnimeList