import {
    Box,
    chakra,
    Container,
    Flex,
    useBreakpointValue,
    Icon,
    ScaleFade
} from '@chakra-ui/react';

import { UilGraduationCap, UilBag } from '@iconscout/react-unicons';

import Card, { CardProps } from './Card';
import LineWithDot from './LineWithDot';
import EmptyCard from './EmptyCard';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

interface Props {
    title: string;
    data: CardProps[];
}

const Timeline = ({ title, data }: Props) => {

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: '-100px' }, { disconnectOnLeave: false }, {});

    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const detailColor = 'purple.500';

    return (
        <Container maxWidth="3xl" p={{ base: 2, sm: 10 }} >
            <ScaleFade in={inViewport} >
                <Box mb={50} textAlign="center" ref={ref}>
                    {title === 'Education' ?
                        <Icon as={UilGraduationCap} w={10} h={10} color={detailColor} />
                        : <Icon as={UilBag} w={10} h={10} color={detailColor} />
                    }
                    <chakra.h3 fontSize="3xl" fontWeight="bold" color="#121212">
                        {title}
                    </chakra.h3>
                </Box>
            </ScaleFade>
            {data.map((item) => (
                <Flex key={item.id} mb="10px">
                    {/* Desktop view(left card) */}
                    {isDesktop && item.id % 2 === 0 && (
                        <>
                            <EmptyCard />
                            <LineWithDot />
                            <Card {...item} />
                        </>
                    )}

                    {/* Mobile view */}
                    {isMobile && (
                        <>
                            <LineWithDot />
                            <Card {...item} />
                        </>
                    )}

                    {/* Desktop view(right card) */}
                    {isDesktop && item.id % 2 !== 0 && (
                        <>
                            <Card {...item} />
                            <LineWithDot />
                            <EmptyCard />
                        </>
                    )}
                </Flex>
            ))}
        </Container>
    );
};

export default Timeline;