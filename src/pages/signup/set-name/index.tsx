import Head from 'next/head';

import { AuthHeader, AuthStyle as S, SetNameForm } from '@/components';
import { Routes } from '@/lib/route';

const NameSettings = () => {
  return (
    <>
      <Head>
        <title>이름 설정 - Linkbrary</title>
      </Head>
      <main className={S.BackGroundStyle}>
        <div className={S.WrapperStyle}>
          <section className={S.AuthorizeSectionStyle}>
            <AuthHeader href={Routes.LOGIN}>로그인 하기</AuthHeader>
            <SetNameForm />
          </section>
        </div>
      </main>
      ;
    </>
  );
};

export default NameSettings;