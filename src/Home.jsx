import React from 'react'
import Button from '@material-ui/core/Button';
import './App.css'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const useState = () => {
        navigate('/useState');
    };

    const useEffect = () => {
        navigate('/useEffect');
    };

    const useContext = () => {
        navigate('/useContext');
    };

    const useRef = () => {
        navigate('/useRef');
    };

    const useMemo = () => {
        navigate('/useMemo');
    };

    const useCallback = () => {
        navigate('/useCallback');
    };

    const useReducer = () => {
        navigate('/useReducer');
    };

    const useTransistion = () => {
        navigate('/useTransistion');
    };

    const useDefferedValue = () => {
        navigate('/useDefferedValue');
    };



  return (
    <div>
        <div className='heading-container'>
        <h1 className='heading'>React hooks with real life use cases (No BS)</h1>
        </div>

    <div className='container'>
    <Button onClick={useState} classes={{ label: 'btn' }} variant="contained" color="primary">
        useState
    </Button>

    <Button onClick={useEffect} classes={{ label: 'btn' }} variant="contained" color="primary">
        useEffect
    </Button>

    <Button onClick={useContext} classes={{ label: 'btn' }} variant="contained" color="primary">
        useContext
    </Button>

    <Button onClick={useRef} classes={{ label: 'btn' }} variant="contained" color="primary">
        useRef
    </Button>

    <Button onClick={useMemo} classes={{ label: 'btn' }} variant="contained" color="primary">
        useMemo
    </Button>

    <Button onClick={useCallback} classes={{ label: 'btn' }} variant="contained" color="primary">
        useCallback
    </Button>

    <Button onClick={useReducer} classes={{ label: 'btn' }} variant="contained" color="primary">
        useReducer
    </Button>

    <Button onClick={useTransistion} classes={{ label: 'btn' }} variant="contained" color="primary">
        useTransistion
    </Button>

    <Button onClick={useDefferedValue} classes={{ label: 'btn' }} variant="contained" color="primary">
        useDefferedValue
    </Button>

    </div>
    </div>
  )
}

export default Home





