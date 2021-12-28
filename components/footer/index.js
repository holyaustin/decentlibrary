function Footer() {

    return (
      <div className="main">

      <center>
        <footer>
          <div className="space-x-2 align-middle bg-gradient-to-t from-blue-500 via-blue-700 to-blue-900">
            <div className="inline-block align-middle text-xl">Powered by</div>
            <div className="inline-block align-middle">
              {' '}
              <img
                className="h-10 w-18"
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/IPFS_logo.png"
                alt="ipfs logo"
              />
            </div>
            {' '}
            +
            <div className="inline-block align-middle pt-1">
              {' '}
              <img
                className="h-5 w-100"
                src="https://assets.website-files.com/60f51fac359e025bed0dd19b/6173ff84da7f630e1961bc98_new%20logo-p-500.png"
                alt="NFTPort logo"
                height="20px"
              />
            </div>
            {' '}
            +
            <div className="inline-block align-middle pt-1">
              {' '}
              <img
                className="h-20 w-100"
                src="https://miro.medium.com/fit/c/262/262/1*qAtPahq3Pq87eAX04ZQhXA.png"
                alt="Metis logo"
              />
            </div>
          </div>
        </footer>
      </center>
      </div>
    )
  }
  
  export default Footer