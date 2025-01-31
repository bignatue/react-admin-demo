import {Card, CardContent, Typography, Box} from "@mui/material";

export const HomePage = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}
        >
            <Card sx={{
                maxWidth: 400,
                padding: 2,
                textAlign: 'center',
            }}>
                <CardContent>
                    <Typography variant="h4" component='div' gutterBottom>
                        Welcome to the Dashboard
                    </Typography>
                    <Typography variant="body1" color='text.secondary'>
                        Manage your post and users effortlessly with the tools provided.
                        Navigate though the menu to get started.
                    </Typography>                    
                </CardContent>
            </Card>
        </Box>
    )
}