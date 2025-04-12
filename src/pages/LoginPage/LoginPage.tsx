import { FormEvent, JSX, useRef } from 'react';
import { Link } from 'react-router-dom';
import { loginAction } from '../../store/api-actions';
import { useAppDispatch } from '../../store/hook';
import { AuthData } from '../../types/user.types';
import { AppRoute } from '../../constants/constants';



export function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      console.log(formRef.current);

      const dataForm = new FormData(formRef.current);
      const loginDataInformation = Object.fromEntries(dataForm) as AuthData;
      dispatch(loginAction(loginDataInformation));
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form ref={formRef} className="login__form form" onSubmit={onSubmit} method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="login"
                  placeholder="Email"
                  required={false}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={false}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to={AppRoute.Main}>
                <span>Parish</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default LoginPage;
