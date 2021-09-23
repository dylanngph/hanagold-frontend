import { Dialog } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types'

const ModalTitle = ({ children, onClose }) => {
  return (
    <Dialog.Title as="h3" className="text-lg text-left leading-6 font-medium text-gray-900 mb-3">
      {children}
      <button className="float-right" onClick={onClose}>
        <XIcon width="20px" />
      </button>
    </Dialog.Title>
  )
}

ModalTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

export default ModalTitle
