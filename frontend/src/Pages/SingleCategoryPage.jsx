import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const SingleCategoryPage = () => {
    const { _id } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = (await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${_id}`)).data.meals
                setData(data)
                setTimeout(() => {
                    setLoading(false);
                }, 2000)
            } catch (error) {
                console.log(error)
                setLoading(false);
            }
        }
        fetchData()
    }, [_id])
    return (
        <section className='pt-[10%]'>
            <h1 className='text-7xl font-semibold text-yellow-900 text-center my-24'>{_id}</h1>
            <div className="flex flex-wrap justify-center gap-12 container m-auto px-6  md:px-12 lg:px-7">
                {loading ? <>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                    <div className='relative bg-gray-400 w-[500px] h-[250px] animate-pulse rounded-xl'>
                        <div className='absolute bottom-0 right-0 px-2 h-[80px] w-full bg-gray-500 rounded-xl flex flex-col gap-6 justify-center'>
                            <div className='relative bg-gray-400 w-[200px] h-[20px] animate-pulse rounded-xl'></div>
                            <div className='relative bg-gray-400 w-[100px] h-[10px] animate-pulse rounded-xl'></div>
                        </div>
                    </div>
                </> : <>
                    {data ? data?.map((meal) => (

                        <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal}>
                            <div className="cursor-pointer">
                                <div className="group relative m-0 flex h-72 max-w-96 rounded-xl shadow-xl  sm:mx-auto sm:max-w-lg overflow-hidden">
                                    <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:opacity-70">
                                        <img src={`${meal.strMealThumb}`} alt="" />
                                    </div>
                                    <div className="absolute w-full bg-white bottom-0 z-10 m-0 py-4 px-4 transition duration-300 ease-in-out rounded-xl">
                                        <h1 className={` font-bold text-yellow-900 ${meal.strMeal.length > 30 ? "text-lg" : "text-2xl"}`}>{meal.strMeal}</h1>
                                        <p className="text-sm  text-gray-700 font-semibold">{meal.strArea}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )) : <div className="grid justify-center gap-6">
                        <p className='text-4xl'>No {_id} Found.</p>
                        <Link to={"/categories"} className='underline text-sm font-semibold mx-auto text-gray-700 py-3 px-6 rounded-full bg-yellow-400'>
                            Back to previous page.
                        </Link>
                    </div>}
                </>}
            </div>
        </section>
    )
}

export default SingleCategoryPage