import AuthReducer from './AuthReducer';
import CommonReducer from './CommonReducer';

let rootReducer = {
    Auth: AuthReducer,
    Common: CommonReducer
};
export default rootReducer