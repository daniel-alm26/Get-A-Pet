import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom' // importamos o "useParams" para acessar a URL dinâmica (Parâmetro de URL pelo :id) 

import styles from './PetDetails.module.css'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function PetDetails() {
    return (
        <h1>Página de Pet</h1>
    )
}

export default PetDetails