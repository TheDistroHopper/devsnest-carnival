import { useState } from 'react'

const PostCard = () => {
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    return(<>
        <div className="container">
        <div className="card">
            <div className="top">
            <div className="top-left">
                <img className="pfp" src="https://picsum.photos/700" alt=""/>
                <span className="username">Instagram user</span>
            </div>
            <div className="top-right">
                <i className="fas fa-ellipsis-v"></i>
            </div>
            </div>
        <div className="img">
            <img src="https://picsum.photos/700" alt=""/>
        </div>
        <div className="bottom">
            <div className="bottom-menu">
            <div className="bottom-left">
            {
                isLiked ? <i className="fas fa-heart" onClick={() => setIsLiked(false)}></i> : <i className="fal fa-heart"onClick={() => setIsLiked(true)}></i>
            }
                
                <i className="fal fa-comment"></i>
                <i className="fal fa-paper-plane"></i>
            </div>
            <div className="bottom-right">
              {
                  isBookmarked ? <i className="fas fa-bookmark" onClick={() => setIsBookmarked(false)}></i> : <i className="fal fa-bookmark" onClick={() => setIsBookmarked(true)}></i>
              } 
            </div>
            </div>
            <p className="likes"> <strong>you</strong> and 256 other liked </p>
        </div>
        </div>
        </div>
        </>
    )
}

export default PostCard;