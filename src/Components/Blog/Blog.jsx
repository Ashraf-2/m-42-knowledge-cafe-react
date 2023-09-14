import PropTypes from 'prop-types'; // ES6
// import { BsFillBookmarkFill } from 'react-icons/fa';             //it does not work
//proptypes.
const Blog = ({blog,handleAddToBookmark}) => {
    console.log(blog);
    const {title,cover,id,reading_time,author,posted_date,img,hashtags} =blog;
    return (
        <div className='mb-10'>
            <img className='w-full' src={cover} alt={id} />
            <div className='flex justify-between mt-2'>
                <div className='flex'>
                    <img style={{width:'50px'}} src={img} alt={id} />
                    <div className='ml-2'>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read </span>
                    {/* <button></button> */}
                    <button className='text-xl' onClick={handleAddToBookmark}> <i class="fa-solid fa-bookmark" style={{color: "#ff4747"}}></i></button>

                </div>
            </div>


            <h2 className="text-4xl mt-1">{title}</h2>
            <p>
                {
                    hashtags.map( (hash, idx) => <span key={idx}><a href="">#{hash }</a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;