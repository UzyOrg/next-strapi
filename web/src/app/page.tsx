import Link from "next/link"
import { getGames, getCoverImage  } from "./services/videogames"
import { PreviousAndNextWithIcons } from "./components.js/pagination"
export default async function Home({searchParams}: {searchParams: {page: string}}) {
  const {page} = searchParams
  console.log(searchParams)
  console.log(page)
  const {data:games, pagination} = await getGames({ page: +searchParams.page})
  return (
    <main className="flex flex-col items-center items-center min-h-screen p-24">
      {games.map(({attributes, id})=> 
<Link key={id} href="#" className="flex flex-col items-center min-w-[600px] bg-gray rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={getCoverImage({attributes})} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal"> 
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{attributes.Title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ attributes.Description}</p>
    </div>
</Link >
)}
<PreviousAndNextWithIcons pagination={ pagination }/>
    </main>
  )
}
