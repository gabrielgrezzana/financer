import { Box, Icon, Text } from "@chakra-ui/react";
import type { Balance as BalanceType } from "../types/balance.types";
import { FaDollarSign, FaBitcoin, FaEthereum, FaDiceD6, FaPiggyBank } from "react-icons/fa";


const mockBalance: BalanceType = {
    dolars: 1000,
    brl: 1000,
    btc: 1000,
    eth: 1000,
    c6_debito: 1000,
    inter_debito: 1000,
}

function Balance() {

    return (
        <Box __css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '90%',
            width: '100%',
            backgroundColor: 'rgba(30, 8, 47, 0.9)',
            borderRadius: '10px',
            borderWidth: '1px',
            borderColor: 'purple',
            padding: '10px',
            gap: '25px',
        }}>                        

        
        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>R$</Text>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.brl}</Text>
        </Box>
        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Icon as={FaDollarSign} __css={{
                width: '25px',
                height: '25px',
                color: '#fff',
                marginRight: '10px',
                marginLeft: '10px',
            }} />
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.dolars}</Text>
        </Box>

        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Icon as={FaBitcoin} __css={{
                width: '25px',
                height: '25px',
                color: '#fff',
                marginRight: '10px',
                marginLeft: '10px',
            }} />
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.brl}</Text>
        </Box>
        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Icon as={FaEthereum} __css={{
                width: '25px',
                height: '25px',
                color: '#fff',
                marginRight: '10px',
                marginLeft: '10px',
            }} />
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.brl}</Text>
        </Box>
        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Icon as={FaDiceD6} __css={{
                width: '25px',
                height: '25px',
                color: '#fff',
                marginRight: '10px',
                marginLeft: '10px',
            }} />
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.brl}</Text>
        </Box>
        <Box __css={{
            width: '60%',            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <Icon as={FaPiggyBank} __css={{
                width: '25px',
                height: '25px',
                color: '#fff',
                marginRight: '10px',
                marginLeft: '10px',
            }} />
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'} borderBottomWidth={'3px'} borderBottomColor={'purple'} fontFamily={'monospace'}>{mockBalance.brl}</Text>
        </Box>                
            
            {/* <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>BTC: {mockBalance.btc}</Text>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>ETH: {mockBalance.eth}</Text>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>C6 Debito: {mockBalance.c6_debito}</Text>
            <Text fontSize='2xl' fontWeight='bold' color={'#fff'} textAlign={'center'}>Inter Debito: {mockBalance.inter_debito}</Text> */}
        </Box>
    )
}

export default Balance;