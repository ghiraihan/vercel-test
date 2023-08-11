import React from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import * as logo from '../../Assets/image/logo.svg';
// import '../../Styles/App.css';
import styles from "../../styles/HomePage.module.css"

import { login } from "../../redux/action/userAction";

function HomePage() {
  const reduxState = useSelector(function(state) {
    return state
  });
  console.log(reduxState.user);

  // redux variable
  const dispatch = useDispatch();

  function ubahRedux() {
    console.log(reduxState.user);
    dispatch(
      login({ username: 'Ghifari', id: 1 })
    )
  }
  return (
    <div className={styles.App}>
      <header className={styles["App-header"]}>
        <Image src={logo} className={styles["App-logo"]} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href='/HomePage'
        >
          Learn React
        </Link>
        <button type='button' onClick={ubahRedux}>Test</button>
      </header>
    </div>
  );
}

export default HomePage;
