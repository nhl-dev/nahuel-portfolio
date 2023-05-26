import {
    Box,
    chakra,
    Container,
    Text,
    HStack,
    VStack,
    Flex,
    useColorModeValue,
    useBreakpointValue,
    Icon
} from '@chakra-ui/react';

import { CalendarIcon } from '@chakra-ui/icons';
import { UilGraduationCap, UilBag } from '@iconscout/react-unicons';

interface CardProps {
    id: number;
    title: string;
    description: string;
    date: string;
}

interface Props {
    title: string;
    data: CardProps[];
}

const Timeline = ({ title, data }: Props) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    const isDesktop = useBreakpointValue({ base: false, md: true });
    const detailColor = useColorModeValue('purple.500', 'purple.200');

    return (
        <Container maxWidth="3xl" p={{ base: 2, sm: 10 }} mt={70}>
            <Box mb={50} textAlign="center">
                {title === 'Education' ?
                    <Icon as={UilGraduationCap} w={10} h={10} color={detailColor} />
                    : <Icon as={UilBag} w={10} h={10} color={detailColor} />
                }
                <chakra.h3 fontSize="4xl" fontWeight="bold">
                    {title}
                </chakra.h3>
            </Box>
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

const Card = ({ id, title, description, date }: CardProps) => {

    // For even id show card on left side
    // For odd id show card on right side
    const isEvenId = id % 2 == 0;
    let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
    let leftValue = isEvenId ? '-15px' : 'unset';
    let rightValue = isEvenId ? 'unset' : '-15px';

    const isMobile = useBreakpointValue({ base: true, md: false });
    if (isMobile) {
        leftValue = '-15px';
        rightValue = 'unset';
        borderWidthValue = '15px 15px 15px 0';
    }

    return (
        <HStack
            flex={1}
            p={{ base: 3, sm: 6 }}
            bg={'transparent'}
            spacing={5}
            rounded="lg"
            alignItems="center"
            justifyContent={isEvenId || isMobile ? 'flex-start' : 'flex-end'}
            pos="relative"
            _before={{
                content: `""`,
                w: '0',
                h: '0',
                borderColor: `transparent ${useColorModeValue('#805AD5', '#D6BCFA')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <Box>

                <VStack spacing={2} mb={3} alignItems={isEvenId || isMobile ? 'flex-start' : 'flex-end'}>
                    <chakra.h1 fontSize="lg" lineHeight={1.2} fontWeight="bold" w="100%">
                        {title}
                    </chakra.h1>
                    <Text fontSize="md">{description}</Text>
                    <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                        <CalendarIcon color={useColorModeValue('purple.500', 'purple.200')} boxSize={4} display={isEvenId || isMobile ? 'box' : 'none'} mr={2} />
                        <Text fontSize="sm">
                            {date}
                        </Text>
                        <CalendarIcon color={useColorModeValue('purple.500', 'purple.200')} boxSize={4} display={!isEvenId && !isMobile ? 'box' : 'none'} ml={2} />
                    </Box>
                </VStack>
            </Box>
        </HStack>
    );
};

const LineWithDot = () => {
    return (
        <Flex
            pos="relative"
            alignItems="center"
            mr={{ base: '40px', md: '40px' }}
            ml={{ base: '0', md: '40px' }}
        >
            <chakra.span
                position="absolute"
                left="50%"
                height="calc(100% + 10px)"
                border="1px solid"
                borderColor={useColorModeValue('gray.200', 'gray.700')}
                top="0px"
            ></chakra.span>
            <Box pos="relative" p="10px">
                <Box
                    pos="absolute"
                    top="0"
                    left="0"
                    bottom="0"
                    right="0"
                    width="100%"
                    height="100%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    bg={useColorModeValue('purple.500', 'purple.200')}
                    borderRadius="100px"
                    backgroundImage="none"
                    opacity={1}
                ></Box>
            </Box>
        </Flex>
    );
};

const EmptyCard = () => {
    return <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"></Box>;
};

export default Timeline;