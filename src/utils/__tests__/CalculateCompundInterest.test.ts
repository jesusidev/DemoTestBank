import dayjs from 'dayjs';
import { calculateAmount } from '../CalculateCompundInterest.ts';

describe('calculateAmount', () => {
  it('returns 0.00 when endDate is not provided', () => {
    expect(calculateAmount('Twice per Month', 500)).toBe('0.00');
  });

  it('$500 calculates compound interest with a deposit frequency of "Twice per Month" for 1 month', () => {
    const depositFrequency = 'Twice per Month';
    const depositAmount = 500;
    const endDate = dayjs().add(1, 'month');
    const expectedValue = '$1,010.46';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest for a "Twice per Month" frequency for 12 months', () => {
    const depositFrequency = 'Twice per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(12, 'month');
    const expectedValue = '$13,757.29';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest for a period shorter than 36 months "Twice per Month" frequency for 35 months', () => {
    const depositFrequency = 'Twice per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(35, 'month');
    const expectedValue = '$42,056.64';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest for a period longer than 36 months "Twice per Month" frequency for 37 months', () => {
    const depositFrequency = 'Twice per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(37, 'month');
    const expectedValue = '$44,346.06';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest with a deposit frequency of "Once per Month" for 12 months', () => {
    const depositFrequency = 'Once per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(12, 'month');
    const expectedValue = '$13,385.56';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest for a period shorter than 36 months "Once per Month" for 35 months', () => {
    const depositFrequency = 'Once per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(35, 'month');
    const expectedValue = '$38,914.81';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });

  it('$1000 calculates compound interest for a period longer than 36 months "Once per Month" for 37 months', () => {
    const depositFrequency = 'Once per Month';
    const depositAmount = 1000;
    const endDate = dayjs().add(37, 'month');
    const expectedValue = '$41,049.63';
    expect(calculateAmount(depositFrequency, depositAmount, endDate)).toBe(
      expectedValue,
    );
  });
});
