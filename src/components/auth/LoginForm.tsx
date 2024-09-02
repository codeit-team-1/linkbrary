import usePasswordVisuality from '@/lib/hooks/auth/usePasswordVisuality';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { CommonInputWithError } from '../common/input/CommonInput';
import CommonButton from '../common/buttons/CommonButton';

const LoginForm = () => {
  const {
    visible: passwordVisible,
    visibleIcon: passwordVisibleIcon,
    handleVisible: handlePasswordVisible,
  } = usePasswordVisuality();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = () => {
    // const onSubmit = (values: FieldValues) => {
    /* @TODO api 연결 */
    // console.log(values);
  };
  const formClassName =
    'w-full flex flex-col justify-center items-start gap-[12px]';
  const iconClassName = 'absolute top-6 right-4 cursor-pointer';

  return (
    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
      <CommonInputWithError
        htmlfor="email"
        placeholder="link@brary.com"
        errorMessage={`${errors.email?.message}`}
        errorMessageVisible={!!errors.email}
        register={register('email', {
          required: '필수 항목입니다.',
          pattern: {
            value:
              /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
            message: '이메일 형식으로 작성해주세요.',
          },
        })}
      >
        이메일
      </CommonInputWithError>

      <CommonInputWithError
        htmlfor="password"
        placeholder="********"
        errorMessage={`${errors.password?.message}`}
        type={passwordVisible ? 'text' : 'password'}
        errorMessageVisible={!!errors.password}
        Icon={
          <Image
            className={iconClassName}
            src={passwordVisibleIcon}
            alt="비밀번호 보기"
            onClick={handlePasswordVisible}
          />
        }
        register={register('password', {
          required: '비밀번호를 입력해주세요',
        })}
      >
        비밀번호
      </CommonInputWithError>
      <CommonButton mode="submit" disabled={!isValid}>
        로그인
      </CommonButton>
    </form>
  );
};

export default LoginForm;