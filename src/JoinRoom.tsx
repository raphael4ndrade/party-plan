import { ChangeEvent, KeyboardEvent, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

export const JoinRoom = () => {
  const navigate = useNavigate()
  const roomRef = useRef<HTMLInputElement>(null)

  const goToRoom = () => {
    const value = roomRef.current?.value
    navigate(`/room/${value}`)
  }

  const onPressEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event.key || event.code) === 'Enter' && !!roomRef.current?.value) {
      goToRoom()
    }
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.currentTarget?.value ?? roomRef.current?.value

    const value = raw.replace(/\D/, '')
    roomRef!.current!.value = value
  }

  return (
    <main>
      <div>
        <label htmlFor='room-number'>Room Number:</label>
        <input
          id='room-number'
          ref={roomRef}
          onKeyUp={onPressEnter}
          onChange={onChange}
        />
      </div>
      <button onClick={goToRoom}>Join</button>
      <span>Some random figure...</span>
    </main>
  )
}
