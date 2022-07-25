import clsx from 'clsx'

import s from './Spinner.module.css'

const Spinner = () => {
  return (
    <>
      <div className={clsx(s.spinnerContent)}></div>
    </>
  )
}

export default Spinner
