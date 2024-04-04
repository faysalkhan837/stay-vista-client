import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import CategoriBox from "./CategoriBox";
import { categories } from "./CategoryData";


const Categories = () => {
    const [params, setParams] = useSearchParams();
    const category = params.get('category')
    
    return (
        <Container>
            <div className="pt-4 flex items-center justify-center overflow-x-auto gap-2">
                {
                    categories.map(item => <CategoriBox key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    ></CategoriBox>)
                }
            </div>
        </Container>
    );
};

export default Categories;