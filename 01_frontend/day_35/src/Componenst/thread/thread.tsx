import './thread.scss'
import Menu from "./menu/menu"
import Posts from "./posts/posts"

const Thread = () => {
    return(
        <>
        <div className="thread-container">
            <div className="post-section">
                <Posts/>
            </div>
            <div className="menu-section">
              <Menu/>
            </div>
        </div>
        </>
    )
}

export default Thread;