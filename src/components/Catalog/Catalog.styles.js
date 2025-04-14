import styled from 'styled-components';

export const CatalogWrapper = styled.section`
  padding: 80px 0;
  background-color: #fff;
  max-width: 1320px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
`;

export const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const CatalogTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #111;
  letter-spacing: -0.3px;
`;

export const ViewAllButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 999px;
  border: 1px solid #000;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f4f4f4;
  }

  &::after {
    content: '→';
    font-size: 16px;
  }
`;
export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const CatalogItem = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
`;

export const ItemImage = styled.img`
  height: 140px;
  object-fit: contain;
  margin-bottom: 16px;
`;

export const ItemTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #222;
  margin-bottom: 8px;
`;

export const ItemFooter = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &::after {
    content: '→';
    margin-left: 8px;
    color: #aaa;
  }
`;
