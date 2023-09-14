import PropTypes from 'prop-types'; // ES6
//proptypes.
const Blog = ({blog}) => {
    console.log(blog);
    const {title,cover,id,reading_time,author,posted_date,img,hashtags} =blog;
    return (
        <div className='mt-10'>
            <img style={{height: '300px'}} src={cover} alt={id} />
            <div className='flex justify-between mt-2'>
                <div className='flex'>
                    <img style={{width:'50px'}} src={img} alt={id} />
                    <div className='ml-2'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>

                <div>
                    <span>{reading_time} min read</span>

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