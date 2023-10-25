import React from 'react'

const Navbar = () => {
  return (
    <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
  <nav className="my-2 ms-auto mr-3">
    <a className="p-2 text-dark" href="#">Features</a>
    <a className="p-2 text-dark" href="#">Enterprise</a>
    <a className="p-2 text-dark" href="#">Support</a>
    <a className="p-2 text-dark" href="#">Pricing</a>
  </nav>
  <a className="btn btn-outline-primary" href="#">Sign up</a>
</div>
  )
}

export default Navbar