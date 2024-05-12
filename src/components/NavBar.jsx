

const NavBar = ({setCategory}) => {
  return (
<nav className="navbar navbar-expand-lg  " >
  <div className="container-fluid">
    <a className="navbar-brand"><span className="badge bg-light text-dark fs-4">웹 뉴스</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("general")}>General</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("sports")}>Sports</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar

