import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../Title';

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
    createData('1 Mart', 100),
    createData('2 Mart', 300),
    createData('3 Mart', 600),
    createData('4 Mart', 800),
    createData('5 Mart', 1500),
    createData('6 Mart', 2000),
    createData('7 Mart', 2400),
    createData('8 Mart', 2400),
    createData('9 Mart', 500),
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>Ürün Teslim Grafiği</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis stroke={theme.palette.text.secondary}>
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
                        >
                            Teslim Edilen Ürün
                        </Label>
                    </YAxis>
                        <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}