import React, { useState } from 'react'
import axios from 'axios'

function AddPet() {

    const [petName, setPetName] = useState()
    const [petType, setPetType] = useState()
    const [petAge, setPetAge] = useState()
    const [petBreed, setPetBreed] = useState()

    const addPet = async () => {
        try {
            const petData = {
                name: petName,
                type: petType,
                age: petAge,
                breed: petBreed
            }

            /* FETCH */
            // const response = await fetch('http://localhost:3000/pets/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(petData)
            // })

            // if (response.status === 200) {
            //     const data = await response.json()
            //     window.location.href = `/${data.id}`
            // }

            /* AXIOS */
            const response = await axios.post(
                'http://localhost:3000/pets/',
                petData,
                { headers: { 'Content-Type': 'application/json' } }
            )
                
            if (response.status === 200) window.location.href = `/${response.data.id}`

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', aligniItems: 'center' }}>
            <h2>Add Pet</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet name</label>
                <input type='text' value={petName} onChange={e => setPetName(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet type</label>
                <input type='text' value={petType} onChange={e => setPetType(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet age</label>
                <input type='text' value={petAge} onChange={e => setPetAge(e.target.value)} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', margin: 20 }}>
                <label>Pet breed</label>
                <input type='text' value={petBreed} onChange={e => setPetBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => addPet()}
            >
                Add pet
            </button>
        </div>
    )
}

export default AddPet