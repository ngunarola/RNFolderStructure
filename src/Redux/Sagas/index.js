import authSaga from './AuthSaga'
import commonSaga from './CommonSaga';

//Main Root Saga
const rootSaga = function* rootSaga() {
  yield* authSaga()
  yield* commonSaga()
};
export default rootSaga;
