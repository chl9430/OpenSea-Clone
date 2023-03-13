import styled from "styled-components";

import Header from "../../Header";
import SlidePart from "../part/SliderPart"
import ChartPart from "../part/ChartPart"
import ExplorePart from "../part/ExplorePart"

const MainStyle = styled.div`
padding: 0px 64px;

& * {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
}

> div {
  margin-bottom: 200px;
}
`;

const Main = () => {
  const dummyChart = [{
    img: "https://i.seadn.io/gcs/files/465c9c3398e7f2f3f4f1e119b5fc876b.png?w=500&auto=format",
    title: "Hedz by Matt Furie",
    floorPrice: `${2} ETH`,
    volume: `${617} ETH`,
    verified: true,
  }, {
    img: "https://i.seadn.io/gae/L3CzIr4X6CzpzqGsYZWRXnbDcCawMuXwAUtJPpyIXTAwwzMrl_sI13qB2jCmeXF4nG0k08d107rtuk3QVAdvxOpaLXFY6p2Jl2WK3Hw?w=500&auto=format",
    title: "WakuLand",
    floorPrice: `${2.99} SOL`,
    volume: `${13}K SOL`,
    verified: false,
  },
  {
    img: "https://i.seadn.io/gcs/files/9762ccecaf250c709f0dd79d3f3eaec7.gif?w=500&auto=format",
    title: "Peking Monsters Official",
    floorPrice: `${0.13} ETH`,
    volume: `${148} ETH`,
    verified: false,
  },
  {
    img: "https://i.seadn.io/gcs/files/ade1d4c88170aa390fa994df1e6eff99.gif?w=500&auto=format",
    title: "Act of Emotion by Kelly Milligan",
    floorPrice: `${0.47} ETH`,
    volume: `${108} ETH`,
    verified: true,
  }]

  const dummyItems = [{
    mainImg: "https://i.seadn.io/gcs/files/515e8f8c8f745bf81c5c5106403e67ee.gif?auto=format&h=400",
    smallImg: "https://i.seadn.io/gcs/files/6746c00af2b5e445469b0ab47fc27521.jpg?auto=format&w=128&h=128",
    title: "Anomura",
    verified: true,
  }, {
    mainImg: "https://i.seadn.io/gcs/files/689b0a1f24387cf234ef679ecabda2cc.png?auto=format&h=400",
    smallImg: "https://i.seadn.io/gcs/files/689b0a1f24387cf234ef679ecabda2cc.png?auto=format&w=128&h=128",
    title: "golden egg club by jeremy fall",
    verified: false,
  }]

  const categoryArr = [{
    mainImg: "https://opensea.io/static/images/categories/art.png",
    title: "Art",
  }, {
    mainImg: "https://opensea.io/static/images/categories/music.png",
    title: "Music",
  }]

  const dummySlides = [{
    img: "https://i.seadn.io/gae/k7HVpzwTDlK5hR5E277emDa_TnD7kJeiDMA5G8Maksiq0f5lVT58NKspLC76yPWt6YAHLANeRfh9GEPE12ajS4RITg6j0ik76XUn6Ik?auto=format&w=384",
    title: "SNKRZ#1185",
    owner: "THE SNKRZ NFT",
  }, {
    img: "https://i.seadn.io/gae/--JHCckhiRlo4B2PjhGMugOUgBb7cXRdPawACH6jlMbCUAvFbOcLez_-VY14tdvIejh473VxLAT65R3e62UnKB0G8hq44VFw-VElnQ?auto=format&w=384",
    title: "SNKRZ#494",
    owner: "THE SNKRZ NFT",
  }, {
    img: "https://i.seadn.io/gae/2QnR45f1EkvRM2uuFkAeNHuJC3PPA0Skv9oE9xpk9W1hpOqzPDgImXQihfjXwJFjZ6XF5bt9l4fLRBzP0LWVmkKVOCoJkycabcy4Ezs?auto=format&w=384",
    title: "SNKRZ#3320",
    owner: "THE SNKRZ NFT",
  }, {
    img: "https://i.seadn.io/gae/cJoP_x9kAs0jh_iiA6Ad3O6m6fwPyB6pbIzWlDFwf8bwlH304JHB611MZ0EdB0mncGy5nP2IpznCW3MiPkzanH0smwZT1KfUUjXZ9g?auto=format&w=384",
    title: "SNKRZ#6463",
    owner: "THE SNKRZ NFT",
  }, {
    img: "https://i.seadn.io/gae/CDq6z2Jq3FyKFr2eo_sZ_rKfAfZz5bCInCoIZdC6QUzuv4TLxREUu2cy_byfMD-WioNPFwnZ4omHOIhKSjJClOfy9E_2uQBaKdHXsBk?auto=format&w=384",
    title: "SNKRZ#8576",
    owner: "THE SNKRZ NFT",
  }]

  return (
    <MainStyle>
      <Header />
      <SlidePart dots={false} infinitySlide={true} slideSpeed={250} showSlideCount={4} draggable={false} data={dummySlides} />
      <ChartPart data={dummyChart} row={2} />
      <ExplorePart header="New and notable" dataType="explore" data={dummyItems} />
      <ExplorePart header="Browse by category" dataType="category" data={categoryArr} />
    </MainStyle>
  );
};

export default Main;