import React from 'react';
import {
  CatalogWrapper,
  CatalogHeader,
  CatalogTitle,
  ViewAllButton,
  CatalogGrid,
  CatalogItem,
  ItemTitle,
  ItemImage,
  ItemFooter
} from './Catalog.styles';

import img1 from '../../assets/images/img1.png';
import img2 from '../../assets/images/img2.png';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';
import img5 from '../../assets/images/img5.png';
import img6 from '../../assets/images/img6.png';

const catalogData = [
  {
    title: "Люстры",
    price: "От 540₽",
    image: img6
  },
  {
    title: "Светильники",
    price: "От 540₽",
    image: img4
  },
  {
    title: "Бра",
    price: "От 540₽",
    image: img2
  },
  {
    title: "Торшеры",
    price: "От 540₽",
    image: img5
  },
  {
    title: "Настольные лампы",
    price: "От 540₽",
    image: img3
  },
  {
    title: "Споты",
    price: "От 540₽",
    image: img1
  }
];

const Catalog = () => {
  return (
    <CatalogWrapper>
        <CatalogHeader>
          <CatalogTitle>Каталог</CatalogTitle>
          <ViewAllButton>Весь каталог →</ViewAllButton>
        </CatalogHeader>

        <CatalogGrid>
          {catalogData.map((item, index) => (
            <CatalogItem key={index}>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemImage src={item.image} alt={item.title} />
              <ItemFooter>
                <span>{item.price}</span>
                <span>→</span>
              </ItemFooter>
            </CatalogItem>
          ))}
        </CatalogGrid>
    </CatalogWrapper>
  );
};

export default Catalog;
