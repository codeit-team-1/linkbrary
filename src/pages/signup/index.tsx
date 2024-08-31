import { AuthHeader, SignUpForm } from '@/components';

const SignUp = () => {
  return (
    <main className="bg-bg pt-[238px] pb-[215px]">
      <article className="flex max-w-[400px] flex-col justify-center items-center gap-[30px] m-auto">
        <AuthHeader />
        <SignUpForm />
      </article>
    </main>
  );
};

export default SignUp;
