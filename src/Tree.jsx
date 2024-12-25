import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
const Tree = () => {
  const treeContainerRef = useRef(null);

  useEffect(() => {
    // 화면의 이너 높이 구하기
    const innerHeight = window.innerHeight;

    // 화면의 이너 높이를 트리 컨테이너의 높이로 설정
    treeContainerRef.current.style.height = `${innerHeight}px`;
  }, []);
  return (
    <S_TreeContainer ref={treeContainerRef}>
      <S_LeafPiece></S_LeafPiece>
      <S_LeafPiece style={{ transform: 'rotate(120deg) translate(-10px, 0px)', zIndex: 3 }}></S_LeafPiece>
      <S_LeafPiece style={{ transform: 'rotate(240deg) translate(50px, 0px)', zIndex: 2 }}></S_LeafPiece>
      <S_TreeBase style={{ transform: 'translate(0px, -80px)', zIndex: 1 }}></S_TreeBase>
    </S_TreeContainer>
  );
};

export default Tree;

const S_TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100vh;
  width: 100vw;
`;

const S_LeafPiece = styled.div`
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid green;
`;

const S_TreeBase = styled.div`
  width: 20px;
  height: 50px;
  background-color: brown;
`;
