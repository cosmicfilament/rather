import { getInitialData } from '../../utils/api';
import { receiveUsers } from '../users/usersActions';
import { receiveQuestions } from '../questions/questionsActions';
import { setAuthUser, setAuthUserUI } from '../auth/authActions';

export function handleInitialData() {
    return (dispatch) => {
        //dispatch(showLoading());
        dispatch(setAuthUser());
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                //dispatch(hideLoading());
            });
    };
};
