import PostCard from './postcard'
import './posts.scss'
import StorySection from './StorySection/StorySection'

const Posts = () => {
    return(
        <>
        <div className="story-section">
            <StorySection/>
            {
                [...Array(10)].map((_, index) => {
                    return(<>
                       <PostCard/>
                    </>)
                })
            }
        </div>
        <div className="post"></div>
        </>
    )
}

export default Posts;