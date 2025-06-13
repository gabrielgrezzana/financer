import { Box, Text } from "@chakra-ui/react";
import Balance from "../../components/balance";
import Analytics from "../../components/analytics";



function Financer() {
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
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} marginBottom={3}>Financer</Text>

            <Box __css={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px',
                height: '90%',
            }}>
                <Box __css={{
                    width: '40%',
                    height: '100%',
                    backgroundColor: 'rgba(30, 8, 47, 0.9)',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: 'purple',
                }}>
                    <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>Balance</Text>
                    <Balance />
                </Box>

                <Box __css={{
                    width: '55%',
                    height: '100%',
                    backgroundColor: 'rgba(30, 8, 47, 0.9)',
                    borderRadius: '10px',
                    borderWidth: '1px',
                    borderColor: 'purple',
                }}>
                    <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>Analytics</Text>
                    <Analytics />
                </Box>
            </Box>
        </Box>
    )
}

export default Financer;