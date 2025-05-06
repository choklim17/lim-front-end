import { Box, Card, CardContent, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import UsersPage from "./UsersPage";

function DashboardPage() {
    return (
        <Box display='flex' flexDirection='column' gap={2}>
            <Box display='flex' gap={2} justifyContent='center'>
                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Number of users
                        </Typography>
                        <Typography variant="h5" component="div">
                        420
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Average Age
                        </Typography>
                        <Typography variant="h5" component="div">
                        69
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ width: 275 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Active Users
                        </Typography>
                        <Typography variant="h5" component="div">
                        1
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <PieChart
                series={[
                    {
                    data: [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                    },
                ]}
                width={200}
                height={200}
            />

            <UsersPage />
        </Box>
    );
}

export default DashboardPage;