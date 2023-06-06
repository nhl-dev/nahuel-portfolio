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
                <Accordion defaultIndex={[0]} allowMultiple width={'50%'}>
                    <AccordionItem backgroundColor={'#805ad5'} borderRadius={20} mt={3}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' p={2}>
                                <Heading as='h2' size='md'>
                                    Technical Account Manager @ Pay-Pros
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} backgroundColor={'#121212'} borderRadius={20} border={'solid'} borderColor={'#805ad5'}>
                            <Text>
                                Development on a API to integrate multiple payment providers into a unified interface.
                            </Text>
                            <Text>
                                Create frontend web development for accessing API services.
                            </Text>
                            <Text>
                                Help clients with proper API integration into their system.
                            </Text>
                            <Text>
                                Provide ongoing support and maintenance for the API.
                            </Text>

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
                            Refactored the application used in the PEI program, where my tasks included coordinating
                            the backend and frontend teams, updating and changing some functionalities of the
                            frontend code (React) and fixing validations in the backend (Java).
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem backgroundColor={'#805ad5'} borderRadius={20} mt={3}>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left' p={2}>
                                <Heading as='h2' size='md'>
                                    Laboratory Technician @ SONDA
                                </Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4} backgroundColor={'#121212'} borderRadius={20} border={'solid'} borderColor={'#805ad5'}>
                            I was involved in various tasks related to the repair of CEIBAL equipment,
                            as well as service management, administrative duties, stock handling, and service logistics.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Flex>
        </Flex >
    )
}

export default Experience