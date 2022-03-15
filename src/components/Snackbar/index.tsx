import * as S from './styled';

const Snackbar = ({ message = 'Eita, isso é um pokemon?' }) => {
  return (
    <S.Wrapper>
      <S.Message>{message}</S.Message>
    </S.Wrapper>
  );
};

export default Snackbar;
