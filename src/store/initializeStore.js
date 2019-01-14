import { flow } from 'lodash/fp';
import boardInitializer from './Board/initializer';
import signInitializer from './Sign/initializer';

export default flow(
  boardInitializer,
  signInitializer,
);
