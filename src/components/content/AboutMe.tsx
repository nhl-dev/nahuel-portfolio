import { Container, chakra, Image, ScaleFade } from '@chakra-ui/react';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

const AboutMe = () => {

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: '-100px' }, { disconnectOnLeave: false }, {});

    return (
        <ScaleFade in={inViewport} >
            <Container ref={ref} py={70} >
                <chakra.h3 fontSize="3xl" fontWeight="bold" mb={18} textAlign="center" color="#121212" >
                    About Me
                </chakra.h3>

                <Image src="https://i.ibb.co/MfpC2ZD/separador.png" alt="separator" mx="auto" my={8} />

                <chakra.p fontSize="lg" textAlign="center" mb={5} color="#121212" fontWeight={'500'}>
                    Nahuel Caballero better known as nhl. Currently working as a FullStack Web developer, focused on my professional development.
                </chakra.p>

                <chakra.p fontSize="lg" mb={18} textAlign="center" color="#121212" fontWeight={'500'}>
                    My main goal is to specialize in Frontend Web Development, as I love creating visually appealing applications.
                </chakra.p>
            </Container>
        </ScaleFade>
    )
}

export default AboutMe;