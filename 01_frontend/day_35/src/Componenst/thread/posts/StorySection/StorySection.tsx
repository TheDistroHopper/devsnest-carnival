import { useSelector, useDispatch} from 'react-redux';
import { useEffect, useRef } from 'react';
import './StorySection.scss'
import { rootReducerType } from '../../../../reducers';
import { data, fetchProfiles } from '../../../../actions';

const StorySection = () => {
 const dispatch = useDispatch();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() =>{ dispatch(fetchProfiles());}, [])
 const data : data[] = useSelector( (state : rootReducerType) => state.data)

 const story = useRef<any>(null);
 const scrollRight = () => {
     story.current.scrollBy({
         top: 0,
         left:450, 
         behavior: "smooth",
     })
 }
 const scrollLeft = () => {
    story.current.scrollBy({
        top: 0,
        left:-450, 
        behavior: "smooth",
    })
}



    return(
        <>
        <div className="story">
        <i className="fas fa-chevron-circle-left" onClick={() => scrollLeft()}></i>
        <i className="fas fa-chevron-circle-right" onClick={() => scrollRight()}></i>
        <div className="story-sction" ref={story}>
            {
                [...Array(10)].map(() => 

                { 
                    return(
                    data.map((user : data, index : number) => {
                        return(
                            <div key={index} className="story-card">
                                <img src={user.profilePicture} alt="" />
                                 <p className="username"> {user.username } </p>
                            </div>
                        )
                    }))
                }
                )}

        </div>
        </div>
        </>
    )
}

export default StorySection;