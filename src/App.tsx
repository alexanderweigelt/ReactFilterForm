import {type FC} from 'react'
import logo from './assets/react.svg'
import {Box, Flex, Heading, Text, Image} from '@chakra-ui/react'
import FilterForm from './FilterForm.tsx'

const App: FC = () => {
    return (
        <Flex justify={'space-between'} height={'100vh'} direction={'column'} mx={['auto']}
              maxW={{base: '100%', lg: '1024px'}} px={{base: '1', lg: '0'}}>
            <Flex as={'header'} py={'3'} mb={{base: '0', lg: '1'}} borderBottom={{base: 'none', lg: '1px'}}
                  borderBottomColor={'gray.400'} justifyItems={'center'} justifyContent={'space-between'}>
                <Image src={logo} maxW={'120px'} alt="logo"/>
                <Heading color={'gray.700'}>
                    React Filter Form
                </Heading>
            </Flex>
            <Box flex={'1 1 0%'} as={'main'}>
                <FilterForm/>
            </Box>
            <Box as={'footer'} textAlign={'center'} pb={'2'}>
                <Text fontSize={'sm'}>&copy; 2023 by Alexander Weigelt</Text>
            </Box>
        </Flex>
    )
}

export default App
