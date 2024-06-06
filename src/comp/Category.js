import '../styles/Category.css';
import { projectList } from '../data/projectList.js';

function Category({ currentCategory, setCategory }) {
    const categoriesList = projectList.reduce((acc, project) => {
        project.category.forEach(category => {
            if (!acc.includes(category)) {
                acc.push(category);
            }
        });
        return acc;
    }, []);

    return (
        <div id='category'>
            <ul>
                {categoriesList.map((category) => (
                    <li key={category}>
                        <input 
                            id={category} 
                            type='checkbox' 
                            value={category} 
                            onChange={(e) => { 
                                const checkedCategory = e.target.value;
                                if (e.target.checked) {
                                    setCategory([...currentCategory, checkedCategory]);
                                } else {
                                    setCategory(currentCategory.filter(item => item !== checkedCategory));
                                }
                            }} 
                        />
                        <label htmlFor={category}>
                            {category}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Category;
