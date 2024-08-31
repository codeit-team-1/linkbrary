import { ComponentPropsWithoutRef, ComponentType, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CommonInputProps extends ComponentPropsWithoutRef<'input'> {
  register?: UseFormRegisterReturn;
  Icon?: React.ReactNode;
  isError?: boolean;
}

const CommonInput = ({
  className,
  type,
  placeholder,
  register,
  Icon,
  isError,
  ...rest
}: CommonInputProps) => {
  const defaultLayout =
    'flex w-full p-[18px] justify-center items-center rounded-lg  ';
  const defaultFont = 'font-[Pretendard] not-italic leading-[24px] text-[16px]';
  const defaultStyle = `border-[1px] bg-white ${isError ? 'border-red' : ''} focus:outline-primary`;
  return (
    <div className="relative w-full">
      <input
        className={`${defaultLayout} ${defaultFont} ${defaultStyle} ${className} `}
        type={type ?? 'text'}
        placeholder={placeholder}
        {...rest}
        {...register}
      />
      {Icon}
    </div>
  );
};
interface CommonInputWithLabelProps extends CommonInputProps {}

const withLabel = (WrappedCompoents: ComponentType) => {
  const defaultFont =
    'text-[14px] font-[Pretendard] not-italic leading-[normal]';
  return ({ children, ...rest }: CommonInputWithLabelProps) => (
    <>
      <label className={`${defaultFont}`}>{children}</label>
      <WrappedCompoents {...rest} />
    </>
  );
};

interface CommonInputWithLabelWithErrorMessageProps
  extends CommonInputWithLabelProps {
  errorMessage?: string;
  errorMessageVisible?: boolean;
}
const withErrorMessage = (WrappedComponents: ComponentType) => {
  return forwardRef(
    (
      {
        errorMessage,
        errorMessageVisible,
        ...rest
      }: CommonInputWithLabelWithErrorMessageProps,
      _,
    ) => {
      const defaultFont =
        'text-[14px] font-[Pretendard] not-italic leading-normal text-red';
      const defaultLayout = `${errorMessageVisible ? 'visible' : 'invisible'}`;
      rest['isError'] = errorMessageVisible;
      return (
        <>
          <WrappedComponents {...rest} />
          <p className={`${defaultFont} ${defaultLayout}`}>{errorMessage}</p>
        </>
      );
    },
  );
};

const CommonInputWithLabel = withLabel(CommonInput);
const CommonInputWithError = withErrorMessage(withLabel(CommonInput));

export { CommonInput, CommonInputWithLabel, CommonInputWithError };