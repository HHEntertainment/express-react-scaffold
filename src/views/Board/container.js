import { connect } from 'react-redux';
import { Board } from './index';

import { fetchPostList } from '../../store/Board/actions';
import { getIsFetchPostListRequested, getPosts } from '../../store/Board/selectors';

export default connect(
  state => ({
    /* selector */
    posts: getPosts(state),
    isFetchPostListRequested: getIsFetchPostListRequested(state),
  }),
  {
    /* actions */
    fetchPostList,
  }
)(Board);
