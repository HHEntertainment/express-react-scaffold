import * as React from 'react';
import { func, arrayOf } from 'prop-types';
import Pagination from 'react-js-pagination';
import { BoardWrapper, PostLegendWrapper, PostsWrapper, PaginationWrapper } from './styled';

export class Board extends React.Component {
  static propTypes = {
    fetchPostList: func.isRequired,
    posts: arrayOf.isRequired,
  }

  state = {
    activePage: 3,
  };

  componentDidMount() {
    const { fetchPostList } = this.props;

    fetchPostList();
  }

  render() {
    const { posts } = this.props;
    const { activePage } = this.state;
    const postComponents = posts.map(post => (
      <li className="post" key={Math.random()}>
        <span className="type">{post.type}</span>
        <span className="price">{post.price}</span>
        <span className="title">{post.title}</span>
        <span className="expirationDate">{post.expirationDate}</span>
      </li>
    ));

    return (
      <BoardWrapper>
        <PostsWrapper>
          <PostLegendWrapper>
            <span className="type">예매타입</span>
            <span className="price">가격</span>
            <span className="title">제목</span>
            <span className="expirationDate">티켓 유효기간</span>
          </PostLegendWrapper>
          <ul>
            {postComponents}
          </ul>
        </PostsWrapper>
        <PaginationWrapper>
          <Pagination
            activePage={activePage}
            itemCountePerPage={10}
            totalItmesCount={132}
            pageRangeDisplayed={5}
            onChange={() => {}}
          />
        </PaginationWrapper>
      </BoardWrapper>
    );
  }
}
