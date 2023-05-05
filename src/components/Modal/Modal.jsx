import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import PixelButton from '@components/PixelButton/PixelButton'
import {
  modal,
  modalContent,
  displayBlock,
  displayNone,
  load,
  loadingText,
  victoryCss,
  victoryIcon,
  victoryText,
} from './Modal.module.css'
import loadSVG from '../../assets/cargar.svg'
import lost from '../../assets/lost.png'

const Modal = ({ show, loading, victory }) => {
  const modalClass = show
    ? `${modal} ${displayBlock}`
    : `${modal} ${displayNone}`

  return (
    <div className={modalClass}>
      <div className={modalContent}>
        {loading ? (
          <div className={load}>
            <img src={loadSVG} alt='loading' />
            <div className={loadingText}>Loading...</div>
          </div>
        ) : (
          <div className={victoryCss}>
            <div className={victoryIcon}>
              {victory ? '🎉' : <img src={lost} alt='Perdio' />}
            </div>
            <div className={victoryText}>
              {victory
                ? 'Felicitaciones,  ¡Ganaste!'
                : 'Lo lamento, ¡Perdiste!'}
            </div>
            <Link to='/'>
              <PixelButton action={() => {}} label='Volver' />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  victory: PropTypes.bool.isRequired,
}

export default Modal
