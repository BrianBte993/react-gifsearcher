
export const GifItem = ({ title, id, url }) => {

  return (
    <div className="card">GifItem
      <img src={url} alt={title} />
      <p> {title} </p>
    </div>
  )
}
