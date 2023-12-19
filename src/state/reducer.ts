export type FormData = {
  accountNumber: string;
  routingNumber: string;
  depositAmount: number;
  depositFrequency: string;
};
export type StateType = {
  formSubmissions: FormData;
};
export type ActionType = {
  type: typeof Action.FORM_SUBMISSIONS;
  payload: FormData;
};

export const Action = {
  FORM_SUBMISSIONS: 'FORM_SUBMISSIONS',
} as const;

const formReducer = (draft: StateType, action: ActionType) => {
  switch (action.type) {
    case Action.FORM_SUBMISSIONS: {
      draft.formSubmissions = action.payload;
      return;
    }
    default:
      return;
  }
};

export { formReducer };
