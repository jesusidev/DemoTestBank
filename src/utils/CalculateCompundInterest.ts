import dayjs from 'dayjs';

export const calculateAmount = (
  depositFrequency: string,
  depositAmount: number,
  endDate?: dayjs.Dayjs | null,
): string => {
  if (!endDate) {
    return '0.00';
  }

  const current = dayjs();
  const fullMonths =
    endDate.year() * 12 +
    endDate.month() -
    (current.year() * 12 + current.month());
  const months = endDate.date() >= current.date() ? fullMonths + 1 : fullMonths;
  const initialInterestRate = 0.05;
  const reducedInterestRate = 0.02;

  let total = 0;

  for (let i = 0; i < months; i++) {
    const monthlyDeposit =
      depositAmount / (depositFrequency === 'Twice per Month' ? 2 : 1);

    // Determine the interest rate based on the month
    const rate = i < 36 ? initialInterestRate / 12 : reducedInterestRate / 12;

    // First half of the month
    total += monthlyDeposit;
    total *= 1 + rate;

    if (depositFrequency === 'Twice per Month') {
      // Second half of the month
      total += monthlyDeposit;
      total *= 1 + rate;
    }
  }

  const formattedTotal = total.toFixed(2);

  return parseFloat(formattedTotal).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
