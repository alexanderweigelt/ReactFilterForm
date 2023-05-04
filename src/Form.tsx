import { type FC } from 'react'
import { useFormik } from 'formik'
import Button from './Button'
import Checkbox from './Checkbox'

const Form: FC = () => {
  const params = new URLSearchParams(document.location.search)
  const initialValues = {
    filter: { test: params.getAll('filter[test]') }
  }

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: submitForm
  })

  function isChecked (value: string): boolean {
    return Object.values(values.filter).some((field) => { return field.includes(value) })
  }

  function submitForm (values: any): void {
    console.log(values)
  }

  return <form onSubmit={handleSubmit}>
    <Checkbox key={'one'} id={'one'} name={'filter[test]'} value={'one'} onChange={handleChange} label={'one'}
              defaultChecked={isChecked('one')}/>
    <Checkbox key={'two'} id={'two'} name={'filter[test]'} value={'two'} onChange={handleChange} label={'two'}
              defaultChecked={isChecked('two')}/>
    <Checkbox key={'three'} id={'three'} name={'filter[test]'} value={'three'} onChange={handleChange} label={'three'}
              defaultChecked={isChecked('three')}/>
    <Checkbox key={'four'} id={'four'} name={'filter[test]'} value={'four'} onChange={handleChange} label={'four'}
              defaultChecked={isChecked('four')}/>
    <Checkbox key={'five'} id={'five'} name={'filter[test]'} value={'five'} onChange={handleChange} label={'five'}
              defaultChecked={isChecked('five')}/>
    <Button type={'submit'} variant={'primary'}>Submit</Button>
  </form>
}

export default Form
