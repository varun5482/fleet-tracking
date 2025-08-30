import React from 'react'
import DetailModal from '../../components/DetailModal'
import { useDispatch, useSelector } from 'react-redux'
import { setModalOpenStatus } from '../../redux/Vehicle/Slices/vehicle';

const VehicleDetail = () => {
  const { id } = useSelector((state) => state.vehicle);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setModalOpenStatus(''));
  }

  return (
    id ? <DetailModal onClose={onClose} /> : null
  )
}

export default VehicleDetail
