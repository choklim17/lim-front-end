import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

function ReportsPage() {
    return (
        <Box display='flex' flexDirection='column' gap={2}>
            <Box>
                <Typography variant="h5">Bar Chart</Typography>
                <BarChart
                    xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
                    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
                    height={300}
                />
            </Box>

            <Box>
                <Typography variant="h5">Line Chart</Typography>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                        {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                        },
                    ]}
                    height={300}
                />
            </Box>
        </Box>
    );
}

export default ReportsPage;