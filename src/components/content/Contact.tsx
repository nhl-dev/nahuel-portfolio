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
                    <VStack spacing={{ base: 4, md: 6, lg: 12 }}>
                        <Heading
                            fontSize={{
                                base: '3xl',
                                md: '4xl',
                            }}>
                            Get in Touch
                        </Heading>
                        <Stack
                            align="center"
                            justify="space-around"
                            direction={'row'}>
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

                            <Link href="https://github.com/nhl-dev" target='_blank'>
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

                            <Link href="https://www.linkedin.com/in/nahuel-caballero/" target='_blank'>
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
                    </VStack>
                </Box>
            </Box>
        </Flex>
    );
}

export default Contact;