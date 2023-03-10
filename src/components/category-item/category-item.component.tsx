import './category-item.styles.scss';

interface CategoryItemProps {
    category: {
        id: number,
        title: string,
        imageUrl: string;
    }
}

const CategoryItem: React.FC<CategoryItemProps> = ({category}) => {
    const { imageUrl, title } = category;
    console.log(category);
    return (
        <div className='category-container'>
            <div className='background-image' 
            style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className='category-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
      </div>
    );
}

export default CategoryItem;