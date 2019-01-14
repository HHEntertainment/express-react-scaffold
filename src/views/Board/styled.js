import styled from 'styled-components';

export const BoardWrapper = styled.div`
  height: 700px;
  width: 1024px;
`;

export const PostLegendWrapper = styled.div`
  padding: 0 20px;
`;

export const PostsWrapper = styled.div`
  span {
    display: inline-block;
    text-align: center;
    margin: 0 10px;
  }

  .post {
    margin: 10px 20px;
    border-bottom: 1px solid;
  }

  .type {
    width: 75px;
  }

  .price {
    width: 75px;
  }

  .title {
    width: 300px;
  }

  .expirationDate {
    width: 100px;
  }
`;

export const PaginationWrapper = styled.div`
  .pagination {
    width: 125px;
    height: 35px;
  }
`;
