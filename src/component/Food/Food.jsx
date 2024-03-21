import { useNavigate } from "react-router-dom";

const Food = ({categorie}) => {
    
    const {strCategory,strCategoryThumb,strCategoryDescription} = categorie;
    const navigator = useNavigate()
    const handleShowCategoryDetails = () =>  {
        navigator(strCategory)
    }
    
    return (
        <div className="border p-6 rounded-2xl flex flex-col justify-between">
            <div>
                <img className="w-full rounded-2xl" src={strCategoryThumb} alt="" />
            </div>
            <h1 className="text-lg font-medium">Categorie Name: {strCategory}</h1>
            <p className="text-gray-500 font-medium text-base">{strCategoryDescription.slice(0,100)}</p>
            <button onClick={handleShowCategoryDetails} className="text-2xl font-medium py-3 bg-sky-500 hover:bg-sky-700 transition-all duration-500 w-full rounded-xl mt-4 text-white">Show Details</button>
        </div>
    );
};

export default Food;