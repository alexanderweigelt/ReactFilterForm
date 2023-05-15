import {type FC} from 'react'
import {useFormik} from 'formik'
import {Box, Button, Checkbox, Stack, Text} from '@chakra-ui/react'

const FilterForm: FC = () => {
    const {
        pathname,
        search
    } = window.location
    const params = new URLSearchParams(search)
    const initialValues = {
        filter: {color: params.getAll('filter[color]'), size: params.getAll('filter[size]')}
    }

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues,
        onSubmit: submitForm
    })

    function isChecked(value: string): boolean {
        return Object.values(values.filter).some((field) => {
            return field.includes(value)
        })
    }

    function submitForm(values: typeof initialValues): void {
        params.delete('filter[color]')
        params.delete('filter[size]')
        Object.entries(values.filter).map(
             
            ([key, values]) => {
                return values.map((value) => {
                    params.append(`filter[${key}]`, value)
                })
            }
        )
        window.location.href = `${pathname}?${params.toString()}`
    }

    return <form onSubmit={handleSubmit}>
        <Box as={'fieldset'} border={'1px'} borderColor={'gray.400'} borderRadius={'md'} p={'2'} mb={'2'}>
            <Text as={'legend'}>
                Sizes
            </Text>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox colorScheme={'green'} key={'xs'} id={'xs'} name={'filter[size]'} value={'xs'} onChange={handleChange}
                          defaultChecked={isChecked('xs')}>XS</Checkbox>
                <Checkbox colorScheme={'green'} key={'s'} id={'s'} name={'filter[size]'} value={'s'} onChange={handleChange}
                          defaultChecked={isChecked('s')}>S</Checkbox>
                <Checkbox colorScheme={'green'} key={'m'} id={'m'} name={'filter[size]'} value={'m'} onChange={handleChange}
                          defaultChecked={isChecked('m')}>M</Checkbox>
                <Checkbox colorScheme={'green'} key={'l'} id={'l'} name={'filter[size]'} value={'l'} onChange={handleChange}
                          defaultChecked={isChecked('l')}>L</Checkbox>
                <Checkbox colorScheme={'green'} key={'xl'} id={'xl'} name={'filter[size]'} value={'xl'} onChange={handleChange}
                          defaultChecked={isChecked('xl')}>XL</Checkbox>
            </Stack>
        </Box>
        <Box as={'fieldset'} border={'1px'} borderColor={'gray.400'} borderRadius={'md'} p={'2'} mb={'2'}>
            <Text as={'legend'}>
                Colors
            </Text>
            <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Checkbox colorScheme={'green'} key={'yellow'} id={'yellow'} name={'filter[color]'} value={'yellow'} onChange={handleChange}
                          defaultChecked={isChecked('yellow')}>yellow</Checkbox>
                <Checkbox colorScheme={'green'} key={'green'} id={'green'} name={'filter[color]'} value={'green'} onChange={handleChange}
                          defaultChecked={isChecked('green')}>green</Checkbox>
                <Checkbox colorScheme={'green'} key={'blue'} id={'blue'} name={'filter[color]'} value={'blue'} onChange={handleChange}
                          defaultChecked={isChecked('blue')}>blue</Checkbox>
                <Checkbox colorScheme={'green'} key={'red'} id={'red'} name={'filter[color]'} value={'red'} onChange={handleChange}
                          defaultChecked={isChecked('red')}>red</Checkbox>
                <Checkbox colorScheme={'green'} key={'black'} id={'black'} name={'filter[color]'} value={'black'} onChange={handleChange}
                          defaultChecked={isChecked('black')}>black</Checkbox>
            </Stack>
        </Box>
        <Button type={'submit'} colorScheme={'green'} variant={'outline'}>Submit</Button>
    </form>
}

export default FilterForm
