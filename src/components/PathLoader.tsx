import { Textarea } from 'baseui/textarea'
import { ChangeEvent, useRef, useState } from 'react'
import { Button, KIND } from 'baseui/button'
import { fabric } from 'fabric'

interface Props {
  canvas: fabric.Canvas | undefined
}

function PathLoader({ canvas }: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const [value, setValue] = useState('')

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const url = URL.createObjectURL(e.target.files![0])
    loadSVGImage(url)
  }

  const loadSVGImage = (url: string) => {
    fabric.loadSVGFromURL(url, objects => {
      canvas.clear()
      let pathData = []
      objects.forEach(object => {
        // @ts-ignore
        pathData = pathData.concat(object.path)
      })
      load(pathData)
    })
  }
  const onButtonClick = () => {
    inputRef.current?.click()
  }

  const load = (value: string | any[]) => {
    if (value) {
      const path = new fabric.Path(value)
      canvas.clear()
      path.scaleToWidth(240)
      path.set('fill', '#CBCBCB')
      canvas.add(path)
      path.setControlsVisibility({ mtr: false, mb: false, mt: false, mr: false, ml: false })
      path.center()
    }
  }

  const clear = () => {
    canvas.clear()
    setValue('')
  }

  return (
    <div style={{ background: '#fff', padding: '3rem 0', borderTop: '1px solid rgba(0,0,0,0.2)' }}>
      <div style={{ maxWidth: '840px', margin: 'auto' }}>
        <Textarea
          placeholder="Enter path"
          overrides={{
            Input: {
              style: {
                height: '180px',
                fontFamily: 'Inconsolata',
              },
            },
          }}
          value={value}
          onChange={e => setValue(e.currentTarget.value)}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 180px 180px', gap: '1rem' }}>
          <input
            onChange={handleFileInput}
            type="file"
            id="file"
            ref={inputRef}
            style={{ display: 'none' }}
          />
          <Button kind={KIND.tertiary} onClick={clear}>
            Clear
          </Button>
          <Button kind={KIND.secondary} onClick={onButtonClick}>
            Import
          </Button>
          <Button kind={KIND.primary} onClick={() => load(value)}>
            Load
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PathLoader
