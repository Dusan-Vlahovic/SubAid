import React, {useState} from "react";
import { PASTACTIVITIES, PATIENTS, NOTIFICATIONS } from "../../constants/dashboard";
import Badge from '@mui/material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Button } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import DraftsOutlinedIcon from '@mui/icons-material/DraftsOutlined';

const Dashboard = () => {
  const [selectedPatient, setSelectedPatient] = useState(-1);
  const [selectedNotification, setSelectedNotification] = useState(-1);
  const [activePatient, setActivePatient] = useState(null);
  const [activeNotification, setActiveNotification] = useState(null);

  const handleSelectPatient = (index: number) => {
    setSelectedPatient(index);
    setSelectedNotification(-1);
    setActivePatient(PATIENTS[index]);
    setActiveNotification(null);
  }

  const handleSelectNotification = (index: number) => {
    setSelectedNotification(index);
    setSelectedPatient(-1);
    setActiveNotification(NOTIFICATIONS[index]);
    setActivePatient(null);
  }

  return (
    <div className='grid grid-cols-12'>
      <div className='col-span-3 pr-8'>
        <div className='bg-blue-50 text-white text-xl px-5 py-3'>Past Activity</div>
        <div className='border-b-2 border-dotted border-blue-50 py-6'>
          {PASTACTIVITIES.map((activity, index) => (
            <div key={`activity-${index}`} className='flex items-start'>
              <div className='h-20 relative mr-3'>
                <div className='bg-blue-50 rounded-full w-3 h-3' />
                <div className={`absolute top-0 left-1 h-full bg-blue-50 ${activity.pasted ? 'w-1' : 'w-0.5'}`} />
              </div>
              <div className='flex flex-grow w-0 align-center bg-white rounded-xl'>
                <div className='w-20 px-4 py-2 border-r-4 border-solid border-gray-150 text-gray-200 '>{activity.date}</div>
                <div className='flex flex-grow h-16 px-4 items-center justify-center bg-white rounded-xl text-gray-200'>{activity.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='col-span-9 flex flex-col bg-white'>
        <div className='grid grid-cols-12 border-b-4 border-solid border-gray-150'>
          <div className='col-span-6 border-r-4 border-solid border-gray-150'>
            <div className='bg-blue-50 text-white text-xl px-5 py-3'>Today's expecting patients</div>
            <div className='h-64 overflow-auto m-2 px-5'>
              {PATIENTS.map((patient, index) => (
                <div
                  key={`patient-${index}`}
                  className={`flex cursor-pointer px-5 py-2 items-center ${index === selectedPatient ? 'bg-blue-300 text-white' : ''} ${index < (PATIENTS.length - 1) ? 'border-b-4 border-solid border-gray-150' : ''}`}
                  onClick={() => handleSelectPatient(index)}
                >
                  <div className='mr-7'>
                    <img src={patient.avatar} alt="avatar" className='w-8' />
                  </div>
                  <div className='flex items-center'>
                    <div className={`mr-2 ${index === selectedPatient ? 'text-white' : 'text-blue-50'}`}>{patient.id}</div>
                    <span className='text-gray-200'>|</span>
                    <div className={`ml-2 ${index === selectedPatient ? 'white' : 'text-gray-200'}`}>{patient.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-6'>
            <div className='flex items-center justify-between bg-blue-50 text-white px-5 py-3'>
              <span className='text-xl'>Notifications</span>
              <Badge
                badgeContent={NOTIFICATIONS.length}
                color="primary"
                sx={{
                  color: 'red',
                  "&.MuiBadge-badge": {
                    padding: '0 4px',
                    height: '16px',
                    minWidth: '16px'
                  }
                }}
              >
                <NotificationsIcon
                  sx={{
                    color: 'white',
                    transform: 'rotate(30deg)'
                  }}
                />
              </Badge>
            </div>
            <div className='h-64 overflow-auto m-2 px-5'>
              {NOTIFICATIONS.map((notification, index) => (
                <div
                  key={`notification-${index}`}
                  className={`flex items-center px-5 py-2 cursor-pointer ${index === selectedNotification ? 'bg-blue-300' : ''} ${index < (NOTIFICATIONS.length - 1) ? 'border-b-4 border-solid border-gray-150' : ''}`}
                  onClick={() => handleSelectNotification(index)}
                >
                  {index === selectedNotification ? (
                    <DraftsOutlinedIcon
                      sx={{
                        fontSize: '1.25rem',
                        marginRight: '0.5rem',
                        color: 'white'
                      }}
                    />
                  ) : (
                    <EmailIcon
                      sx={{
                        fontSize: '1.25rem',
                        marginRight: '0.5rem',
                        color: '#8db9c9'
                      }}
                    />
                  )}
                  <div className={`flex items-center ml-1 h-8 ${index === selectedNotification ? 'text-white' : 'text-gray-200'}`}>{notification.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {activePatient && (
          <div className='flex-grow h-0 overflow-auto'>
            <div className='flex items-center justify-between px-8 pt-8 py-12'>
              <div className='flex items-center'>
                <img src={activePatient.avatar} alt="avatar" className='w-10   mr-8' />
                <div className='mr-2 text-blue-50'>{activePatient.id}</div>
                <span>|</span>
                <div className='ml-2 text-gray-200'>{activePatient.name}</div>
              </div>
              <div className='flex items-center'>
                <Button
                  sx={{
                    textTransform: 'unset',
                    letterSpacing: '0',
                    color: '#8db9c9',
                    boxShadow: '0 0 5px #8db9c9',
                    marginRight: '1.5rem',
                    padding: '0.5rem, 1rem',
                    cursor: 'pointer'
                  }}
                >
                  Give dose of substitution
                </Button>
                <Button
                  sx={{
                    textTransform: 'unset',
                    letterSpacing: '0',
                    color: '#8db9c9',
                    boxShadow: '0 0 5px #8db9c9',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}
                >
                  Go to Patient Profil
                </Button>
              </div>
            </div>
            <div className='text-gray-200 px-8 border-b-4 border-solid border-gray-150'>{activePatient.desc}</div>
            <div className='text-gray-200 font-bold text-lg px-8 mt-2'>Taskboard (Patient de-register)</div>
          </div>
        )}
        {activeNotification && (
          <div className='flex-grow h-0 overflow-auto py-8'>
            <div className='flex items-center justify-between px-8 pb-8'>
              <div className='text-gray-200 font-bold'>{activeNotification.title}</div>
              <div className='flex items-center'>
                <EditIcon
                  sx={{
                    color: '#8db9c9',
                    marginRight: '1rem',
                    cursor: 'pointer'
                  }}
                />
                <DeleteForeverIcon
                  sx={{
                    color: '#8db9c9',
                    cursor: 'pointer'
                  }}
                />
              </div>
            </div>
            <div className='px-8 pb-8 text-gray-200'>{activeNotification.content}</div>
            <div className='flex items-center justify-between px-8'>
              <div className='flex items-center'>
                <Button
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    textTransform: 'unset',
                    letterSpacing: '0',
                    color: '#8db9c9',
                    boxShadow: '0 0 5px #8db9c9',
                    marginRight: '1.5rem',
                    padding: '0.5rem, 1rem',
                    cursor: 'pointer'
                  }}
                >
                  Go to Medication
                </Button>
                <Button
                  endIcon={<ArrowRightAltIcon />}
                  sx={{
                    textTransform: 'unset',
                    letterSpacing: '0',
                    color: '#8db9c9',
                    boxShadow: '0 0 5px #8db9c9',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}
                >
                  Go to My Patients
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    backgroundColor: '#8db9c9',
                    color: '#158fa4',
                    textTransform: 'unset',
                    boxShadow: '0 0 5px #8db9c9',
                    padding: '0.5rem 1rem',
                    cursor: 'pointer'
                  }}
                >
                  Mark as done
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;