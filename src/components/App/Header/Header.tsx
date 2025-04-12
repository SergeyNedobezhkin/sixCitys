import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { AppRoute, AuthorizationStatus } from '../../../constants/constants';
import { logoutAction } from '../../../store/api-actions';
import classNames from 'classnames';
import css from './Header.module.css'

function Header() {

  const authorizationStatus = useAppSelector((state) => state.offersReducer.authorizationStatus);
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutAction());
    }
  };

  return (
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
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authorizationStatus === AuthorizationStatus.Auth &&
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
              }
              <li className="header__nav-item">
                {
                  authorizationStatus === AuthorizationStatus.Auth ?
                    <button
                      onClick={logOutHandler}
                      className={classNames('header__nav-link', css.button)}
                    >
                      <span
                        className="header__signout"
                      >
                        Log Out
                      </span>
                    </button>
                    :
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Login}
                    >
                      <span
                        className="header__signout"
                      >
                        Sign in
                      </span>
                    </Link>
                }

              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
