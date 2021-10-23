import { styled, ThemeProvider, DarkTheme } from 'baseui'
import { Button, KIND } from 'baseui/button'
import Logo from '@components/icons/Logo'
import { createShape } from '@/api'
import { useSnackbar } from 'baseui/snackbar'
import { Check } from 'baseui/icon'

const Container = styled('div', props => ({
  height: '70px',
  background: props.$theme.colors.background,
  display: 'flex',
  padding: '0 2rem',
  justifyContent: 'space-between',
  alignItems: 'center',
}))

const LogoContainer = styled('div', props => ({
  color: props.$theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
}))

interface Props {
  canvas: fabric.Canvas | undefined
}

function Navbar({ canvas }: Props) {
  const { enqueue } = useSnackbar()

  const save = async () => {
    const path = canvas.getObjects()[0]
    const pathJSON = path.toJSON()
    const baseOptions = getBaseOptions(pathJSON)
    const object = {
      ...baseOptions,
      type: 'StaticPath',
      metadata: {
        value: pathJSON.path,
        fill: path.fill,
      },
    }
    const template = {
      frame: {
        width: object.width * object.scaleX,
        height: object.height * object.scaleY,
      },
      objects: [object],
      background: { type: 'color', value: '#ffffff' },
    }
    console.log({ template })
    await createShape(template)
    enqueue({
      message: 'Saved object',
      startEnhancer: ({ size }) => <Check size={size} />,
    })
  }

  const getBaseOptions = item => {
    const { width, height, scaleX, scaleY, originX, originY, type } = item
    const baseOptions = {
      left: 0,
      top: 0,
      width: width,
      height: height,
      originX,
      originY,
      scaleX,
      scaleY,
      type,
    }
    return baseOptions
  }

  return (
    <ThemeProvider theme={DarkTheme}>
      <Container>
        <LogoContainer>
          <Logo size={40} />
        </LogoContainer>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={save} kind={KIND.primary}>
            Save path
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default Navbar
