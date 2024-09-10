import { FieldValues, useForm } from 'react-hook-form';

import { useSNSSignUp, useSignUpWithKakao } from '@/lib/hooks';
import { CommonButton, CommonInputWithError } from '../common';

export const SetNameForm = () => {
  const { kakaoCode } = useSignUpWithKakao();
  const kakaoMutate = useSNSSignUp({ socialProvider: 'kakao' });

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (values: FieldValues) => {
    const { name } = values;
    if (kakaoCode) {
      kakaoMutate.mutate({ name, token: kakaoCode });
    }
  };

  const formClassName = 'w-full flex flex-col justify-center items-start gap-3';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      <CommonInputWithError
        htmlfor="name"
        placeholder="회원가입을 위해 이름을 입력해주세요"
        errorMessage={`${errors.name?.message}`}
        errorMessageVisible={!!errors.name}
        register={register('name', {
          required: '닉네임을 입력해주세요',
          maxLength: { value: 10, message: '최대 10자까지 가능합니다.' },
          pattern: {
            value: /^[ㄱ-ㅎ가-힣ㅏ-ㅣa-zA-Z0-9 ]*$/i,
            message: '한글, 영문, 숫자만 가능합니다.',
          },
        })}
      >
        이름(닉네임)
      </CommonInputWithError>
      <CommonButton mode="submit" disabled={!isValid}>
        회원가입
      </CommonButton>
    </form>
  );
};