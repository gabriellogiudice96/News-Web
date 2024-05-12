
import image from "../assets/news.jpg"   

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="conteinerCard  ">
      <div className="card text-light mb-3 border-primary my-3 mx-3 px-2 py-2">
        <img src={src ? src : image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem;


