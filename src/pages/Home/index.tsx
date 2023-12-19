import NavigationLoggedIn from '../../layouts/Navigation/NavigationLoggedIn.tsx';
import NavigationSideBar from '../../layouts/Navigation/NavigationSideBar.tsx';
import GridLoggedIn from '../../layouts/Grid/GridLoggedIn.tsx';
import DirectDeposit from '../DirectDeposit';
import Loading from '../../components/Loading/Loading.tsx';
import { useState } from 'react';

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NavigationLoggedIn />
          <GridLoggedIn
            sidebar={<NavigationSideBar />}
            mainContent={<DirectDeposit />}
          />
        </>
      )}
    </>
  );
}
