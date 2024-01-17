import { Box, Flex, chakra, Image } from '@chakra-ui/react';

const Skills = () => {
    return (
        <Flex direction={'column'} justifyContent={'space-around'} pt={10} pb={12} px={{ base: '0%', md: '10%', lg: '20%' }}>
            <Box>
                <chakra.h3 fontSize="3xl" fontWeight="bold" textAlign="center" color="#121212" >
                    Skills
                </chakra.h3>
                <Image src="https://i.ibb.co/MfpC2ZD/separador.png" alt="separator" mx="auto" my={10} />
            </Box>
            <Flex justifyContent={'center'} wrap={'wrap'}>
                {/* TODO: Render con objeto de skills */}
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={{ base: 12, md: 16, lg: 20 }} m={{ base: 2, md: 4, lg: 6 }} />
            </Flex>
        </Flex >
    )
}

export default Skills