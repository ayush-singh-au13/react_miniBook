// const Book = ({ image, title, author, price }) //another method of destructuring
const Book = (props) => {
  console.log(props);
  const { image, title, author } = props; //destructuring props
  return (
    <article className="book">
      <img src={image} alt="avatar.jpg" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" className="btn" onClick={() => alert('Your system has been Hacked')}>Don't Click</button>
    </article>
  );
};

export default Book;