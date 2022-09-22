import styled from "styled-components"

const CategoryCardStyle = styled.a`
width: 100%;
border-radius: 10px;
box-shadow: rgb(0 0 0 / 4%) 0px 4px 8px;
transition: box-shadow 0.25s ease-in-out 0s;
overflow: hidden;

&:hover {
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
}

.card_image {
    img {
        width: 100%;
    }
}

.card_title {
    height: 60px;
    padding: 10px;
    font-weight: 600;
    font-size: 20px;
    color: rgb(4, 17, 29);
    display: flex;
    justify-content: center;
    align-items: center;
}
`

const CategoryCard = () => {
    return (
        <CategoryCardStyle className="category_card">
            <div className="card_image">
                <img src="https://opensea.io/static/images/categories/art.png" alt="이미지"></img>
            </div>
            <div className="card_title">
                <span>Art</span>
            </div>
        </CategoryCardStyle>
    )
}

export default CategoryCard;