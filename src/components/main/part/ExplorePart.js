import ExploreItem from "../item/ExploreItem"
import CategoryItem from "../item/CategoryItem"
import styled from "styled-components"

const ExploreStyle = styled.div`
.group_header {
    font-size: 32px;
    line-height: 40px;
    font-weight: 600;
    margin-bottom: 36px;
}

.group_content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
}
`

export default function ExplorePart(props) {
    const contentArr = [];

    if (props.dataType === "explore") {
        props.data.forEach((item, index) => contentArr.push(<ExploreItem key={index * Math.random()} mainImg={item.mainImg} smallImg={item.smallImg} title={item.title} verified={item.verified}/>))
    } else if (props.dataType === "category") {
        props.data.forEach((item, index) => contentArr.push(<CategoryItem key={index * Math.random()} mainImg={item.mainImg} title={item.title}/>))
    }

    return (
        <ExploreStyle className="explore_group">
            <div className="group_header">
                {props.header}
            </div>
            <div className="group_content">
                {contentArr}
            </div>
      </ExploreStyle>
    )
}