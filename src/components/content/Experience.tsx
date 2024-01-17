import { Box, Flex, chakra, Image, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Text, Heading } from '@chakra-ui/react'

const Experience = () => {
    return (
        <Flex direction={'column'} justifyContent={'space-around'} pt={10} mb={50}>
            <Box>
                <chakra.h3 fontSize="3xl" fontWeight="bold" textAlign="center" color="#fff" >
                    Professional Experience
                </chakra.h3>
                <Image src="https://i.ibb.co/MfpC2ZD/separador.png" alt="separator" mx="auto" my={10} />
            </Box>
            <Flex justifyContent={'center'}>
                <Accordion defaultIndex={[0]} allowMultiple width={['95%', '80%', '70%', '60%']}>
                    <AccordionItem backgroundColor={'#805ad5'} borderRadius={20} mt={3}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' p={2}>
                                <Heading as='h2' size='md'>
                                    Fullstack Software Developer @ Pay-Pros
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} backgroundColor={'#121212'} borderRadius={20} border={'solid'} borderColor={'#805ad5'}>
                            <Flex justifyContent={'space-between'} flexDirection={['column-reverse', 'column-reverse', 'row']}>
                                <Box flex={'0.8'}>
                                    <Box>
                                        <Text>
                                            Payments API Development.
                                        </Text>
                                        <Text>
                                            Web Development.
                                        </Text>
                                        <Text>
                                            Assist the client to ensure the correct API integration with their system.
                                        </Text>
                                        <Text>
                                            Support and maintenance of the API.
                                        </Text>
                                    </Box>
                                    <Flex flexWrap={'wrap'}>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            PHP
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            HTML
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            CSS
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            JS
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            MySQL
                                        </Text>
                                    </Flex>
                                </Box>
                                <Flex justifyContent={'flex-end'} flex={'0.2'} px={[20, 20, 5]} py={5} alignItems={'center'}>
                                    <Image src="https://i.ibb.co/kSsTfWv/logo-pay-pros.png" alt="paypros" />
                                </Flex>
                            </Flex>

                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem backgroundColor={'#805ad5'} borderRadius={20} mt={3}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' p={2}>
                                <Heading as='h2' size='md'>
                                    Fullstack Software Developer @ Baufest
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} backgroundColor={'#121212'} borderRadius={20} border={'solid'} borderColor={'#805ad5'}>
                            <Flex justifyContent={'space-between'} flexDirection={['column-reverse', 'column-reverse', 'row']}>
                                <Box flex={['0.7', '0.8']}>
                                    <Box>
                                        <Text>
                                            Refactored the application used in the PEI program, where my tasks included coordinating the backend and frontend teams, updating and changing some functionalities of the frontend code (React) and fixing validations in the backend (Java).
                                        </Text>
                                    </Box>
                                    <Flex flexWrap={'wrap'}>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            HTML
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            Java
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            React
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            JS
                                        </Text>
                                        <Text backgroundColor={'#805ad5'} mx={2} my={2} px={2} py={1} borderRadius={7} fontWeight={'bold'}>
                                            GIT
                                        </Text>
                                    </Flex>
                                </Box>
                                <Flex justifyContent={'flex-end'} flex={['0.3', '0.2']} px={[20, 20, 5]} py={5} alignItems={'center'}>
                                    <Image src="https://i.ibb.co/Zhrk2wX/logo-baufest.png" alt="baufest" />
                                </Flex>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Flex >
    )
}

export default Experience