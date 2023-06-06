import { Box, Flex, chakra, Image } from '@chakra-ui/react'

import ProjectCard from './ProjectCard'

import { projects } from '../../assets/data'

const Projects = () => {
    return (
        <Flex direction={'column'} justifyContent={'space-around'} my={10} gap={10}>
            <Box>
                <chakra.h3 fontSize="3xl" fontWeight="bold" mb={10} textAlign="center" color="#fff" >
                    Projects
                </chakra.h3>
                <Image src="https://i.ibb.co/MfpC2ZD/separador.png" alt="separator" mx="auto" />
            </Box>

            <Flex direction={{ base: 'column', lg: 'row' }} justifyContent={'center'} alignItems={'center'} >
                <ProjectCard data={projects[0]} />
                <ProjectCard data={projects[0]} />
            </Flex>
            <Flex direction={{ base: 'column', lg: 'row' }} justifyContent={'center'} alignItems={'center'} >
                <ProjectCard data={projects[0]} />
                <ProjectCard data={projects[0]} />
            </Flex>
        </Flex>
    )
}

export default Projects