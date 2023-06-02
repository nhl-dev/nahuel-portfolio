import { useRef } from 'react';

import { Box, HStack, Icon, VStack, chakra, useBreakpointValue, useColorModeValue, Text, ScaleFade } from '@chakra-ui/react';

import { UilBuilding, UilUniversity, UilCalender } from '@iconscout/react-unicons';

import { useInViewport } from 'react-in-viewport';

export interface CardProps {
    id: number;
    title: string;
    type: string;
    description: string;
    date: string;
}

const Card = ({ id, title, type, description, date }: CardProps) => {

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: '-100px' }, { disconnectOnLeave: false }, {});

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
                borderColor: `transparent ${useColorModeValue('#805AD5', '#805AD5')} transparent`,
                borderStyle: 'solid',
                borderWidth: borderWidthValue,
                position: 'absolute',
                left: leftValue,
                right: rightValue,
                display: 'block'
            }}
        >
            <ScaleFade in={inViewport} >
                <Box ref={ref}>

                    <VStack spacing={2} mb={3} alignItems={isEvenId || isMobile ? 'flex-start' : 'flex-end'}>
                        <chakra.h1 fontSize="lg" lineHeight={1.2} fontWeight="bold" w="100%" color="#121212">
                            {title}
                        </chakra.h1>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Icon
                                as={type == 'Education' ? UilUniversity : UilBuilding}
                                color='purple.500'
                                boxSize={4}
                                display={isEvenId || isMobile ? 'box' : 'none'} mr={2} />

                            <Text fontSize="md" color="#121212">{description}</Text>
                            <Icon
                                as={type == 'Education' ? UilUniversity : UilBuilding}
                                color='purple.500'
                                boxSize={4}
                                display={!isEvenId && !isMobile ? 'box' : 'none'}
                                ml={2} />
                        </Box>
                        <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                            <Icon as={UilCalender} color='purple.500' boxSize={4} display={isEvenId || isMobile ? 'box' : 'none'} mr={2} />
                            <Text fontSize="sm" color="#121212">
                                {date}
                            </Text>
                            <Icon as={UilCalender} color='purple.500' boxSize={4} display={!isEvenId && !isMobile ? 'box' : 'none'} ml={2} />
                        </Box>
                    </VStack>
                </Box>
            </ScaleFade>
        </HStack>
    );
};

export default Card;