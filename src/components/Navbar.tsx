import * as React from "react";
import { styled, ThemeProvider, DarkTheme } from 'baseui'
import { Button, KIND } from 'baseui/button'
import {Select, Value} from 'baseui/select';
import Logo from '@components/icons/Logo'
import { createShape, getSignedURLForUpload, getCategories } from '@/api'
import { useSnackbar } from 'baseui/snackbar'
import { Check } from 'baseui/icon'
import {randomFilename} from '@/utils/unique'
import axios from 'axios'
import _ from 'lodash';

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

interface Category {
  id: string
  title: string
}

function Navbar({ canvas }: Props) {
  const { enqueue } = useSnackbar()
  const [value, setValue] = React.useState<Value>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [categories, setCategories] = React.useState<Category[]>([]);

  React.useEffect(() => {
    getCategories()
        .then((data: any) => {
          setCategories(data)
        })
        .catch(console.log)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (value: React.SetStateAction<Value>) => {
    setValue(value)
    setError(false)
  }

  const save = async () => {
    if (!_.isEmpty(value)) {
      setError(false)
      const path = canvas.getObjects()[0]
      if (path !== undefined) {        
        const pathJSON = path.toJSON()
        
        const params: Record<string, string> = {}
        const pathURI = path.toDataURL(params);
        const blob = await (await fetch(pathURI)).blob(); 
        //const updatedFileName = 'element/'+randomFilename('png');
    
        const folderName = 'element/';
        const fileName = randomFilename('png');
        const updatedFileName = folderName+fileName;
    
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
          folder: folderName,
          filename: fileName,
          category: value[0].id,
        }
    
        const type = 'image/png';
        const response = await getSignedURLForUpload({ name: updatedFileName, type })
        await axios.put(response.url, blob, {
          headers: { 'Content-Type': type },
        })
    
        await createShape(template)
        enqueue({
          message: 'Saved object',
          startEnhancer: ({ size }) => <Check size={size} />,
        })
      }
    } else {
      setError(true)
    }
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
        <div style={{ display: 'flex', gap: '1rem', minWidth: '300px' }}>
          <Select
            error={error}
            options={categories}
            labelKey="title"
            valueKey="id"
            onChange={({value}) => onChange(value)}
            value={value}
          />
          <Button onClick={save} kind={KIND.primary} $style={{whiteSpace: 'nowrap'}}>
            Save path
          </Button>
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default Navbar
