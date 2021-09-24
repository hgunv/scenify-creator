import { fabric } from 'fabric'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import Navbar from './components/Navbar'
import PathLoader from './components/PathLoader'
function App() {
  const [canvas, setCanvas] = useState<fabric.Canvas>()
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current as unknown as HTMLDivElement
    const { clientHeight, clientWidth } = container

    const canvas = new fabric.Canvas('canvas', {
      backgroundColor: '#f6f7f9',
      height: clientHeight,
      width: clientWidth,
      preserveObjectStacking: true,
    })

    fabric.Object.prototype.transparentCorners = false
    fabric.Object.prototype.cornerColor = '#05c46b'
    fabric.Object.prototype.cornerStyle = 'rect'
    fabric.Object.prototype.borderColor = '#0be881'
    fabric.Object.prototype.cornerSize = 12
    fabric.Object.prototype.borderScaleFactor = 2
    fabric.Object.prototype.borderOpacityWhenMoving = 0

    setCanvas(canvas)
    const resizeObserver = new ResizeObserver(entries => {
      const { width = clientWidth, height = clientHeight } = (entries[0] && entries[0].contentRect) || {}
      canvas.setWidth(width).setHeight(height).renderAll()
    })
    resizeObserver.observe(container)
    return () => {
      if (container) {
        resizeObserver.unobserve(container)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: '#F9F9F9',
      }}
    >
      <Navbar canvas={canvas} />
      <div style={{ display: 'flex', flex: 1 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div ref={containerRef} style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
            <div
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
              }}
            >
              <canvas id="canvas"></canvas>
            </div>
          </div>
        </div>
      </div>
      <PathLoader canvas={canvas} />
    </div>
  )
}

export default App
