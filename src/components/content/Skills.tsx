import { Box, Flex, chakra, Image } from '@chakra-ui/react';

const Skills = () => {
    return (
        <Flex direction={'column'} justifyContent={'space-around'} pt={10}>
            <Box>
                <chakra.h3 fontSize="3xl" fontWeight="bold" textAlign="center" color="#121212" >
                    Skills
                </chakra.h3>
                <Image src="https://i.ibb.co/MfpC2ZD/separador.png" alt="separator" mx="auto" my={10} />
            </Box>
            <Flex pb={12} justifyContent={'center'} wrap={'wrap'}>
                {/* TODO: Render con objeto de skills */}
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
                <Image src="https://i.ibb.co/QH75TS4/logo-javascript.png" alt="separator" w={'10%'} m={5} />
            </Flex>
        </Flex >
    )
}

export default Skills