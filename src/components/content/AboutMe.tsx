import { Container, chakra, Image, ScaleFade } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const AboutMe = () => {

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: '-100px' }, { disconnectOnLeave: false }, {});

    return (
        <ScaleFade in={inViewport} >
            <Container mt={0} ref={ref} >
                <chakra.h3 fontSize="3xl" fontWeight="bold" mb={18} textAlign="center">
                    About Me
                </chakra.h3>

                <Image src="https://i.ibb.co/mhvpSK3/d7mb0cw-9d9cfb4b-867d-4088-8712-51590701e7b1.png" alt="Placeholder" mx="auto" my={50} />

                <chakra.p fontSize="md" textAlign="center">
                    Nahuel Caballero better known as nhl. Currently working as a FullStack Web developer, focused on my professional development.
                </chakra.p>

                <chakra.p fontSize="lg" mb={18} textAlign="center">
                    My main goal is to specialize in Frontend Web Development, as I love creating visually appealing applications.
                </chakra.p>
            </Container>
        </ScaleFade>
    )
}

export default AboutMe;