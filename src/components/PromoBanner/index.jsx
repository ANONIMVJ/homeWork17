import React from 'react';
import { 
  PromoWrapper, 
  TextContent, 
  Title, 
  Highlight, 
  LampImage 
} from './PromoBanner.styles';
import lampImage from '../../assets/images/img.png';

const PromoBanner = () => {
  return (
    <PromoWrapper>
      <TextContent>
        <Title>
          Скидка <Highlight>15%</Highlight><br />
          на все подвесные<br />
          светильники<br />
          <Highlight>до 5 февраля</Highlight>
        </Title>
      </TextContent>
      <LampImage src={lampImage} alt="Pendant Lamps" />
    </PromoWrapper>
  );
};

export default PromoBanner;
