import React from 'react'

export default props => {
  return (
    <div className="flex-none ph2 pv5 bt tc mid-gray b--light-gray">
      Built by{' '}
      <a href="https://mythical.fish" target="_blank" rel="noopener noreferrer">
        Jake Broughton
      </a>
      <br />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/MythicalFish/shpred-front"
        className="mt2 dib"
      >
        View on Github
        <i className="fab fa-github ml1" />
      </a>
    </div>
  )
}
