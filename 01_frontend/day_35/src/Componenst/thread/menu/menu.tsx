import './menu.scss'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProfiles } from '../../../actions';
import { rootReducerType } from '../../../reducers';
import { data } from '../../../actions';

const Menu = () => {
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() : any =>{ dispatch(fetchProfiles());}, [])
    const data : any = useSelector<any>( (state : rootReducerType) => state.data)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return(
        <>
        <div className="menu">
            <div className="menu-top">
                <img className="user-img" src="https://picsum.photos/100" alt="" />
                <div className="user-name">
                <span><strong>Instagram user</strong></span>
                <span>Instagramer</span>
                </div>
            </div>
            <div className="menu-mid">
                <p> Suggestions for you</p>
            </div>
            <div className="menu-bottom">
                {
                    data.map((user : data, index: number) => {
                        return(
                        
                            <div className="sug-card" key={index}>

                        <div className="sug-user" key={index}>
                        <img className="sug-img" src={user.profilePicture} alt="" />
                        <span className="sug-name"> {user.username} </span>
                        </div>
                        <span className="follow">Follow</span>
                        </div>
                     ) })
                }
            </div>
        </div>
        </>
    )
}

export default Menu;