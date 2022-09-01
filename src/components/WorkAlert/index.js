import * as React from "react";
import PropTypes from "prop-types";

import { Box, Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const WorkAlert = () => {

    return(
        <Container>
            <Box width={600} bgcolor="black" mx="auto" >
                <Box height={90} bgcolor="#282828" alignItems='center' display='flex' px='32px'>
                    <Stack direction='row' width='100%' alignItems='center' spacing={3}>
                        <Typography color='white' fontSize={20} lineHeight='26px' fontWeight='bold' flexGrow={1}>
                        <a style={{color:'#66DC78'}}>Work</a>Alert
                        </Typography>
                        <Typography color='#999999' fontSize={14} lineHeight='19px' fontWeight="normal">
                        VALID TILL 31 - 08 - 2022
                        </Typography>
                        <Button sx={{color:"white", bgcolor:'black', px:2, py:1 }}>LOG OUT</Button>
                    </Stack>
                </Box>
                <Box p={4}>
                    <Typography fontSize={20} color='white'>KEYWORDS</Typography>
                    <Grid item xs={12} pt={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Grid container bgcolor='#282828' borderRadius='4px' p={2} alignItems='center'>
                                    <DeleteIcon sx={{color:"#999999", pr:2}} />
                                    <Stack flexGrow={1}>
                                        <Typography color='#999999' fontSize={14}>Keyword</Typography>
                                        <Typography color='#FFFFFF' fontSize={16}>Mobile App Development</Typography>
                                    </Stack>
                                    <Typography lineHeight='15px' fontSize={11} color='#66DC78' px='9px' py='4.5px' bgcolor='#66DC781A' borderRadius='50%'>2</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container bgcolor='#282828' borderRadius='4px' p={2} alignItems='center'>
                                    <DeleteIcon sx={{color:"#999999", pr:2}} />
                                    <Stack flexGrow={1}>
                                        <Typography color='#999999' fontSize={14}>Keyword</Typography>
                                        <Typography color='#FFFFFF' fontSize={16}>Mobile App Development</Typography>
                                    </Stack>
                                    <Typography lineHeight='15px' fontSize={11} color='#66DC78' px='9px' py='4.5px' bgcolor='#66DC781A' borderRadius='50%'>2</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container bgcolor='#282828' borderRadius='4px' p={2} alignItems='center'>
                                    <DeleteIcon sx={{color:"#999999", pr:2}} />
                                    <Stack flexGrow={1}>
                                        <Typography color='#999999' fontSize={14}>Keyword</Typography>
                                        <Typography color='#FFFFFF' fontSize={16}>Mobile App Development</Typography>
                                    </Stack>
                                    <Typography lineHeight='15px' fontSize={11} color='#66DC78' px='9px' py='4.5px' bgcolor='#66DC781A' borderRadius='50%'>2</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container bgcolor='#282828' borderRadius='4px' p={2} alignItems='center'>
                                    <DeleteIcon sx={{color:"#999999", pr:2}} />
                                    <Stack flexGrow={1}>
                                        <Typography color='#999999' fontSize={14}>Keyword</Typography>
                                        <Typography color='#FFFFFF' fontSize={16}>Mobile App Development</Typography>
                                    </Stack>
                                    <Typography lineHeight='15px' fontSize={11} color='#66DC78' px='9px' py='4.5px' bgcolor='#66DC781A' borderRadius='50%'>2</Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container bgcolor='#282828' borderRadius='4px' p={2} alignItems='center'>
                                    <Grid item xs={12}>
                                        <Grid container spacing={1} >
                                            <Grid item xs={6}>
                                                <TextField id="outlined-basic" placeholder="Keyword" variant="outlined" sx={{width:'100%'}} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <TextField id="outlined-basic" placeholder="UpWork RSS Link" variant="outlined" sx={{width:'100%'}} />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container bgcolor='black' borderRadius='4px' py={2} >
                                                    <Typography color='white' textAlign='center' width='100%'>ADD NEW KEYWORD</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box bgcolor='#282828' p={4}>
                    <Grid item xs={12}>
                        <Grid container p='20px' sx={{background:'transparent radial-gradient(closest-side at 50% 50%, #1890FF 0%, #002766 100%) 0% 0% no-repeat padding-box', border:'1px solid #FFFFFF66', opacity:1}} borderRadius='10px' height={121} alignItems='center'>
                            <Box width={91} position='relative' pr={2}>
                                <Box width={81} height={81} borderRadius='50%' bgcolor='white' sx={{opacity:0.4}}>
                                </Box>
                                <Box width={81} height={81} borderRadius='50%' bgcolor='white' position='absolute' left='10px' top='0px'>
                                </Box>
                            </Box>
                            <Typography fontSize={20} lineHeight="32px" fontWeight="medium" color='white' flexGrow={1} >Connect ScopeBuilder</Typography>
                            <Box bgcolor='#002766' borderRadius='50%' width={57} height={57} display='flex' alignItems='center' justifyContent='center' m='12px'>
                                <img src="arrow-right.svg" alt="" />
                            </Box>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Container>
    )
}

WorkAlert.propTypes = {
    children: PropTypes.any,
    id: PropTypes.string,
};
  
export default WorkAlert