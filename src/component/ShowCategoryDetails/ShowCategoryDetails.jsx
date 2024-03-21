import { useLoaderData } from "react-router-dom";
import ShowSingleCategory from "../ShowSingleCategory/ShowSingleCategory";

const ShowCategoryDetails = () => {

    const {meals} = useLoaderData()
    return (
        <div>
            <h1>Hello from show Category Details {meals.length}</h1>
            <div className="grid grid-cols-4 gap-6">
            {
                meals.map( meal => <ShowSingleCategory key={meal.idMeal} meal={meal}></ShowSingleCategory> )
            }
            </div>
        </div>
    );
};

export default ShowCategoryDetails;