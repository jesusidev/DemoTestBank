import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { color } from '../../styles/default.ts';
import { DirectDepositStepsProps } from './index.tsx';
import { useContext } from 'react';
import { DispatchContext } from '../../state/context.ts';
import { Action } from '../../state/reducer.ts';
import Title from '../../components/Title/title.tsx';

type FormData = {
  accountNumber: string;
  routingNumber: string;
  depositAmount: number;
  depositFrequency: string;
};

const formSchema = z.object({
  accountNumber: z.string().min(8).max(17),
  routingNumber: z
    .string()
    .regex(
      /^(00|01|02|03|04|05|06|07|08|09|10|11|12|21|22|23|24|25|26|27|28|29|30|31|32|61|62|63|64|65|66|67|68|69|70|71|72|80)\d{7}$/,
    ),
  depositAmount: z
    .string()
    .transform((value) => Number(value.replace(/,/g, '')))
    .refine((value) => !isNaN(value), {
      message: 'Deposit amount must be a number',
    })
    .refine((value) => value > 0, {
      message: 'Deposit amount must be positive',
    }),
  depositFrequency: z.enum(['Twice per Month', 'Once per Month']),
});

export default function NewDirectDepositForm({
  setCurrentStep,
}: DirectDepositStepsProps) {
  const dispatch = useContext(DispatchContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    dispatch({ type: Action.FORM_SUBMISSIONS, payload: data });
    setCurrentStep(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title title="New Direct Deposit Enrollment" />
      <Grid container justifyContent="center">
        <Stack
          spacing={2}
          bgcolor={color.lightGrey}
          padding={'3em'}
          width={'550px'}
        >
          <Controller
            name="accountNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField {...field} type="text" label="Account Number" />
            )}
          />
          {errors.accountNumber && (
            <FormHelperText error>
              {errors.accountNumber.message}
            </FormHelperText>
          )}

          <Controller
            name="routingNumber"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField {...field} type="text" label="Routing Number" />
            )}
          />
          {errors.routingNumber && (
            <FormHelperText error>
              {errors.routingNumber.message}
            </FormHelperText>
          )}

          <Controller
            name="depositAmount"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <TextField
                {...field}
                type="number"
                label="Deposit Amount ($)"
                inputProps={{ min: '0', step: '0.01' }}
              />
            )}
          />
          {errors.depositAmount && (
            <FormHelperText error>
              {errors.depositAmount.message}
            </FormHelperText>
          )}

          <FormControl fullWidth>
            <InputLabel id="depositFrequency">Deposit Frequency</InputLabel>
            <Controller
              name="depositFrequency"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select {...field} labelId="depositFrequency">
                  <MenuItem value={'Twice per Month'}>Twice per Month</MenuItem>
                  <MenuItem value={'Once per Month'}>Once per Month</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          {errors.depositFrequency && (
            <FormHelperText error>
              {errors.depositFrequency.message}
            </FormHelperText>
          )}
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </Grid>
    </form>
  );
}
