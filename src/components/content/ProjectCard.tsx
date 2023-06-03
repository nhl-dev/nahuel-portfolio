import {
    Box,
    Heading,
    Text,
    Stack,
    Image,
    AspectRatio,
    Flex,
    HStack,
    Button,
    ScaleFade,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';

type tech = {
    name: string;
    path: string;
};

interface Props {
    data: {
        type: string;
        title: string;
        description: string;
        path: string;
        techStack: Array<tech>;
    }
}

const ProjectCard = ({ data }: Props) => {

    const ref = useRef(null);
    const { inViewport } = useInViewport(ref, { rootMargin: '-100px' }, { disconnectOnLeave: false }, {});

    const stackRender = () => {
        const techStack = data.techStack.map((tech: tech) => {
            return <Image key={tech.name} src={tech.path} alt={tech.name} boxSize={10} fit={'contain'} borderRadius={5} />
        })

        return techStack;

    };



    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems={'space-between'}
            borderRadius={'2xl'}
            p={10}
            ref={ref}
        >
            <ScaleFade in={inViewport} >


                <AspectRatio h={'auto'} maxW={'100%'} ratio={16 / 9} >
                    <Image src={data.path} alt='Project Image' objectFit='cover' borderRadius={20} />
                </AspectRatio>

                <Stack textAlign={'center'} gap={2}>
                    <Text
                        color={'purple.500'}
                        textTransform={'uppercase'}
                        fontWeight={800}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {data.type}
                    </Text>
                    <Heading
                        color={'gray.300'}
                        fontSize={'2xl'}
                        fontFamily={'body'}>
                        {data.title}
                    </Heading>
                    <Text color={'gray.400'}>
                        {data.description}
                    </Text>
                    <Flex direction={'row'} justifyContent={'center'} >
                        <HStack spacing={4}>
                            {stackRender()}
                        </HStack>
                    </Flex>

                    <Box textAlign={'center'}>
                        <Button
                            variant={'solid'}
                            bg={'#121212'}
                            colorScheme={'gray'}
                            size={'lg'}
                            mx={1}
                            gap={1}>
                            <Image src='https://i.ibb.co/4M89htL/pngegg-1.png' alt='GitHub' boxSize={7} fit={'contain'} p={1} />
                            Code
                        </Button>

                        <Button
                            variant={'solid'}
                            bg={'#121212'}
                            colorScheme={'gray'}
                            size={'lg'}
                            mx={1}
                            gap={1}>
                            <Image src='https://i.ibb.co/3f7PXyc/web.png' alt='Web' boxSize={7} fit={'contain'} p={1} />
                            Demo
                        </Button>
                    </Box>
                </Stack>


            </ScaleFade>
        </Box>
    );
}

export default ProjectCard;