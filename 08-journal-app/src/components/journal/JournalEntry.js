import React from 'react'

export const JournalEntry = () => {
  return (
    <div className='journal__entry pointer'>
      <div
        className='journal__entry-picture'
        style={{
          backgroundSize: 'cover',
          backgroundImage:
            'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/281fee4b-ffe6-4523-92a8-a2ee7513ad64/dc45mfw-fcc2eac8-b8d9-4aef-bb16-c724fdcc5c5a.jpg/v1/fill/w_701,h_1139,q_75,strp/mirai_trunks_by_maniaxoi-dc45mfw.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzI4MWZlZTRiLWZmZTYtNDUyMy05MmE4LWEyZWU3NTEzYWQ2NC9kYzQ1bWZ3LWZjYzJlYWM4LWI4ZDktNGFlZi1iYjE2LWM3MjRmZGNjNWM1YS5qcGciLCJ3aWR0aCI6Ijw9NzAxIiwiaGVpZ2h0IjoiPD0xMTM5In1dXSwid21rIjp7InBhdGgiOiIvd20vMjgxZmVlNGItZmZlNi00NTIzLTkyYTgtYTJlZTc1MTNhZDY0L21hbmlheG9pLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.Gx0HeQffJ-f6pW09mSDeSQYzMtliEbpqh_2dJfE8ZSI)',
        }}
      ></div>
      <div className='journal__entry-body'>
        <p className='journal__entry-title'>Un nuevo dia</p>
        <p className='journal__entry-content'>
          Un nuevo contenido asd asdasd asdasdasdasdad sasdsddasas adsasdads
        </p>
      </div>
      <div className='journal__entry-date-box'>
        <span>Monday</span>
        <h4>28</h4>
      </div>
    </div>
  )
}
