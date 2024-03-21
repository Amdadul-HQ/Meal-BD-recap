import { useNavigate } from "react-router-dom";


const ShowSingleCategory = ({meal}) => {
    const {strMeal,strMealThumb,idMeal} = meal;


    const login = false;
    const navigate = useNavigate()
    const handleFoodDetails = () => {
        if(login){

         navigate(`/food/${idMeal}`)
        }
    }
    return (
        <div className="p-5 rounded-xl border ">
            <div>
                <img className="w-full h-[200px] object-cover rounded-2xl" src={strMealThumb} alt="" />
            </div>
            <h1>Meals Name :  {strMeal}</h1>
            <button onClick={handleFoodDetails} className="text-2xl font-medium py-3 bg-sky-500 hover:bg-sky-700 transition-all duration-500 w-full rounded-xl mt-4 text-white">Show Details</button>
        </div>
    );
};

export default ShowSingleCategory;