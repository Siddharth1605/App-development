import React from 'react';
import { VStack, Box, Text, Image } from '@chakra-ui/react';
import { FcConferenceCall } from 'react-icons/fc';
import Navbar from './Navbar';
import { selectAllDoctors } from '../features/doctor/doctorsSlice';
import { useSelector } from 'react-redux';
import doctor_dashb from "../Assets/patient.jpg";

function Userdash() {
  const doctors = useSelector(selectAllDoctors);

  return (
    <div>
      <div style={{ backgroundColor: '#1d2634' }}>
        <VStack
          spacing={4}
          align='stretch'
          px={['2', '4', '6']} // Responsive padding
        >
          <Box
            h={['40px', '50px']} // Responsive height
            bg='#1d2634'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Text
              fontSize={['18px', '24px', '30px']} // Responsive font size
              color='#1d2634'
              as='b'
            >
              Hi Sid! Welcome to Mr.Medico
            </Text>
          </Box>
          {/* Consultation Box */}
         
          {/* Intro about page */}
          <Box
            w={['100%', '80%']}
            ml={['0', 'auto', '100px']}
            maxW={['100%', '900px']}
            mx={['0', 'auto']}
            backgroundColor='#fff'
            p={['4', '6']}
            borderRadius='md'
            boxShadow='md'
            display='flex'
            justifyContent={['center', 'flex-start']}
            alignItems={['center', 'flex-start']}
            flexDirection={['column', 'column']}
          >
            <Text
              fontSize={['24px', '30px']}
              color='black'
              as='b'
              mb='4'
            >
              Refer the Best Doctors Here
            </Text>
            <Text
              fontSize={['16px', '20px']}
              color='black'
            >
              Find top-rated doctors and specialists for your medical needs.
            </Text>
          </Box>
          <Box
          w={['100%', '80%']}
          h={['200px', '300px']}
          ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
          maxW={['100%', '900px']}
          mx={['0', 'auto']}
          backgroundColor='#fff'
          p={['4', '6']}
          borderRadius='md'
          boxShadow='md'
          display='flex'
          flexDirection={['column', 'row']}
          gap={['2', '4']}
        >
            <Image
              src={doctor_dashb}
              alt="Doctor Dashboard"
              maxH="500px"
              style={{ height: '250px', marginRight: '650px' }}
            />
          </Box>
          <Box
          w={['100%', '80%']}
          h={['200px', '300px']}
          ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
          maxW={['100%', '900px']}
          mx={['0', 'auto']}
          backgroundColor='#fff'
          p={['4', '6']}
          borderRadius='md'
          boxShadow='md'
          display='flex'
          justifyContent={['center', 'flex-start']}
          alignItems={['center', 'flex-start']}
          flexDirection={['column', 'row']}
          gap={['2', '4']}
        >
          <FcConferenceCall style={{ fontSize: '30px', color: 'black' }} />
          <Box textAlign={['center', 'left']}>
            <Text fontSize={['24px', '30px']} color='black' as='b'>
              Prescriptions and Medical Records
            </Text>
            <Text fontSize={['16px', '20px']} color='black'>
              Appointment 1 : Fever ----------------- P650 ----------------- M/A/N
            </Text>
            <br />
            <Text fontSize={['16px', '20px']} color='black'>
              Appointment 2 : Cold ----------------- Dolo ----------------- M/A/N
            </Text>
          </Box>
        </Box>
        <Box
        w={['100%', '80%']}
        ml={['0', 'auto', '100px']}
        maxW={['100%', '900px']}
        mx={['0', 'auto']}
        backgroundColor='#fff'
        p={['4', '6']}
        borderRadius='md'
        boxShadow='md'
        display='flex'
        justifyContent={['center', 'flex-start']}
        alignItems={['center', 'flex-start']}
        flexDirection={['column', 'column']}
      >
        <Text
          fontSize={['24px', '30px']}
          color='black'
          as='b'
          mb='4'
        >
          Our best doctors!
        </Text>
       
      </Box>
          {/* Doctors List */}
          {doctors.map((doctor, index) => (
            <Box
              key={index}
              w={['100%', '100%', '80%']}
              h={['auto', 'auto', '300px']}
              ml={['0', 'auto', '100px']}
              maxW={['100%', '900px']}
              mx={['0', 'auto']}
              backgroundColor='#fff'
              p={['4', '6']}
              borderRadius='md'
              boxShadow='md'
              display='flex'
              justifyContent={['center', 'flex-start']}
              alignItems={['center', 'flex-start']}
              flexDirection={['column', 'column', 'row']}
              gap={['2', '4']}
            >
              <img
                src={doctor.imageSrc}
                alt={doctor.name}
                style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  marginTop: '50px',
                  marginRight: '30px'
                }}
              />
              <Box
                textAlign={['center', 'left']}
                width={['100%', '100%', '70%']}
              >
                <Text fontSize={['24px', '30px']} color='black' as='b'>
                  {doctor.name}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Qualification: {doctor.qualification}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Specialization: {doctor.specialization}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Experience: {doctor.exp} years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Age: {doctor.age} years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Rating: {doctor.rating}
                </Text>
                <button
                  style={{
                    backgroundColor: '#1d2634',
                    marginTop: '10px',
                    padding: '8px 16px', // Added padding
                    border: 'none', // Removed border
                    borderRadius: '4px', // Added border radius
                    color: 'white',
                    cursor: 'pointer',
                    
                  }}
                  onClick={() => {
                    window.location.href = '/appointment';
                  }}
                >
                  Book Appointment
                </button>
              </Box>
            </Box>
          ))}
          {/* Add more responsive boxes as needed */}
          {/* ...Your DAdmin component goes here... */}
          <Box
          h={['40px', '50px']} // Responsive height
          bg='#1d2634'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Text
            fontSize={['18px', '24px', '30px']} // Responsive font size
            color='#1d2634'
            as='b'
          >
            Hi Sid! Welcome to Mr.Medico
          </Text>
        </Box>
        </VStack>
      </div>
    </div>
  );
}

export default Userdash;
