import { useContext, useState } from 'react';
import { StateContext } from '../../state/context.ts';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { Box, Button, Grid, Typography } from '@mui/material';
import { DirectDepositStepsProps } from './index.tsx';
import Title from '../../components/Title/title.tsx';
import { calculateAmount } from '../../utils/CalculateCompundInterest.ts';

const CompoundInterestCalculator = ({
  setCurrentStep,
}: DirectDepositStepsProps) => {
  const state = useContext(StateContext);
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [totalAmount, setTotalAmount] = useState<string>('0.00');
  const { depositAmount, depositFrequency } = state.formSubmissions;

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Title title="Compound Interest Calculator" />
      <Grid container justifyContent="center">
        <Box
          bgcolor="white"
          boxShadow={'0px 0px 11px rgb(0 0 0 / 40%)'}
          borderRadius={'15px'}
          maxWidth={'330px'}
        >
          <DateCalendar value={endDate} onChange={(date) => setEndDate(date)} />
        </Box>
      </Grid>
      <Box margin={'3em'}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Button
              variant="contained"
              onClick={() =>
                setTotalAmount(
                  calculateAmount(depositFrequency, depositAmount, endDate),
                )
              }
            >
              Calculate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={() => setCurrentStep(1)}>
              Reset Form
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h3">{totalAmount}</Typography>
    </LocalizationProvider>
  );
};

export default CompoundInterestCalculator;
