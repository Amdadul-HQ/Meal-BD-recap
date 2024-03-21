import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
    const {categories} = useLoaderData()
    return (
        <div>
            <h1>This is Foods Section</h1>
            <h1>Total Categories {categories.length}</h1>
            <div className="grid grid-cols-3 gap-6">
            {
                categories.map( categorie => <Food key={categorie.idCategory} categorie={categorie}></Food> )
            }
            </div>
        </div>
    );
};

export default Foods;