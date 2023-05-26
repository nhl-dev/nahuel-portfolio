import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    Stack,
    Textarea,
    Tooltip,
    useClipboard,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';

import { BsGithub, BsLinkedin, BsPerson, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

const Contact = () => {

    const detailColor = useColorModeValue('purple.500', 'purple.200');

    const email = useClipboard("nahuelcaballeroferme@gmail.com");
    const phone = useClipboard("+59894240916");

    return (
        <Flex
            align="center"
            justify="center"
            id="contact">
            <Box
                borderRadius="lg"
                m={{ base: 5, md: 16, lg: 10 }}
                p={{ base: 5, lg: 16 }}>
                <Box>
                    <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
                        <Heading
                            fontSize={{
                                base: '3xl',
                                md: '4xl',
                            }}>
                            Get in Touch
                        </Heading>

                        <Stack
                            spacing={{ base: 4, md: 8, lg: 20 }}
                            direction={{ base: 'column', md: 'row' }}>
                            <Stack
                                align="center"
                                justify="space-around"
                                direction={{ base: 'row', md: 'column' }}>
                                <Tooltip
                                    label={email.hasCopied ? 'Email Copied!' : 'Copy Email'}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="email"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<MdEmail />}
                                        _hover={{
                                            bg: detailColor,
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        onClick={email.onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Tooltip
                                    label={phone.hasCopied ? 'Phone Copied!' : 'Copy Phone'}
                                    closeOnClick={false}
                                    hasArrow>
                                    <IconButton
                                        aria-label="phone"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsFillTelephoneFill size="28px" />}
                                        _hover={{
                                            bg: detailColor,
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        onClick={phone.onCopy}
                                        isRound
                                    />
                                </Tooltip>

                                <Link href="https://github.com/nhl-dev" target='blank'>
                                    <IconButton
                                        aria-label="github"
                                        variant="ghost"
                                        size="lg"
                                        fontSize="3xl"
                                        icon={<BsGithub />}
                                        _hover={{
                                            bg: detailColor,
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>

                                <Link href="https://www.linkedin.com/in/nahuel-caballero/" target='blank'>
                                    <IconButton
                                        aria-label="linkedin"
                                        variant="ghost"
                                        size="lg"
                                        icon={<BsLinkedin size="28px" />}
                                        _hover={{
                                            bg: detailColor,
                                            color: useColorModeValue('white', 'gray.700'),
                                        }}
                                        isRound
                                    />
                                </Link>
                            </Stack>

                            <Box
                                bg={useColorModeValue('#edf2f7', '#171923')}
                                borderRadius="lg"
                                p={8}
                                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                                shadow="base">
                                <VStack spacing={5}>
                                    <FormControl isRequired>
                                        <FormLabel>Name</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<BsPerson />} />
                                            <Input type="text" name="name" placeholder="Your Name" />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Email</FormLabel>

                                        <InputGroup>
                                            <InputLeftElement children={<MdOutlineEmail />} />
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Your Email"
                                            />
                                        </InputGroup>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Message</FormLabel>

                                        <Textarea
                                            name="message"
                                            placeholder="Your Message"
                                            rows={6}
                                            resize="none"
                                        />
                                    </FormControl>

                                    <Button
                                        colorScheme={'purple'}
                                    >
                                        Send Message
                                    </Button>
                                </VStack>
                            </Box>
                        </Stack>
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

export default Contact;