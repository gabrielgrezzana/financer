import { Box, Text, Icon } from "@chakra-ui/react";
import { FaDollarSign, FaBuysellads, FaTrademark, FaSnowboarding, FaSeedling, FaWind } from "react-icons/fa";





function MetaMask() {
    return (
        <Box
        
        __css={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(30, 8, 47, 0.9)',
            borderRadius: '10px',
            borderWidth: '1px',
            borderColor: 'purple',
            boxShadow: '0 0 10px purple',
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} marginBottom={3}>MetaMask</Text>

            <Box bg={'#3333'} w={'100%'} h={'100%'} justifyContent={'center'} alignItems={'center'} display={'flex'}>
                <Box bg={'#333333'} w={'50%'} h={'80%'} mb={20} borderRadius={'5px'} borderWidth={'2px'} borderColor={'green'} boxShadow={'0 0 40px purple'}>
                    <Box width={'100%'} height={'70px'} borderBottomWidth={'2px'} borderColor={'rgba(2, 3, 2, 0.1)'} boxShadow={'0 20px 20px rgba(0, 0, 0, 0.4)'}>
                        <Text textAlign={'center'} fontSize={'larger'} color={'#fff'}>account_name</Text>
                        <Text textAlign={'center'} fontSize={'smaller'} color={'#222'}>account_address</Text>
                    </Box>
                    <Box width={'100%'}  height={'84%'}  marginTop={'1rem'}>
                        <Box width={'100%'} height={'70px'} display={'flex'} alignItems={'center'} justifyContent={'flex-start'} padding={'1rem'}>
                            <Icon as={FaDollarSign} fontSize={'2xl'} color={'#fff'}></Icon>
                            <Text textAlign={'center'} fontSize={'larger'} color={'#fff'}>balance_actualy_real_time</Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MetaMask;