import { Heading, Box, Text, Image, Flex, HStack, useColorModeValue } from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

const Presentation = () => {
    return (
        <Flex
            alignItems={'center'}
            justifyContent={'space-around'}
            p={{ base: 8, md: 20 }}
            direction={{ base: 'column', lg: 'row' }}
        >
            <Box display={{ lg: 'none' }}>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' boxSize={200} mb={10} />
            </Box>

            <Box>
                <Box display='flex' flexDirection='column' alignItems={{ base: 'center', lg: 'start' }}>
                    <Heading as="h1" size="2xl" isTruncated>
                        Nahuel Caballero
                    </Heading>
                    <Heading as="h2" size="lg" isTruncated color={useColorModeValue('purple.500', 'purple.200')}>
                        Frontend Developer
                    </Heading>

                    <Text fontSize='2xl' mt={5} textAlign={{ base: 'center', sm: 'left' }}>Hello! I'm Nahuel Caballero, a Frontend Developer based in Uruguay.</Text>
                </Box>

                <Flex direction={{ base: 'column', sm: 'row' }} alignItems={'center'} mt={10}>
                    <Text fontSize='2xl' fontWeight={'bold'} mr={{ base: 0, sm: 12 }}>Tech Stack</Text>
                    <HStack spacing={{ base: 2, sm: 4 }}>
                        <Image src='https://i.ibb.co/dDTmGNT/HTML5-logo-and-wordmark-svg.png' alt='HTML5' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/d606bWv/CSS3-logo-and-wordmark-svg.png' alt='CSS3' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/k0wW8TV/Typescript-logo-2020-svg.png' alt='TypeScript' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/Dzh4QHP/React-icon-svg.png' alt='React' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/QpZvjHV/54212428.png' alt='Chakra UI' boxSize={10} fit={'contain'} borderRadius={20} />
                    </HStack>
                </Flex>
            </Box>

            <Box display={{ base: 'none', lg: 'flex' }}>
                <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Box>

            <ChevronDownIcon
                color={'white'}
                position={'absolute'}
                bottom={10}
                boxSize={50}
                display={{ base: 'none', md: 'block' }} />

        </Flex>
    )
}

export default Presentation