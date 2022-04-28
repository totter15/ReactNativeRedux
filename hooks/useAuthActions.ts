import { useDispatch } from "react-redux";
import {authorize,logout,User} from '../slices/auth'
import { bindActionCreators } from "redux";
import { useMemo } from "react";

export default function useAuthActions(){
    const dispatch = useDispatch()
    return useMemo(()=> bindActionCreators({authorize,logout},dispatch),[dispatch])
    //bindActionCreators 사용시 dispatch로 함수가 자동으로 감싸짐
    
}