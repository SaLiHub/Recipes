import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/reducers/action-creators";
import { AppDispatch, RootState } from "../store/store";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(allActionCreators, dispatch)
}

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
