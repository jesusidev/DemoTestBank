import Content from '../../layouts/Content/Content.tsx';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import NewDirectDepositForm from './NewDirectDepositForm.tsx';
import CompoundInterestCalculator from './CompoundInterestCalculator.tsx';
import { motion } from 'framer-motion';

export type DirectDepositStepsProps = {
  setCurrentStep: (step: number) => void;
};

const steps = [Step1, Step2, Step3];

export default function DirectDeposit() {
  const [currentStep, setCurrentStep] = useState(0);

  const CurrentComponent = steps[currentStep];

  return (
    <Content title={currentStep === 0 ? 'Welcome to Bank of Trayt' : ''}>
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        minHeight="350px"
        justifyContent="center"
      >
        <CurrentComponent setCurrentStep={setCurrentStep} />
      </Box>
    </Content>
  );
}

function Step1({ setCurrentStep }: DirectDepositStepsProps) {
  return (
    <motion.div
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <Typography variant="h2">
        Initiate a new Direct Deposit to earn 5% for 36 Months!
      </Typography>
      <Box mt={12}>
        <Button variant="contained" onClick={() => setCurrentStep(1)}>
          Learn More
        </Button>
      </Box>
    </motion.div>
  );
}

function Step2({ setCurrentStep }: DirectDepositStepsProps) {
  return (
    <motion.div
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <NewDirectDepositForm setCurrentStep={setCurrentStep} />
    </motion.div>
  );
}

function Step3({ setCurrentStep }: DirectDepositStepsProps) {
  return (
    <motion.div
      transition={{ ease: 'easeInOut', duration: 0.5 }}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <CompoundInterestCalculator setCurrentStep={setCurrentStep} />
    </motion.div>
  );
}
