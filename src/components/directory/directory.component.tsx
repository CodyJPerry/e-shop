import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

interface DirectoryProps {
    categories: { id: number, title: string, imageUrl: string}[]
}

const Directory: React.FC<DirectoryProps> = ({categories}) => {
    return (
        <div className='directory-container'>
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
            ))}
      </div>
    );
}

export default Directory;