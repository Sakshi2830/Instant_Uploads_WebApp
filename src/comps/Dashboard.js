import React, { useState } from "react"

import ImageGrid from './ImageGrid';
import Modal from './Modal';
import Title from './Title';
import UploadForm from './uploadForm';

export default function Dashboard() {
  const [selectedImg, setSelectedImg] = useState(null);
  // const [error, setError] = useState("")
  // const { currentUser, logout } = useAuth()
  // const history = useHistory()

  // async function handleLogout() {
  //   setError("")

  //   try {
  //     await logout()
  //     history.push("/login")
  //   } catch {
  //     setError("Failed to log out")
  //   }
  // }

  return (
<div>
  <Title/>
  <UploadForm/>
  <ImageGrid>
    setSelectedImg={setSelectedImg}
  </ImageGrid>
  {selectedImg && <Modal 
  setSelectedImg={setSelectedImg}
  />}
</div>

  )
}