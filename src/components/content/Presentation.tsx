import { Heading, Box, Text, Image, Flex, HStack, Link } from '@chakra-ui/react'

const Presentation = () => {

    const detailColor = 'purple.500';

    return (
        <Flex
            alignItems={'center'}
            justifyContent={'space-around'}
            px={{ base: 8, md: 20 }}
            py={{ base: 8, md: 40 }}
            direction={{ base: 'column', lg: 'row' }}
            h={{ base: 'auto', md: '100%' }}
        >
            <Box display={{ lg: 'none' }}>
                <Image src='https://i.ibb.co/8XPdjfY/profile-photo-50.jpg' alt='Nahuel Profile Pic' boxSize={200} mb={10} borderRadius={10} borderTopLeftRadius={40} borderBottomRightRadius={40} />
            </Box>

            <Box>
                <Box display='flex' flexDirection='column' alignItems={{ base: 'center', lg: 'start' }}>
                    <Heading as="h1" size="2xl" isTruncated>
                        Nahuel Caballero
                    </Heading>
                    <Heading as="h2" size="lg" isTruncated color={detailColor}>
                        Fullstack Software Developer
                    </Heading>

                    <Text fontSize='2xl' mt={5} textAlign={{ base: 'center', sm: 'left' }}>Welcome to my Portfolio! I'm Nahuel Caballero, a Sofware Developer based in Uruguay.</Text>
                </Box>
                <Box display='flex' flexDirection='column' alignItems={{ base: 'center', sm: 'start' }}>
                    <HStack direction={'row'} spacing={3} mt={3} >
                        <Link href='https://github.com/nhl-dev' isExternal>
                            <Image src='https://i.ibb.co/4M89htL/pngegg-1.png' alt='GitHub' boxSize={12} fit={'contain'} p={1} />
                        </Link>
                        <Link href='https://www.linkedin.com/in/nahuel-caballero/' isExternal>
                            <Image src='https://i.ibb.co/wNZMjDZ/CITYPNG-COM-Linked-In-Square-White-Icon-Transparent-PNG-500x500.png' alt='LinkedIn' boxSize={12} fit={'contain'} />
                        </Link>
                    </HStack>
                </Box>

                <Flex direction={{ base: 'column', sm: 'row' }} alignItems={'center'} mt={10}>
                    <Text fontSize='2xl' fontWeight={'bold'} mr={{ base: 0, sm: 8 }}>Main Stack:</Text>
                    <HStack spacing={{ base: 2, sm: 4 }}>
                        <Image src='https://i.ibb.co/Jjmf8NC/java.png' alt='Java' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/k0wW8TV/Typescript-logo-2020-svg.png' alt='TypeScript' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/Dzh4QHP/React-icon-svg.png' alt='React' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/hyC4fpv/redux.png' alt='Redux' boxSize={10} fit={'contain'} />
                        <Image src='https://i.ibb.co/1nfw6Gb/Tailwind.png' alt='Tailwind' boxSize={10} fit={'contain'} />
                    </HStack>
                </Flex>
            </Box>

            <Box display={{ base: 'none', lg: 'flex' }} boxSize={300}>
                <Image src='https://i.ibb.co/8XPdjfY/profile-photo-50.jpg' alt='Dan Abramov' borderRadius={10} borderTopLeftRadius={40} borderBottomRightRadius={40} />
            </Box>

        </Flex>
    )
}

export default Presentation