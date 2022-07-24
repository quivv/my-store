import React, { useEffect, useState } from 'react'

export function GotoTop(): React.ReactElement {
  const [showTop, setShowTop] = useState<Boolean>(false)

  useEffect(() => {
    const handleScroll= () => {
      setShowTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          {showTop && (
            <button className="btn btn-secondary position-fixed fixed-bottom" onClick={() => window.scrollTo({top:0})}>
              Go To Top
            </button>

          )}

        </div>
      </div>
    </>
  )
}