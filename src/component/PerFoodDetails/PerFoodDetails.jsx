import { useLoaderData } from "react-router-dom";

const PerFoodDetails = () => {
    const foodDetails = useLoaderData()

    return (
        <div>
            <h1>Food data {}</h1>
        </div>
    );
};

export default PerFoodDetails;